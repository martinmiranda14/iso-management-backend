import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like } from 'typeorm';
import { Control, ControlCategory, ImplementationStatus } from './entities/control.entity';
import { CreateControlDto } from './dto/create-control.dto';
import { UpdateControlDto } from './dto/update-control.dto';

@Injectable()
export class ControlsService {
  constructor(
    @InjectRepository(Control)
    private readonly controlRepository: Repository<Control>,
  ) {}

  async create(createControlDto: CreateControlDto): Promise<Control> {
    // Check if control code already exists
    const existing = await this.controlRepository.findOne({
      where: { code: createControlDto.code },
    });

    if (existing) {
      throw new ConflictException(`Control with code ${createControlDto.code} already exists`);
    }

    const control = this.controlRepository.create(createControlDto);
    return this.controlRepository.save(control);
  }

  async findAll(
    category?: ControlCategory,
    status?: ImplementationStatus,
    search?: string,
  ): Promise<Control[]> {
    const where: FindOptionsWhere<Control> = {};

    if (category) {
      where.category = category;
    }

    if (status) {
      where.status = status;
    }

    if (search) {
      // Note: SQLite doesn't support ILIKE, so we use LIKE
      return this.controlRepository.find({
        where: [
          { ...where, code: Like(`%${search}%`) },
          { ...where, name: Like(`%${search}%`) },
          { ...where, description: Like(`%${search}%`) },
        ],
        order: { code: 'ASC' },
      });
    }

    return this.controlRepository.find({
      where,
      order: { code: 'ASC' },
    });
  }

  async findOne(id: string): Promise<Control> {
    const control = await this.controlRepository.findOne({
      where: { id },
    });

    if (!control) {
      throw new NotFoundException(`Control with ID ${id} not found`);
    }

    return control;
  }

  async findByCode(code: string): Promise<Control> {
    const control = await this.controlRepository.findOne({
      where: { code },
    });

    if (!control) {
      throw new NotFoundException(`Control with code ${code} not found`);
    }

    return control;
  }

  async update(id: string, updateControlDto: UpdateControlDto): Promise<Control> {
    const control = await this.findOne(id);

    // If updating code, check for duplicates
    if (updateControlDto.code && updateControlDto.code !== control.code) {
      const existing = await this.controlRepository.findOne({
        where: { code: updateControlDto.code },
      });

      if (existing) {
        throw new ConflictException(`Control with code ${updateControlDto.code} already exists`);
      }
    }

    Object.assign(control, updateControlDto);
    return this.controlRepository.save(control);
  }

  async remove(id: string): Promise<void> {
    const control = await this.findOne(id);
    await this.controlRepository.remove(control);
  }

  async getStatistics(): Promise<{
    total: number;
    byCategory: Record<string, number>;
    byStatus: Record<string, number>;
    averageImplementation: number;
  }> {
    const controls = await this.controlRepository.find();

    const byCategory: Record<string, number> = {};
    const byStatus: Record<string, number> = {};
    let totalImplementation = 0;

    controls.forEach(control => {
      byCategory[control.category] = (byCategory[control.category] || 0) + 1;
      byStatus[control.status] = (byStatus[control.status] || 0) + 1;
      totalImplementation += control.implementationPercentage || 0;
    });

    return {
      total: controls.length,
      byCategory,
      byStatus,
      averageImplementation: controls.length > 0 ? totalImplementation / controls.length : 0,
    };
  }
}
