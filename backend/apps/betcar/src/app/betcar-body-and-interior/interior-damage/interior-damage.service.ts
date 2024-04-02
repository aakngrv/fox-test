import { CreateInteriorDamageDto} from "./dto/create-interior-damage.dto";
import { InteriorDamage } from '@backend/shared/shared-types';
import { InteriorDamageRepository} from "./interior-damage.repository";
import { Injectable } from '@nestjs/common';
import { InteriorDamageEntity} from "./interior-damage.entity";
import { UpdateInteriorDamageDto} from "./dto/update-interior-damage.dto";
import { AddElementInteriorRepository } from './add-element-interior/add-element-interior.repository';

@Injectable()
export class InteriorDamageService {

  constructor(
    private readonly interiorDamageRepository: InteriorDamageRepository,
    private readonly addElementInteriorRepository: AddElementInteriorRepository
  ) {}

  async createInteriorDamage(dto: CreateInteriorDamageDto): Promise<InteriorDamage> {
    const addElementInterior = await this.addElementInteriorRepository.find(dto.addElementInterior);
    const interiorDamageEntity = new InteriorDamageEntity({
      ...dto,
      addElementInterior,
    });
    return this.interiorDamageRepository.create(interiorDamageEntity);
  }

  async deleteInteriorDamage(id: number): Promise<void> {
    await this.interiorDamageRepository.destroy(id);
  }

  async getInteriorDamage(id: number): Promise<InteriorDamage> {
    return this.interiorDamageRepository.findById(id);
  }

  async updateInteriorDamage(id: number, dto: UpdateInteriorDamageDto): Promise<InteriorDamage> {
    const addElementInterior = await this.addElementInteriorRepository.find(dto.addElementInterior);
    return this.interiorDamageRepository.update(id, new InteriorDamageEntity({
      ...dto,
      addElementInterior,
    }));
  }
}