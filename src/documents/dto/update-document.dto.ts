import { PartialType } from '@nestjs/swagger';
import { CreateDocumentDto } from './create-document.dto';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDocumentDto extends PartialType(CreateDocumentDto) {
  @ApiProperty({ required: false, example: 'Actualización de contenido...' })
  @IsOptional()
  @IsString()
  changeNotes?: string;
}
