import { CreateGlassDamageDto } from './dto/create-glass-damage.dto';
import { GlassDamage } from '@backend/shared/shared-types';
import { GlassDamageRepository } from './glass-damage.repository';
import { Injectable } from '@nestjs/common';
import { GlassDamageEntity } from './glass-damage.entity';
import { UpdateGlassDamageDto } from './dto/update-glass-damage.dto';
import { AddElementGlassRepository } from './add-element-glass/add-element-glass.repository';

@Injectable()
export class GlassDamageService {

  constructor(
    private readonly glassDamageRepository: GlassDamageRepository,
    private readonly addElementGlassRepository: AddElementGlassRepository
  ) {}

  async createGlassDamage(dto: CreateGlassDamageDto): Promise<GlassDamage> {
    const addElementGlass = await this.addElementGlassRepository.find(dto.addElementGlass);
    const glassDamageEntity = new GlassDamageEntity({
      ...dto,
      addElementGlass,
    });
    return this.glassDamageRepository.create(glassDamageEntity);
  }

  async deleteGlassDamage(id: number): Promise<void> {
    await this.glassDamageRepository.destroy(id);
  }

  async getGlassDamage(id: number): Promise<GlassDamage> {
    return this.glassDamageRepository.findById(id);
  }

  async updateGlassDamage(id: number, dto: UpdateGlassDamageDto): Promise<GlassDamage> {
    const addElementGlass = await this.addElementGlassRepository.find(dto.addElementGlass);
    return this.glassDamageRepository.update(id, new GlassDamageEntity({
      ...dto,
    addElementGlass,
    }));
  }
}