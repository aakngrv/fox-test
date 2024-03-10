import { CreateComplectationSalonDto } from './dto/create-complectation-salon.dto';
import { ComplectationSalon } from '@backend/shared/shared-types';
import { ComplectationSalonRepository } from './complectation-salon.repository';
import { Injectable } from '@nestjs/common';
import { ComplectationSalonEntity } from './complectation-salon.entity';
import { UpdateComplectationSalonDto } from './dto/update-complectation-salon.dto';

@Injectable()
export class ComplectationSalonService {

  constructor(
    private readonly complectationSalonRepository: ComplectationSalonRepository
  ) {}

  async createComplectationSalon(dto: CreateComplectationSalonDto): Promise<ComplectationSalon> {
    const complectationSalonEntity = new ComplectationSalonEntity(dto);
    return this.complectationSalonRepository.create(complectationSalonEntity);
  }

  async deleteComplectationSalon(id: number): Promise<void> {
    await this.complectationSalonRepository.destroy(id);
  }

  async getComplectationSalon(id: number): Promise<ComplectationSalon> {
    return this.complectationSalonRepository.findById(id);
  }

  async updateComplectationSalon(id: number, dto: UpdateComplectationSalonDto): Promise<ComplectationSalon> {
    return this.complectationSalonRepository.update(id, new ComplectationSalonEntity(dto));
  }
}