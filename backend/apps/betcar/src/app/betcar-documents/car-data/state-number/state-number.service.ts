import { CreateStateNumberDto} from "./dto/create-state-number.dto";
import { StateNumber } from '@backend/shared/shared-types';
import { StateNumberRepository} from "./state-number.repository";
import { Injectable } from '@nestjs/common';
import { StateNumberEntity} from "./state-number.entity";
import { UpdateStateNumberDto} from "./dto/update-state-number.dto";

@Injectable()
export class StateNumberService {

  constructor(
    private readonly stateNumberRepository: StateNumberRepository
  ) {}

  async createStateNumber(dto: CreateStateNumberDto): Promise<StateNumber> {
    const stateNumberEntity = new StateNumberEntity(dto);
    return this.stateNumberRepository.create(stateNumberEntity);
  }

  async deleteStateNumber(id: number): Promise<void> {
    await this.stateNumberRepository.destroy(id);
  }

  async getStateNumber(id: number): Promise<StateNumber> {
    return this.stateNumberRepository.findById(id);
  }

  async updateStateNumber(id: number, dto: UpdateStateNumberDto): Promise<StateNumber> {
    return this.stateNumberRepository.update(id, new StateNumberEntity(dto));
  }
}