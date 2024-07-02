import { CreateRunningEngineDto} from "./dto/create-running-engine.dto";
import { RunningEngine } from '@backend/shared/shared-types';
import { RunningEngineRepository} from "./running-engine.repository";
import { Injectable } from '@nestjs/common';
import { RunningEngineEntity} from "./running-engine.entity";
import { UpdateRunningEngineDto} from "./dto/update-running-engine.dto";
import { AddElementMechanicalRepository } from "./add-element-mechanical/add-element-mechanical.repository";
import { AddElementElectricalRepository } from "./add-element-electrical/add-element-electrical.repository";

@Injectable()
export class RunningEngineService {

  constructor(
    private readonly runningEngineRepository: RunningEngineRepository,
    private readonly addElementMechanicalRepository: AddElementMechanicalRepository,
    private readonly addElementElectricalRepository: AddElementElectricalRepository
  ) {}

  async createRunningEngine(dto: CreateRunningEngineDto): Promise<RunningEngine> {
    const addElementElectrical = await this.addElementElectricalRepository.find(dto.addElementElectrical);
    const addElementMechanical = await this.addElementMechanicalRepository.find(dto.addElementMechanical);
    const runningEngineEntity = new RunningEngineEntity({
      ...dto,
      addElementElectrical,
      addElementMechanical
    });
    return this.runningEngineRepository.create(runningEngineEntity);
  }

  async deleteRunningEngine(id: number): Promise<void> {
    await this.runningEngineRepository.destroy(id);
  }

  async getRunningEngine(id: number): Promise<RunningEngine> {
    return this.runningEngineRepository.findById(id);
  }

  async updateRunningEngine(id: number, dto: UpdateRunningEngineDto): Promise<RunningEngine> {
    const addElementElectrical = await this.addElementElectricalRepository.find(dto.addElementElectrical);
    const addElementMechanical = await this.addElementMechanicalRepository.find(dto.addElementMechanical);
    return this.runningEngineRepository.update(id, new RunningEngineEntity({
      ...dto,
      addElementElectrical,
      addElementMechanical
    }));
  }
}