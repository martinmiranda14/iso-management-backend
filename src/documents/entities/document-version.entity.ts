import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Document } from './document.entity';

@Entity('document_versions')
export class DocumentVersion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  documentId: string;

  @ManyToOne(() => Document, (document) => document.versions)
  @JoinColumn({ name: 'documentId' })
  document: Document;

  @Column()
  version: string;

  @Column({ type: 'int' })
  majorVersion: number;

  @Column({ type: 'int' })
  minorVersion: number;

  @Column('text')
  content: string;

  @Column({ type: 'text', nullable: true })
  changeNotes: string;

  @Column({ nullable: true })
  createdById: string;

  @Column({ nullable: true })
  createdByName: string;

  @CreateDateColumn()
  createdAt: Date;
}
