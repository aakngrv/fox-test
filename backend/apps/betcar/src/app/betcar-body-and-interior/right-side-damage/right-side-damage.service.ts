import { CreateRightSideDamageDto } from './dto/create-right-side-damage.dto';
import { RightSideDamage } from '@backend/shared/shared-types';
import { RightSideDamageRepository } from './right-side-damage.repository';
import { Injectable } from '@nestjs/common';
import { RightSideDamageEntity } from './right-side-damage.entity';
import { UpdateRightSideDamageDto } from './dto/update-right-side-damage.dto';
import { AddElementRightRepository } from './add-element-right/add-element-right.repository';

@Injectable()
export class RightSideDamageService {

  constructor(
    private readonly rightSideDamageRepository: RightSideDamageRepository,
    private readonly addElementRightRepository: AddElementRightRepository
  ) {}

  async createRightSideDamage(dto: CreateRightSideDamageDto): Promise<RightSideDamage> {
    const addElementRight = await this.addElementRightRepository.find(dto.addElementRight);
    const rightSideDamageEntity = new RightSideDamageEntity({
      ...dto,
      addElementRight,
    });
    return this.rightSideDamageRepository.create(rightSideDamageEntity);
  }

  async deleteRightSideDamage(id: number): Promise<void> {
    await this.rightSideDamageRepository.destroy(id);
  }

  async getRightSideDamage(id: number): Promise<RightSideDamage> {
    return this.rightSideDamageRepository.findById(id);
  }

  async updateRightSideDamage(id: number, dto: UpdateRightSideDamageDto): Promise<RightSideDamage> {
    const addElementRight = await this.addElementRightRepository.find(dto.addElementRight);
    return this.rightSideDamageRepository.update(id, new RightSideDamageEntity({
      ...dto,
    addElementRight,
    }));
  }
}