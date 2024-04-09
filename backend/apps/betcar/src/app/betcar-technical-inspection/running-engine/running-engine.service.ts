import { CreateRunningEngineDto} from "./dto/create-running-engine.dto";
import { RunningEngine } from '@backend/shared/shared-types';
import { RunningEngineRepository} from "./running-engine.repository";
import { Injectable } from '@nestjs/common';
import { RunningEngineEntity} from "./running-engine.entity";
import { UpdateRunningEngineDto} from "./dto/update-running-engine.dto";

@Injectable()
export class RunningEngineService {

  constructor(
    private readonly runningEngineRepository: RunningEngineRepository
  ) {}

  async createRunningEngine(dto: CreateRunningEngineDto): Promise<RunningEngine> {
    const runningEngineEntity = new RunningEngineEntity(dto);
    return this.runningEngineRepository.create(runningEngineEntity);
  }

  async deleteRunningEngine(id: number): Promise<void> {
    await this.runningEngineRepository.destroy(id);
  }

  async getRunningEngine(id: number): Promise<RunningEngine> {
    return this.runningEngineRepository.findById(id);
  }

  async updateRunningEngine(id: number, dto: UpdateRunningEngineDto): Promise<RunningEngine> {
    return this.runningEngineRepository.update(id, new RunningEngineEntity(dto));
  }
}