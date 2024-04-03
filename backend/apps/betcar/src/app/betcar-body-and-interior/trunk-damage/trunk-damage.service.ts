import { CreateTrunkDamageDto } from './dto/create-trunk-damage.dto';
import { TrunkDamage } from '@backend/shared/shared-types';
import { TrunkDamageRepository } from './trunk-damage.repository';
import { Injectable } from '@nestjs/common';
import { TrunkDamageEntity } from './trunk-damage.entity';
import { UpdateTrunkDamageDto } from './dto/update-trunk-damage.dto';
import { AddElementTrunkRepository } from './add-element-trunk/add-element-trunk.repository';

@Injectable()
export class TrunkDamageService {

  constructor(
    private readonly trunkDamageRepository: TrunkDamageRepository,
    private readonly addElementTrunkRepository: AddElementTrunkRepository
  ) {}

  async createTrunkDamage(dto: CreateTrunkDamageDto): Promise<TrunkDamage> {
    const addElementTrunk = await this.addElementTrunkRepository.find(dto.addElementTrunk);
    const trunkDamageEntity = new TrunkDamageEntity({
      ...dto,
      addElementTrunk,
    });
    return this.trunkDamageRepository.create(trunkDamageEntity);
  }

  async deleteTrunkamage(id: number): Promise<void> {
    await this.trunkDamageRepository.destroy(id);
  }

  async getTrunkDamage(id: number): Promise<TrunkDamage> {
    return this.trunkDamageRepository.findById(id);
  }

  async updateTrunkDamage(id: number, dto: UpdateTrunkDamageDto): Promise<TrunkDamage> {
    const addElementTrunk = await this.addElementTrunkRepository.find(dto.addElementTrunk);
    return this.trunkDamageRepository.update(id, new TrunkDamageEntity({
      ...dto,
    addElementTrunk,
    }));
  }
}