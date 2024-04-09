import { CreateComplectationOtherDto } from './dto/create-complectation-other.dto';
import { ComplectationOther } from '@backend/shared/shared-types';
import { ComplectationOtherRepository } from './complectation-other.repository';
import { Injectable } from '@nestjs/common';
import { ComplectationOtherEntity } from './complectation-other.entity';
import { UpdateComplectationOtherDto } from './dto/update-complectation-other.dto';

@Injectable()
export class ComplectationOtherService {

  constructor(
    private readonly complectationOtherRepository: ComplectationOtherRepository
  ) {}

  async createComplectationOther(dto: CreateComplectationOtherDto): Promise<ComplectationOther> {
    const complectationOtherEntity = new ComplectationOtherEntity(dto);
    return this.complectationOtherRepository.create(complectationOtherEntity);
  }

  async deleteComplectationOther(id: number): Promise<void> {
    await this.complectationOtherRepository.destroy(id);
  }

  async getComplectationOther(id: number): Promise<ComplectationOther> {
    return this.complectationOtherRepository.findById(id);
  }

  async updateComplectationOther(id: number, dto: UpdateComplectationOtherDto): Promise<ComplectationOther> {
    return this.complectationOtherRepository.update(id, new ComplectationOtherEntity(dto));
  }
}