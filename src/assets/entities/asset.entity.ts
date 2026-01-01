import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum AssetType {
  HARDWARE = 'hardware',
  SOFTWARE = 'software',
  DATA = 'data',
  SERVICES = 'services',
  PEOPLE = 'people',
  FACILITIES = 'facilities',
}

export enum AssetCriticality {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

@Entity('assets')
export class Asset {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column({
    type: 'simple-enum',
    enum: AssetType,
  })
  type: AssetType;

  @Column({
    type: 'simple-enum',
    enum: AssetCriticality,
    default: AssetCriticality.MEDIUM,
  })
  criticality: AssetCriticality;

  @Column({ nullable: true })
  owner: string;

  @Column({ nullable: true })
  location: string;

  @Column({ type: 'int', default: 1 })
  confidentialityLevel: number;

  @Column({ type: 'int', default: 1 })
  integrityLevel: number;

  @Column({ type: 'int', default: 1 })
  availabilityLevel: number;

  @Column('simple-array', { nullable: true })
  relatedControlIds: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
