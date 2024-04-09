import { CreateEngineCompartmentDamageDto } from './dto/create-engine-compartment-damage.dto';
import { EngineCompartmentDamage } from '@backend/shared/shared-types';
import { EngineCompartmentDamageRepository } from './engine-compartment-damage.repository';
import { Injectable } from '@nestjs/common';
import { EngineCompartmentDamageEntity } from './engine-compartment-damage.entity';
import { UpdateEngineCompartmentDamageDto } from './dto/update-engine-compartment-damage.dto';
import { AddElementRepository } from './add-element/add-element.repository';

@Injectable()
export class EngineCompartmentDamageService {

  constructor(
    private readonly engineCompartmentDamageRepository: EngineCompartmentDamageRepository,
    private readonly addElementRepository: AddElementRepository
  ) {}

  async createEngineCompartmentDamage(dto: CreateEngineCompartmentDamageDto): Promise<EngineCompartmentDamage> {
    const addElement = await this.addElementRepository.find(dto.addElement);
    const engineCompartmentDamageEntity = new EngineCompartmentDamageEntity({
      ...dto,
      addElement,
    });
    return this.engineCompartmentDamageRepository.create(engineCompartmentDamageEntity);
  }

  async deleteEngineCompartmentDamage(id: number): Promise<void> {
    await this.engineCompartmentDamageRepository.destroy(id);
  }

  async getEngineCompartmentDamage(id: number): Promise<EngineCompartmentDamage> {
    return this.engineCompartmentDamageRepository.findById(id);
  }

  async updateEngineCompartmentDamage(id: number, dto: UpdateEngineCompartmentDamageDto): Promise<EngineCompartmentDamage> {
    const addElement = await this.addElementRepository.find(dto.addElement);
    return this.engineCompartmentDamageRepository.update(id, new EngineCompartmentDamageEntity({
      ...dto,
    addElement,
    }));
  }
}