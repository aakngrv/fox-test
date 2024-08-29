import { CreateStoppedEngineDto} from "./dto/create-stopped-engine.dto";
import { StoppedEngine } from '@backend/shared/shared-types';
import { StoppedEngineRepository} from "./stopped-engine.repository";
import { Injectable } from '@nestjs/common';
import { StoppedEngineEntity} from "./stopped-engine.entity";
import { UpdateStoppedEngineDto} from "./dto/update-stopped-engine.dto";
import { AddElementStopRepository } from "./add-element-stop/add-element-stop.repository";

@Injectable()
export class StoppedEngineService {

  constructor(
    private readonly stoppedEngineRepository: StoppedEngineRepository,
    private readonly addElementStopRepository: AddElementStopRepository
  ) {}

  async createStoppedEngine(dto: CreateStoppedEngineDto): Promise<StoppedEngine> {
    const addElementStop = await this.addElementStopRepository.find(dto.addElementStop);
    const stoppedEngineEntity = new StoppedEngineEntity({
      ...dto,
      addElementStop,
    });
    return this.stoppedEngineRepository.create(stoppedEngineEntity);
  }

  async deleteStoppedEngine(id: number): Promise<void> {
    await this.stoppedEngineRepository.destroy(id);
  }

  async getStoppedEngine(id: number): Promise<StoppedEngine> {
    return this.stoppedEngineRepository.findById(id);
  }

  async updateStoppedEngine(id: number, dto: UpdateStoppedEngineDto): Promise<StoppedEngine> {
    const addElementStop = await this.addElementStopRepository.find(dto.addElementStop);
    return this.stoppedEngineRepository.update(id, new StoppedEngineEntity({
      ...dto,
      addElementStop,
    }));
  }
}