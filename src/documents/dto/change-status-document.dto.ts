import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { DocumentStatus } from '../entities/document.entity';

export class ChangeStatusDocumentDto {
  @ApiProperty({ enum: DocumentStatus })
  @IsEnum(DocumentStatus)
  status: DocumentStatus;

  @ApiProperty({ required: false, example: 'Cambio de estado...' })
  @IsOptional()
  @IsString()
  notes?: string;
}
