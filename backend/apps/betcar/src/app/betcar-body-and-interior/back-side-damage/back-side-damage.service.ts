import { CreateBackSideDamageDto } from './dto/create-back-side-damage.dto';
import { BackSideDamage } from '@backend/shared/shared-types';
import { BackSideDamageRepository } from './back-side-damage.repository';
import { Injectable } from '@nestjs/common';
import { BackSideDamageEntity } from './back-side-damage.entity';
import { UpdateBackSideDamageDto } from './dto/update-back-side-damage.dto';
import { AddElementBackRepository } from './add-element-back/add-element-back.repository';

@Injectable()
export class BackSideDamageService {

  constructor(
    private readonly backSideDamageRepository: BackSideDamageRepository,
    private readonly addElementBackRepository: AddElementBackRepository
  ) {}

  async createBackSideDamage(dto: CreateBackSideDamageDto): Promise<BackSideDamage> {
    const addElementBack = await this.addElementBackRepository.find(dto.addElementBack);
    const backSideDamageEntity = new BackSideDamageEntity({
      ...dto,
      addElementBack,
    });
    return this.backSideDamageRepository.create(backSideDamageEntity);
  }

  async deleteBackSideDamage(id: number): Promise<void> {
    await this.backSideDamageRepository.destroy(id);
  }

  async getBackSideDamage(id: number): Promise<BackSideDamage> {
    return this.backSideDamageRepository.findById(id);
  }

  async updateBackSideDamage(id: number, dto: UpdateBackSideDamageDto): Promise<BackSideDamage> {
    const addElementBack = await this.addElementBackRepository.find(dto.addElementBack);
    return this.backSideDamageRepository.update(id, new BackSideDamageEntity({
      ...dto,
    addElementBack,
    }));
  }
}