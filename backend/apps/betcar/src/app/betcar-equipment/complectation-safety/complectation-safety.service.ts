import { CreateComplectationSafetyDto } from './dto/create-complectation-safety.dto';
import { ComplectationSafety } from '@backend/shared/shared-types';
import { ComplectationSafetyRepository } from './complectation-safety.repository';
import { Injectable } from '@nestjs/common';
import { ComplectationSafetyEntity } from './complectation-safety.entity';
import { UpdateComplectationSafetyDto } from './dto/update-complectation-safety.dto';

@Injectable()
export class ComplectationSafetyService {

  constructor(
    private readonly complectationSafetyRepository: ComplectationSafetyRepository
  ) {}

  async createComplectationSafety(dto: CreateComplectationSafetyDto): Promise<ComplectationSafety> {
    const complectationSafetyEntity = new ComplectationSafetyEntity(dto);
    return this.complectationSafetyRepository.create(complectationSafetyEntity);
  }

  async deleteComplectationSafety(id: number): Promise<void> {
    await this.complectationSafetyRepository.destroy(id);
  }

  async getComplectationSafety(id: number): Promise<ComplectationSafety> {
    return this.complectationSafetyRepository.findById(id);
  }

  async updateComplectationSafety(id: number, dto: UpdateComplectationSafetyDto): Promise<ComplectationSafety> {
    return this.complectationSafetyRepository.update(id, new ComplectationSafetyEntity(dto));
  }
}