import { CreateComplectationComfortDto } from './dto/create-complectation-comfort.dto';
import { ComplectationComfort } from '@backend/shared/shared-types';
import { ComplectationComfortRepository } from './complectation-comfort.repository';
import { Injectable } from '@nestjs/common';
import { ComplectationComfortEntity } from './complectation-comfort.entity';
import { UpdateComplectationComfortDto } from './dto/update-complectation-comfort.dto';

@Injectable()
export class ComplectationComfortService {

  constructor(
    private readonly complectationComfortRepository: ComplectationComfortRepository
  ) {}

  async createComplectationComfort(dto: CreateComplectationComfortDto): Promise<ComplectationComfort> {
    const complectationComfortEntity = new ComplectationComfortEntity(dto);
    return this.complectationComfortRepository.create(complectationComfortEntity);
  }

  async deleteComplectationComfort(id: number): Promise<void> {
    await this.complectationComfortRepository.destroy(id);
  }

  async getComplectationComfort(id: number): Promise<ComplectationComfort> {
    return this.complectationComfortRepository.findById(id);
  }

  async updateComplectationComfort(id: number, dto: UpdateComplectationComfortDto): Promise<ComplectationComfort> {
    return this.complectationComfortRepository.update(id, new ComplectationComfortEntity(dto));
  }
}