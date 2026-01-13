import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { Document } from './entities/document.entity';
import { DocumentVersion } from './entities/document-version.entity';
import { TemplatesSeederService } from './templates/templates-seeder.service';
import { PdfGeneratorService } from './services/pdf-generator.service';

@Module({
  imports: [TypeOrmModule.forFeature([Document, DocumentVersion])],
  controllers: [DocumentsController],
  providers: [DocumentsService, TemplatesSeederService, PdfGeneratorService],
  exports: [DocumentsService],
})
export class DocumentsModule {}
