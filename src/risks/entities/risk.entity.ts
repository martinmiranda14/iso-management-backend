import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum RiskStatus {
  IDENTIFIED = 'identified',
  ASSESSED = 'assessed',
  TREATED = 'treated',
  ACCEPTED = 'accepted',
  CLOSED = 'closed',
}

export enum RiskLikelihood {
  VERY_LOW = 1,
  LOW = 2,
  MEDIUM = 3,
  HIGH = 4,
  VERY_HIGH = 5,
}

export enum RiskImpact {
  VERY_LOW = 1,
  LOW = 2,
  MEDIUM = 3,
  HIGH = 4,
  VERY_HIGH = 5,
}

@Entity('risks')
export class Risk {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({
    type: 'simple-enum',
    enum: RiskStatus,
    default: RiskStatus.IDENTIFIED,
  })
  status: RiskStatus;

  @Column({ nullable: true })
  assetId: string;

  @Column('simple-array', { nullable: true })
  threatSources: string[];

  @Column('simple-array', { nullable: true })
  vulnerabilities: string[];

  @Column({
    type: 'int',
    default: RiskLikelihood.MEDIUM,
  })
  likelihood: RiskLikelihood;

  @Column({
    type: 'int',
    default: RiskImpact.MEDIUM,
  })
  impact: RiskImpact;

  @Column({ type: 'int', nullable: true })
  riskScore: number;

  @Column({ nullable: true })
  riskLevel: string;

  @Column({
    type: 'int',
    nullable: true,
  })
  residualLikelihood: number;

  @Column({
    type: 'int',
    nullable: true,
  })
  residualImpact: number;

  @Column({ type: 'int', nullable: true })
  residualRiskScore: number;

  @Column('simple-array', { nullable: true })
  relatedControlIds: string[];

  @Column({ nullable: true })
  ownerId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
