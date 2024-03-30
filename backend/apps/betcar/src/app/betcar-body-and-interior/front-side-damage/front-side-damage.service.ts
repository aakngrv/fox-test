import { CreateFrontSideDamageDto } from './dto/create-front-side-damage.dto';
import { FrontSideDamage } from '@backend/shared/shared-types';
import { FrontSideDamageRepository } from './front-side-damage.repository';
import { Injectable } from '@nestjs/common';
import { FrontSideDamageEntity } from './front-side-damage.entity';
import { UpdateFrontSideDamageDto } from './dto/update-front-side-damage.dto';
import { AddElementFrontRepository } from './add-element-front/add-element-front.repository';

@Injectable()
export class FrontSideDamageService {

  constructor(
    private readonly frontSideDamageRepository: FrontSideDamageRepository,
    private readonly addElementFrontRepository: AddElementFrontRepository
  ) {}

  async createFrontSideDamage(dto: CreateFrontSideDamageDto): Promise<FrontSideDamage> {
    const addElementFront = await this.addElementFrontRepository.find(dto.addElementFront);
    const frontSideDamageEntity = new FrontSideDamageEntity({
      ...dto,
      addElementFront,
    });
    return this.frontSideDamageRepository.create(frontSideDamageEntity);
  }

  async deleteFrontSideDamage(id: number): Promise<void> {
    await this.frontSideDamageRepository.destroy(id);
  }

  async getFrontSideDamage(id: number): Promise<FrontSideDamage> {
    return this.frontSideDamageRepository.findById(id);
  }

  async updateFrontSideDamage(id: number, dto: UpdateFrontSideDamageDto): Promise<FrontSideDamage> {
    const addElementFront = await this.addElementFrontRepository.find(dto.addElementFront);
    return this.frontSideDamageRepository.update(id, new FrontSideDamageEntity({
      ...dto,
    addElementFront,
    }));
  }
}
