import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document, DocumentStatus } from '../entities/document.entity';
import { ISO27001_TEMPLATES } from './iso27001-templates';

@Injectable()
export class TemplatesSeederService implements OnModuleInit {
  constructor(
    @InjectRepository(Document)
    private documentsRepository: Repository<Document>,
  ) {}

  async onModuleInit() {
    await this.seedTemplates();
  }

  async seedTemplates() {
    for (const template of ISO27001_TEMPLATES) {
      const exists = await this.documentsRepository.findOne({
        where: { code: template.code },
      });

      if (!exists) {
        const document = this.documentsRepository.create({
          ...template,
          status: DocumentStatus.APPROVED,
          isTemplate: true,
          version: '1.0',
          majorVersion: 1,
          minorVersion: 0,
        });

        await this.documentsRepository.save(document);
        console.log(`✓ Template created: ${template.code} - ${template.title}`);
      }
    }
  }

  async resetTemplates() {
    // Delete existing templates
    await this.documentsRepository.delete({ isTemplate: true });

    // Reseed
    await this.seedTemplates();
  }
}
