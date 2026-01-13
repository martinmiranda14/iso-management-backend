import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
  Res,
  Header,
} from '@nestjs/common';
import type { Response } from 'express';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { DocumentsService } from './documents.service';
import {
  CreateDocumentDto,
  UpdateDocumentDto,
  ApproveDocumentDto,
  ChangeStatusDocumentDto,
} from './dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { PdfGeneratorService } from './services/pdf-generator.service';

@ApiTags('documents')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('documents')
export class DocumentsController {
  constructor(
    private readonly documentsService: DocumentsService,
    private readonly pdfGeneratorService: PdfGeneratorService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new document' })
  create(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentsService.create(createDocumentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all documents' })
  findAll() {
    return this.documentsService.findAll();
  }

  @Get('templates')
  @ApiOperation({ summary: 'Get all document templates' })
  getTemplates() {
    return this.documentsService.getTemplates();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a document by ID' })
  findOne(@Param('id') id: string) {
    return this.documentsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a document' })
  update(
    @Param('id') id: string,
    @Body() updateDocumentDto: UpdateDocumentDto,
  ) {
    return this.documentsService.update(id, updateDocumentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a document' })
  remove(@Param('id') id: string) {
    return this.documentsService.remove(id);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Change document status' })
  changeStatus(
    @Param('id') id: string,
    @Body() changeStatusDto: ChangeStatusDocumentDto,
  ) {
    return this.documentsService.changeStatus(id, changeStatusDto);
  }

  @Post(':id/send-to-review')
  @ApiOperation({ summary: 'Send document to review' })
  sendToReview(@Param('id') id: string) {
    return this.documentsService.sendToReview(id);
  }

  @Post(':id/approve')
  @ApiOperation({ summary: 'Approve a document' })
  approve(
    @Param('id') id: string,
    @Body() approveDto: ApproveDocumentDto,
  ) {
    return this.documentsService.approve(id, approveDto);
  }

  @Post(':id/obsolete')
  @ApiOperation({ summary: 'Mark document as obsolete' })
  makeObsolete(
    @Param('id') id: string,
    @Body() body: { reason: string },
  ) {
    return this.documentsService.makeObsolete(id, body.reason);
  }

  @Get(':id/versions')
  @ApiOperation({ summary: 'Get all versions of a document' })
  getVersions(@Param('id') id: string) {
    return this.documentsService.getVersions(id);
  }

  @Get(':id/versions/:versionId')
  @ApiOperation({ summary: 'Get a specific version of a document' })
  getVersion(
    @Param('id') id: string,
    @Param('versionId') versionId: string,
  ) {
    return this.documentsService.getVersion(id, versionId);
  }

  @Post('from-template/:templateId')
  @ApiOperation({ summary: 'Create a document from a template' })
  createFromTemplate(
    @Param('templateId') templateId: string,
    @Body() body: { code: string; title: string },
  ) {
    return this.documentsService.createFromTemplate(
      templateId,
      body.code,
      body.title,
    );
  }

  @Get(':id/pdf')
  @ApiOperation({ summary: 'Generate PDF of a document' })
  @Header('Content-Type', 'application/pdf')
  async generatePdf(@Param('id') id: string, @Res() res: Response) {
    const document = await this.documentsService.findOne(id);
    const pdf = await this.pdfGeneratorService.generatePDF(document);

    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${document.code}-${document.title}.pdf"`,
    );
    res.send(pdf);
  }
}
