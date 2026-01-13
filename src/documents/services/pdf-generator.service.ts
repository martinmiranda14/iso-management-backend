import { Injectable } from '@nestjs/common';
import { marked } from 'marked';
import * as puppeteer from 'puppeteer';
import { Document } from '../entities/document.entity';

@Injectable()
export class PdfGeneratorService {
  private getHTMLTemplate(document: Document, htmlContent: string): string {
    const statusBadge = this.getStatusBadge(document.status);
    const typeBadge = this.getTypeBadge(document.type);

    return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${document.title}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Helvetica', 'Arial', sans-serif;
      line-height: 1.6;
      color: #333;
      padding: 40px;
      max-width: 210mm;
      margin: 0 auto;
    }

    .header {
      border-bottom: 3px solid #2563eb;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }

    .logo-section {
      text-align: center;
      margin-bottom: 20px;
    }

    .document-code {
      font-size: 14px;
      color: #6b7280;
      font-weight: 600;
    }

    .document-title {
      font-size: 28px;
      font-weight: bold;
      color: #1f2937;
      margin: 10px 0;
    }

    .badges {
      display: flex;
      gap: 10px;
      margin-top: 15px;
    }

    .badge {
      padding: 5px 12px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
    }

    ${statusBadge.style}
    ${typeBadge.style}

    .metadata {
      background-color: #f3f4f6;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 30px;
    }

    .metadata-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }

    .metadata-item {
      font-size: 13px;
    }

    .metadata-label {
      font-weight: 600;
      color: #6b7280;
      margin-bottom: 4px;
    }

    .metadata-value {
      color: #1f2937;
    }

    .content {
      font-size: 14px;
      line-height: 1.8;
    }

    .content h1 {
      font-size: 24px;
      color: #1f2937;
      margin-top: 30px;
      margin-bottom: 15px;
      border-bottom: 2px solid #e5e7eb;
      padding-bottom: 8px;
    }

    .content h2 {
      font-size: 20px;
      color: #374151;
      margin-top: 25px;
      margin-bottom: 12px;
    }

    .content h3 {
      font-size: 16px;
      color: #4b5563;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .content p {
      margin-bottom: 12px;
      text-align: justify;
    }

    .content ul, .content ol {
      margin-left: 25px;
      margin-bottom: 12px;
    }

    .content li {
      margin-bottom: 6px;
    }

    .content strong {
      color: #1f2937;
      font-weight: 700;
    }

    .content code {
      background-color: #f3f4f6;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
      font-size: 13px;
    }

    .content pre {
      background-color: #1f2937;
      color: #f3f4f6;
      padding: 15px;
      border-radius: 6px;
      overflow-x: auto;
      margin-bottom: 15px;
    }

    .content pre code {
      background-color: transparent;
      padding: 0;
      color: inherit;
    }

    .content blockquote {
      border-left: 4px solid #2563eb;
      padding-left: 15px;
      margin: 15px 0;
      color: #6b7280;
      font-style: italic;
    }

    .footer {
      margin-top: 50px;
      padding-top: 20px;
      border-top: 2px solid #e5e7eb;
      font-size: 12px;
      color: #6b7280;
      text-align: center;
    }

    .page-break {
      page-break-after: always;
    }

    @media print {
      body {
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo-section">
      <!-- Logo de la organización aquí -->
    </div>
    <div class="document-code">${document.code}</div>
    <h1 class="document-title">${document.title}</h1>
    <div class="badges">
      <span class="badge badge-type">${typeBadge.text}</span>
      <span class="badge badge-status">${statusBadge.text}</span>
    </div>
  </div>

  <div class="metadata">
    <div class="metadata-grid">
      <div class="metadata-item">
        <div class="metadata-label">Versión:</div>
        <div class="metadata-value">${document.version}</div>
      </div>
      <div class="metadata-item">
        <div class="metadata-label">Categoría:</div>
        <div class="metadata-value">${this.getCategoryName(document.category)}</div>
      </div>
      <div class="metadata-item">
        <div class="metadata-label">Fecha de Creación:</div>
        <div class="metadata-value">${new Date(document.createdAt).toLocaleDateString('es-ES')}</div>
      </div>
      ${
        document.approvedAt
          ? `
      <div class="metadata-item">
        <div class="metadata-label">Fecha de Aprobación:</div>
        <div class="metadata-value">${new Date(document.approvedAt).toLocaleDateString('es-ES')}</div>
      </div>
      `
          : ''
      }
      ${
        document.reviewDate
          ? `
      <div class="metadata-item">
        <div class="metadata-label">Próxima Revisión:</div>
        <div class="metadata-value">${new Date(document.reviewDate).toLocaleDateString('es-ES')}</div>
      </div>
      `
          : ''
      }
    </div>
  </div>

  <div class="content">
    ${htmlContent}
  </div>

  <div class="footer">
    <p>Este documento es propiedad de la organización y es confidencial.</p>
    <p>Generado el ${new Date().toLocaleDateString('es-ES')} a las ${new Date().toLocaleTimeString('es-ES')}</p>
  </div>
</body>
</html>
    `;
  }

  private getStatusBadge(status: string): { text: string; style: string } {
    const badges: Record<
      string,
      { text: string; bg: string; color: string }
    > = {
      draft: { text: 'Borrador', bg: '#fef3c7', color: '#92400e' },
      in_review: { text: 'En Revisión', bg: '#dbeafe', color: '#1e40af' },
      approved: { text: 'Aprobado', bg: '#d1fae5', color: '#065f46' },
      obsolete: { text: 'Obsoleto', bg: '#fee2e2', color: '#991b1b' },
    };

    const badge = badges[status] || badges.draft;
    return {
      text: badge.text,
      style: `.badge-status { background-color: ${badge.bg}; color: ${badge.color}; }`,
    };
  }

  private getTypeBadge(type: string): { text: string; style: string } {
    const badges: Record<
      string,
      { text: string; bg: string; color: string }
    > = {
      policy: { text: 'Política', bg: '#e0e7ff', color: '#3730a3' },
      procedure: { text: 'Procedimiento', bg: '#fce7f3', color: '#831843' },
    };

    const badge = badges[type] || badges.policy;
    return {
      text: badge.text,
      style: `.badge-type { background-color: ${badge.bg}; color: ${badge.color}; }`,
    };
  }

  private getCategoryName(category: string): string {
    const categories: Record<string, string> = {
      information_security: 'Seguridad de la Información',
      access_control: 'Control de Acceso',
      cryptography: 'Criptografía',
      physical_security: 'Seguridad Física',
      operations: 'Operaciones',
      communications: 'Comunicaciones',
      acquisition: 'Adquisición',
      supplier_relations: 'Relaciones con Proveedores',
      incident_management: 'Gestión de Incidentes',
      business_continuity: 'Continuidad del Negocio',
      compliance: 'Cumplimiento',
      human_resources: 'Recursos Humanos',
      asset_management: 'Gestión de Activos',
      other: 'Otros',
    };

    return categories[category] || category;
  }

  async generatePDF(document: Document): Promise<Buffer> {
    // Convert markdown to HTML
    const htmlContent = await marked(document.content);

    // Generate full HTML document
    const fullHTML = this.getHTMLTemplate(document, htmlContent);

    // Launch puppeteer and generate PDF
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setContent(fullHTML, { waitUntil: 'networkidle0' });

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        right: '15mm',
        bottom: '20mm',
        left: '15mm',
      },
    });

    await browser.close();

    return Buffer.from(pdf);
  }
}
