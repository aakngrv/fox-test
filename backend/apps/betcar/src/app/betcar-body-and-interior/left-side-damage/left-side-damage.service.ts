import { CreateLeftSideDamageDto } from './dto/create-left-side-damage.dto';
import { LeftSideDamage } from '@backend/shared/shared-types';
import { LeftSideDamageRepository } from './left-side-damage.repository';
import { Injectable } from '@nestjs/common';
import { LeftSideDamageEntity } from './left-side-damage.entity';
import { UpdateLeftSideDamageDto } from './dto/update-left-side-damage.dto';
import { AddElementLeftRepository } from './add-element-left/add-element-left.repository';

@Injectable()
export class LeftSideDamageService {

  constructor(
    private readonly leftSideDamageRepository: LeftSideDamageRepository,
    private readonly addElementLeftRepository: AddElementLeftRepository
  ) {}

  async createLeftSideDamage(dto: CreateLeftSideDamageDto): Promise<LeftSideDamage> {
    const addElementLeft = await this.addElementLeftRepository.find(dto.addElementLeft);
    const leftSideDamageEntity = new LeftSideDamageEntity({
      ...dto,
      addElementLeft,
    });
    return this.leftSideDamageRepository.create(leftSideDamageEntity);
  }

  async deleteLeftSideDamage(id: number): Promise<void> {
    await this.leftSideDamageRepository.destroy(id);
  }

  async getLeftSideDamage(id: number): Promise<LeftSideDamage> {
    return this.leftSideDamageRepository.findById(id);
  }

  async updateLeftSideDamage(id: number, dto: UpdateLeftSideDamageDto): Promise<LeftSideDamage> {
    const addElementLeft = await this.addElementLeftRepository.find(dto.addElementLeft);
    return this.leftSideDamageRepository.update(id, new LeftSideDamageEntity({
      ...dto,
    addElementLeft,
    }));
  }
}