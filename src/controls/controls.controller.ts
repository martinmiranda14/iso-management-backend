import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';
import { ControlsService } from './controls.service';
import { CreateControlDto } from './dto/create-control.dto';
import { UpdateControlDto } from './dto/update-control.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ControlCategory, ImplementationStatus } from './entities/control.entity';

@ApiTags('Controls')
@Controller('controls')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ControlsController {
  constructor(private readonly controlsService: ControlsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new ISO 27002 control' })
  @ApiResponse({
    status: 201,
    description: 'Control successfully created',
  })
  @ApiResponse({
    status: 409,
    description: 'Control code already exists',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  create(@Body() createControlDto: CreateControlDto) {
    return this.controlsService.create(createControlDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all controls with optional filters' })
  @ApiQuery({
    name: 'category',
    required: false,
    enum: ControlCategory,
    description: 'Filter by control category',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: ImplementationStatus,
    description: 'Filter by implementation status',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Search in code, name, or description',
  })
  @ApiResponse({
    status: 200,
    description: 'List of controls',
  })
  findAll(
    @Query('category') category?: ControlCategory,
    @Query('status') status?: ImplementationStatus,
    @Query('search') search?: string,
  ) {
    return this.controlsService.findAll(category, status, search);
  }

  @Get('statistics')
  @ApiOperation({ summary: 'Get controls statistics' })
  @ApiResponse({
    status: 200,
    description: 'Statistics about controls implementation',
  })
  getStatistics() {
    return this.controlsService.getStatistics();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a control by ID' })
  @ApiResponse({
    status: 200,
    description: 'Control found',
  })
  @ApiResponse({
    status: 404,
    description: 'Control not found',
  })
  findOne(@Param('id') id: string) {
    return this.controlsService.findOne(id);
  }

  @Get('code/:code')
  @ApiOperation({ summary: 'Get a control by code' })
  @ApiResponse({
    status: 200,
    description: 'Control found',
  })
  @ApiResponse({
    status: 404,
    description: 'Control not found',
  })
  findByCode(@Param('code') code: string) {
    return this.controlsService.findByCode(code);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a control' })
  @ApiResponse({
    status: 200,
    description: 'Control successfully updated',
  })
  @ApiResponse({
    status: 404,
    description: 'Control not found',
  })
  @ApiResponse({
    status: 409,
    description: 'Control code already exists',
  })
  update(@Param('id') id: string, @Body() updateControlDto: UpdateControlDto) {
    return this.controlsService.update(id, updateControlDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a control' })
  @ApiResponse({
    status: 204,
    description: 'Control successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'Control not found',
  })
  remove(@Param('id') id: string) {
    return this.controlsService.remove(id);
  }
}
