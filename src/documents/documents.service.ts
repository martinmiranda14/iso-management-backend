import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document, DocumentStatus } from './entities/document.entity';
import { DocumentVersion } from './entities/document-version.entity';
import {
  CreateDocumentDto,
  UpdateDocumentDto,
  ApproveDocumentDto,
  ChangeStatusDocumentDto,
} from './dto';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private documentsRepository: Repository<Document>,
    @InjectRepository(DocumentVersion)
    private documentVersionsRepository: Repository<DocumentVersion>,
  ) {}

  async create(
    createDocumentDto: CreateDocumentDto,
    userId?: string,
  ): Promise<Document> {
    // Check if code already exists
    const existingDoc = await this.documentsRepository.findOne({
      where: { code: createDocumentDto.code },
    });

    if (existingDoc) {
      throw new BadRequestException(
        `Document with code ${createDocumentDto.code} already exists`,
      );
    }

    const document = this.documentsRepository.create({
      ...createDocumentDto,
      ownerId: createDocumentDto.ownerId || userId,
      status: DocumentStatus.DRAFT,
      version: '1.0',
      majorVersion: 1,
      minorVersion: 0,
    });

    const savedDocument = await this.documentsRepository.save(document);

    // Create initial version
    await this.createVersion(
      savedDocument,
      'Versión inicial',
      userId,
      'Usuario',
    );

    return savedDocument;
  }

  async findAll(): Promise<Document[]> {
    return this.documentsRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Document> {
    const document = await this.documentsRepository.findOne({
      where: { id },
      relations: ['versions'],
    });

    if (!document) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }

    return document;
  }

  async update(
    id: string,
    updateDocumentDto: UpdateDocumentDto,
    userId?: string,
  ): Promise<Document> {
    const document = await this.findOne(id);

    // Only drafts can be edited without creating a new version
    if (document.status !== DocumentStatus.DRAFT) {
      throw new BadRequestException(
        'Only draft documents can be edited. Approved documents must be versioned.',
      );
    }

    Object.assign(document, updateDocumentDto);

    const updated = await this.documentsRepository.save(document);

    // Update the latest version if changeNotes provided
    if (updateDocumentDto.changeNotes) {
      const latestVersion = await this.documentVersionsRepository.findOne({
        where: { documentId: id },
        order: { createdAt: 'DESC' },
      });

      if (latestVersion) {
        latestVersion.content = updated.content;
        latestVersion.changeNotes = updateDocumentDto.changeNotes;
        await this.documentVersionsRepository.save(latestVersion);
      }
    }

    return updated;
  }

  async remove(id: string): Promise<void> {
    const document = await this.findOne(id);
    await this.documentsRepository.remove(document);
  }

  async changeStatus(
    id: string,
    changeStatusDto: ChangeStatusDocumentDto,
    userId?: string,
  ): Promise<Document> {
    const document = await this.findOne(id);

    const oldStatus = document.status;
    document.status = changeStatusDto.status;

    if (changeStatusDto.notes) {
      document.changeNotes = changeStatusDto.notes;
    }

    const updated = await this.documentsRepository.save(document);

    // Create version entry for status change
    await this.createVersion(
      updated,
      `Estado cambiado de ${oldStatus} a ${changeStatusDto.status}${changeStatusDto.notes ? ': ' + changeStatusDto.notes : ''}`,
      userId,
      'Usuario',
    );

    return updated;
  }

  async approve(
    id: string,
    approveDto: ApproveDocumentDto,
    approverId?: string,
  ): Promise<Document> {
    const document = await this.findOne(id);

    if (document.status !== DocumentStatus.IN_REVIEW) {
      throw new BadRequestException(
        'Only documents in review can be approved',
      );
    }

    // Increment version
    if (approveDto.isMajorVersion) {
      document.majorVersion++;
      document.minorVersion = 0;
    } else {
      document.minorVersion++;
    }

    document.version = `${document.majorVersion}.${document.minorVersion}`;
    document.status = DocumentStatus.APPROVED;
    if (approverId) {
      document.approverId = approverId;
    }
    document.approvedAt = new Date();

    // Calculate next review date
    const reviewDate = new Date();
    reviewDate.setMonth(reviewDate.getMonth() + document.reviewPeriodMonths);
    document.reviewDate = reviewDate;

    const updated = await this.documentsRepository.save(document);

    // Create version entry
    await this.createVersion(
      updated,
      `Documento aprobado - Versión ${document.version}${approveDto.notes ? ': ' + approveDto.notes : ''}`,
      approverId,
      'Aprobador',
    );

    return updated;
  }

  async sendToReview(
    id: string,
    userId?: string,
  ): Promise<Document> {
    const document = await this.findOne(id);

    if (document.status !== DocumentStatus.DRAFT) {
      throw new BadRequestException('Only draft documents can be sent to review');
    }

    document.status = DocumentStatus.IN_REVIEW;
    const updated = await this.documentsRepository.save(document);

    await this.createVersion(
      updated,
      'Documento enviado a revisión',
      userId,
      'Usuario',
    );

    return updated;
  }

  async makeObsolete(
    id: string,
    reason: string,
    userId?: string,
  ): Promise<Document> {
    const document = await this.findOne(id);

    document.status = DocumentStatus.OBSOLETE;
    const updated = await this.documentsRepository.save(document);

    await this.createVersion(
      updated,
      `Documento marcado como obsoleto: ${reason}`,
      userId,
      'Usuario',
    );

    return updated;
  }

  async getVersions(documentId: string): Promise<DocumentVersion[]> {
    return this.documentVersionsRepository.find({
      where: { documentId },
      order: { createdAt: 'DESC' },
    });
  }

  async getVersion(documentId: string, versionId: string): Promise<DocumentVersion> {
    const version = await this.documentVersionsRepository.findOne({
      where: { id: versionId, documentId },
    });

    if (!version) {
      throw new NotFoundException('Version not found');
    }

    return version;
  }

  async getTemplates(): Promise<Document[]> {
    return this.documentsRepository.find({
      where: { isTemplate: true },
      order: { title: 'ASC' },
    });
  }

  async createFromTemplate(
    templateId: string,
    newCode: string,
    newTitle: string,
    userId?: string,
  ): Promise<Document> {
    const template = await this.findOne(templateId);

    if (!template.isTemplate) {
      throw new BadRequestException('Document is not a template');
    }

    const newDocument = this.documentsRepository.create({
      code: newCode,
      title: newTitle,
      description: template.description,
      content: template.content,
      type: template.type,
      category: template.category,
      relatedControlIds: template.relatedControlIds,
      reviewPeriodMonths: template.reviewPeriodMonths,
      tags: template.tags,
      status: DocumentStatus.DRAFT,
      version: '1.0',
      majorVersion: 1,
      minorVersion: 0,
      isTemplate: false,
      ownerId: userId,
    });

    const saved = await this.documentsRepository.save(newDocument);

    await this.createVersion(
      saved,
      `Creado desde plantilla: ${template.title}`,
      userId,
      'Usuario',
    );

    return saved;
  }

  private async createVersion(
    document: Document,
    changeNotes: string,
    userId?: string,
    userName?: string,
  ): Promise<DocumentVersion> {
    const version = this.documentVersionsRepository.create({
      documentId: document.id,
      version: document.version,
      majorVersion: document.majorVersion,
      minorVersion: document.minorVersion,
      content: document.content,
      changeNotes,
      createdById: userId,
      createdByName: userName,
    });

    return this.documentVersionsRepository.save(version);
  }
}
