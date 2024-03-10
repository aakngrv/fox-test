import { CreateComplectationWheelsDto } from './dto/create-complectation-wheels.dto';
import { ComplectationWheels } from '@backend/shared/shared-types';
import { ComplectationWheelsRepository } from './complectation-wheels.repository';
import { Injectable } from '@nestjs/common';
import { ComplectationWheelsEntity } from './complectation-wheels.entity';
import { UpdateComplectationWheelsDto } from './dto/update-complectation-wheels.dto';

@Injectable()
export class ComplectationWheelsService {

  constructor(
    private readonly complectationWheelsRepository: ComplectationWheelsRepository
  ) {}

  async createComplectationWheels(dto: CreateComplectationWheelsDto): Promise<ComplectationWheels> {
    const complectationWheelsEntity = new ComplectationWheelsEntity(dto);
    return this.complectationWheelsRepository.create(complectationWheelsEntity);
  }

  async deleteComplectationWheels(id: number): Promise<void> {
    await this.complectationWheelsRepository.destroy(id);
  }

  async getComplectationWheels(id: number): Promise<ComplectationWheels> {
    return this.complectationWheelsRepository.findById(id);
  }

  async updateComplectationWheels(id: number, dto: UpdateComplectationWheelsDto): Promise<ComplectationWheels> {
    return this.complectationWheelsRepository.update(id, new ComplectationWheelsEntity(dto));
  }
}