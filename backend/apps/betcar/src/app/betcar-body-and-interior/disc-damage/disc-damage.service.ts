import { CreateDiscDamageDto } from './dto/create-disc-damage.dto';
import { DiscDamage } from '@backend/shared/shared-types';
import { DiscDamageRepository } from './disc-damage.repository';
import { Injectable } from '@nestjs/common';
import { DiscDamageEntity } from './disc-damage.entity';
import { UpdateDiscDamageDto } from './dto/update-disc-damage.dto';
import { AddElementDiscRepository } from './add-element-disc/add-element-disc.repository';

@Injectable()
export class DiscDamageService {

  constructor(
    private readonly discDamageRepository: DiscDamageRepository,
    private readonly addElementDiscRepository: AddElementDiscRepository
  ) {}

  async createDiscDamage(dto: CreateDiscDamageDto): Promise<DiscDamage> {
    const addElementDisc = await this.addElementDiscRepository.find(dto.addElementDisc);
    const discDamageEntity = new DiscDamageEntity({
      ...dto,
      addElementDisc,
    });
    return this.discDamageRepository.create(discDamageEntity);
  }

  async deleteDiscDamage(id: number): Promise<void> {
    await this.discDamageRepository.destroy(id);
  }

  async getDiscDamage(id: number): Promise<DiscDamage> {
    return this.discDamageRepository.findById(id);
  }

  async updateDiscDamage(id: number, dto: UpdateDiscDamageDto): Promise<DiscDamage> {
    const addElementDisc = await this.addElementDiscRepository.find(dto.addElementDisc);
    return this.discDamageRepository.update(id, new DiscDamageEntity({
      ...dto,
    addElementDisc,
    }));
  }
}