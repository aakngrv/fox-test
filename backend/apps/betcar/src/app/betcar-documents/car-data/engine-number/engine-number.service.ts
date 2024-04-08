import { CreateEngineNumberDto} from "./dto/create-engine-number.dto";
import { EngineNumber } from '@backend/shared/shared-types';
import { EngineNumberRepository} from "./engine-number.repository";
import { Injectable } from '@nestjs/common';
import { EngineNumberEntity} from "./engine-number.entity";
import { UpdateEngineNumberDto} from "./dto/update-engine-number.dto";

@Injectable()
export class EngineNumberService {

  constructor(
    private readonly engineNumberRepository: EngineNumberRepository
  ) {}

  async createEngineNumber(dto: CreateEngineNumberDto): Promise<EngineNumber> {
    const engineNumberEntity = new EngineNumberEntity(dto);
    return this.engineNumberRepository.create(engineNumberEntity);
  }

  async deleteEngineNumber(id: number): Promise<void> {
    await this.engineNumberRepository.destroy(id);
  }

  async getEngineNumber(id: number): Promise<EngineNumber> {
    return this.engineNumberRepository.findById(id);
  }

  async updateEngineNumber(id: number, dto: UpdateEngineNumberDto): Promise<EngineNumber> {
    return this.engineNumberRepository.update(id, new EngineNumberEntity(dto));
  }
}