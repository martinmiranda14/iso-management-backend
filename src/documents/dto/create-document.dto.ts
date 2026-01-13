import {
  IsString,
  IsEnum,
  IsOptional,
  IsArray,
  IsBoolean,
  IsInt,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { DocumentType, DocumentCategory } from '../entities/document.entity';

export class CreateDocumentDto {
  @ApiProperty({ example: 'POL-001' })
  @IsString()
  code: string;

  @ApiProperty({ example: 'Política de Seguridad de la Información' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Establece las directrices generales...' })
  @IsString()
  description: string;

  @ApiProperty({ example: 'Contenido del documento...' })
  @IsString()
  content: string;

  @ApiProperty({ enum: DocumentType })
  @IsEnum(DocumentType)
  type: DocumentType;

  @ApiProperty({ enum: DocumentCategory })
  @IsEnum(DocumentCategory)
  category: DocumentCategory;

  @ApiProperty({ required: false, example: ['control-id-1', 'control-id-2'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  relatedControlIds?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  ownerId?: string;

  @ApiProperty({ required: false, example: 12 })
  @IsOptional()
  @IsInt()
  @Min(1)
  reviewPeriodMonths?: number;

  @ApiProperty({ required: false, example: ['confidencialidad', 'iso27001'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @ApiProperty({ required: false, example: false })
  @IsOptional()
  @IsBoolean()
  isTemplate?: boolean;
}
