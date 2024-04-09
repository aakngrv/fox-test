import { CreatePaintworkInspectionDto } from './dto/create-paintwork-inspection.dto';
import { PaintworkInspection } from '@backend/shared/shared-types';
import { PaintworkInspectionRepository } from './paintwork-inspection.repository';
import { Injectable } from '@nestjs/common';
import { PaintworkInspectionEntity } from './paintwork-inspection.entity';
import { UpdatePaintworkInspectionDto } from './dto/update-paintwork-inspection.dto';

@Injectable()
export class PaintworkInspectionService {

  constructor(
    private readonly paintworkInspectionRepository: PaintworkInspectionRepository
  ) {}

  async createPaintworkInspection(dto: CreatePaintworkInspectionDto): Promise<PaintworkInspection> {
    const paintworkInspectionEntity = new PaintworkInspectionEntity(dto);
    return this.paintworkInspectionRepository.create(paintworkInspectionEntity);
  }

  async deletePaintworkInspection(id: number): Promise<void> {
    await this.paintworkInspectionRepository.destroy(id);
  }

  async getPaintworkInspection(id: number): Promise<PaintworkInspection> {
    return this.paintworkInspectionRepository.findById(id);
  }

  async updatePaintworkInspection(id: number, dto: UpdatePaintworkInspectionDto): Promise<PaintworkInspection> {
    return this.paintworkInspectionRepository.update(id, new PaintworkInspectionEntity(dto));
  }
}