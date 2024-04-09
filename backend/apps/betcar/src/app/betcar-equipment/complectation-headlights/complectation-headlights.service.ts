import { CreateComplectationHeadlightsDto } from './dto/create-complectation-headlights.dto';
import { ComplectationHeadlights } from '@backend/shared/shared-types';
import { ComplectationHeadlightsRepository } from './complectation-headlights.repository';
import { Injectable } from '@nestjs/common';
import { ComplectationHeadlightsEntity } from './complectation-headlights.entity';
import { UpdateComplectationHeadlightsDto } from './dto/update-complectation-headlights.dto';

@Injectable()
export class ComplectationHeadlightsService {

  constructor(
    private readonly complectationHeadlightsRepository: ComplectationHeadlightsRepository
  ) {}

  async createComplectationHeadlights(dto: CreateComplectationHeadlightsDto): Promise<ComplectationHeadlights> {
    const complectationHeadlightsEntity = new ComplectationHeadlightsEntity(dto);
    return this.complectationHeadlightsRepository.create(complectationHeadlightsEntity);
  }

  async deleteComplectationHeadlights(id: number): Promise<void> {
    await this.complectationHeadlightsRepository.destroy(id);
  }

  async getComplectationHeadlights(id: number): Promise<ComplectationHeadlights> {
    return this.complectationHeadlightsRepository.findById(id);
  }

  async updateComplectationHeadlights(id: number, dto: UpdateComplectationHeadlightsDto): Promise<ComplectationHeadlights> {
    return this.complectationHeadlightsRepository.update(id, new ComplectationHeadlightsEntity(dto));
  }
}