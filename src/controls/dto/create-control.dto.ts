import { IsString, IsNotEmpty, IsEnum, IsOptional, IsInt, Min, Max, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ControlCategory, ImplementationStatus } from '../entities/control.entity';

export class CreateControlDto {
  @ApiProperty({ example: '5.1', description: 'Unique control code (e.g., ISO 27002 control number)' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ example: 'Information security policies', description: 'Control name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'A set of policies for information security shall be defined, approved by management, published and communicated to employees and relevant external parties.',
    description: 'Detailed description of the control'
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ enum: ControlCategory, example: ControlCategory.ORGANIZATIONAL })
  @IsEnum(ControlCategory)
  @IsNotEmpty()
  category: ControlCategory;

  @ApiProperty({ enum: ImplementationStatus, example: ImplementationStatus.NOT_STARTED, required: false })
  @IsEnum(ImplementationStatus)
  @IsOptional()
  status?: ImplementationStatus;

  @ApiProperty({ example: 'Implementation in progress, policy draft created', required: false })
  @IsString()
  @IsOptional()
  implementationNotes?: string;

  @ApiProperty({ example: 50, description: 'Implementation percentage (0-100)', required: false })
  @IsInt()
  @Min(0)
  @Max(100)
  @IsOptional()
  implementationPercentage?: number;

  @ApiProperty({ example: ['5.2', '5.3'], description: 'Array of related control codes', required: false, type: [String] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  relatedControls?: string[];

  @ApiProperty({ example: 'uuid-of-responsible-user', required: false })
  @IsString()
  @IsOptional()
  responsibleUserId?: string;
}
