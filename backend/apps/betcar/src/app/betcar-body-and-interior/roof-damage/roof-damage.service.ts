import { CreateRoofDamageDto } from './dto/create-roof-damage.dto';
import { RoofDamage } from '@backend/shared/shared-types';
import { RoofDamageRepository } from './roof-damage.repository';
import { Injectable } from '@nestjs/common';
import { RoofDamageEntity } from './roof-damage.entity';
import { UpdateRoofDamageDto } from './dto/update-roof-damage.dto';
import { AddElementRoofRepository } from './add-element-roof/add-element-roof.repository';

@Injectable()
export class RoofDamageService {

  constructor(
    private readonly roofDamageRepository: RoofDamageRepository,
    private readonly addElementRoofRepository: AddElementRoofRepository
  ) {}

  async createRoofDamage(dto: CreateRoofDamageDto): Promise<RoofDamage> {
    const addElementRoof = await this.addElementRoofRepository.find(dto.addElementRoof);
    const roofDamageEntity = new RoofDamageEntity({
      ...dto,
      addElementRoof,
    });
    return this.roofDamageRepository.create(roofDamageEntity);
  }

  async deleteRoofDamage(id: number): Promise<void> {
    await this.roofDamageRepository.destroy(id);
  }

  async getRoofDamage(id: number): Promise<RoofDamage> {
    return this.roofDamageRepository.findById(id);
  }

  async updateRoofDamage(id: number, dto: UpdateRoofDamageDto): Promise<RoofDamage> {
    const addElementRoof = await this.addElementRoofRepository.find(dto.addElementRoof);
    return this.roofDamageRepository.update(id, new RoofDamageEntity({
      ...dto,
    addElementRoof,
    }));
  }
}