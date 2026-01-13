import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { DocumentVersion } from './document-version.entity';

export enum DocumentType {
  POLICY = 'policy',
  PROCEDURE = 'procedure',
}

export enum DocumentStatus {
  DRAFT = 'draft',
  IN_REVIEW = 'in_review',
  APPROVED = 'approved',
  OBSOLETE = 'obsolete',
}

export enum DocumentCategory {
  INFORMATION_SECURITY = 'information_security',
  ACCESS_CONTROL = 'access_control',
  CRYPTOGRAPHY = 'cryptography',
  PHYSICAL_SECURITY = 'physical_security',
  OPERATIONS = 'operations',
  COMMUNICATIONS = 'communications',
  ACQUISITION = 'acquisition',
  SUPPLIER_RELATIONS = 'supplier_relations',
  INCIDENT_MANAGEMENT = 'incident_management',
  BUSINESS_CONTINUITY = 'business_continuity',
  COMPLIANCE = 'compliance',
  HUMAN_RESOURCES = 'human_resources',
  ASSET_MANAGEMENT = 'asset_management',
  OTHER = 'other',
}

@Entity('documents')
export class Document {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string; // e.g., "POL-001", "PROC-002"

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column('text')
  content: string;

  @Column({
    type: 'simple-enum',
    enum: DocumentType,
  })
  type: DocumentType;

  @Column({
    type: 'simple-enum',
    enum: DocumentStatus,
    default: DocumentStatus.DRAFT,
  })
  status: DocumentStatus;

  @Column({
    type: 'simple-enum',
    enum: DocumentCategory,
  })
  category: DocumentCategory;

  @Column({ default: '1.0' })
  version: string;

  @Column({ type: 'int', default: 1 })
  majorVersion: number;

  @Column({ type: 'int', default: 0 })
  minorVersion: number;

  @Column('simple-array', { nullable: true })
  relatedControlIds: string[];

  @Column({ nullable: true })
  ownerId: string;

  @Column({ nullable: true })
  approverId: string;

  @Column({ type: 'datetime', nullable: true })
  approvedAt: Date;

  @Column({ type: 'datetime', nullable: true })
  reviewDate: Date;

  @Column({ type: 'int', default: 12 })
  reviewPeriodMonths: number;

  @Column('simple-array', { nullable: true })
  tags: string[];

  @Column({ type: 'text', nullable: true })
  changeNotes: string;

  @Column({ default: false })
  isTemplate: boolean;

  @OneToMany(() => DocumentVersion, (version) => version.document)
  versions: DocumentVersion[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
