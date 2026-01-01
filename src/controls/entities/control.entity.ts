import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum ControlCategory {
  ORGANIZATIONAL = 'organizational',
  PEOPLE = 'people',
  PHYSICAL = 'physical',
  TECHNOLOGICAL = 'technological',
}

export enum ImplementationStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  IMPLEMENTED = 'implemented',
  NOT_APPLICABLE = 'not_applicable',
}

@Entity('controls')
export class Control {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  code: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column({
    type: 'simple-enum',
    enum: ControlCategory,
  })
  category: ControlCategory;

  @Column({
    type: 'simple-enum',
    enum: ImplementationStatus,
    default: ImplementationStatus.NOT_STARTED,
  })
  status: ImplementationStatus;

  @Column('text', { nullable: true })
  implementationNotes: string;

  @Column({ type: 'int', default: 0 })
  implementationPercentage: number;

  @Column('simple-array', { nullable: true })
  relatedControls: string[];

  @Column({ nullable: true })
  responsibleUserId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
