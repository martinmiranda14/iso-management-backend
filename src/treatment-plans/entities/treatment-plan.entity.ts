import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum TreatmentStrategy {
  MITIGATE = 'mitigate',
  TRANSFER = 'transfer',
  AVOID = 'avoid',
  ACCEPT = 'accept',
}

export enum TreatmentStatus {
  PLANNED = 'planned',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity('treatment_plans')
export class TreatmentPlan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  riskId: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({
    type: 'simple-enum',
    enum: TreatmentStrategy,
  })
  strategy: TreatmentStrategy;

  @Column({
    type: 'simple-enum',
    enum: TreatmentStatus,
    default: TreatmentStatus.PLANNED,
  })
  status: TreatmentStatus;

  @Column('simple-array', { nullable: true })
  controlIds: string[];

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  estimatedCost: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  actualCost: number;

  @Column({ type: 'date', nullable: true })
  plannedStartDate: Date;

  @Column({ type: 'date', nullable: true })
  plannedEndDate: Date;

  @Column({ type: 'date', nullable: true })
  actualStartDate: Date;

  @Column({ type: 'date', nullable: true })
  actualEndDate: Date;

  @Column({ nullable: true })
  responsibleUserId: string;

  @Column({ type: 'int', default: 0 })
  completionPercentage: number;

  @Column('text', { nullable: true })
  notes: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
