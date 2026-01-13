import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ApproveDocumentDto {
  @ApiProperty({ required: false, example: 'Documento revisado y aprobado' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({
    required: false,
    example: true,
    description: 'Si es true, incrementa la versión major, si es false incrementa la minor',
  })
  @IsOptional()
  @IsBoolean()
  isMajorVersion?: boolean;
}
