import { CreateCarBodyDto } from './dto/create-car-body.dto';
import { ComplectationBody } from '@backend/shared/shared-types';
import { CarBodyRepository } from './car-body.repository';
import { Injectable } from '@nestjs/common';
import { CarBodyEntity } from './car-body.entity';
import { UpdateCarBodyDto } from './dto/update-car-body.dto';

@Injectable()
export class CarBodyService {

  constructor(
    private readonly carBodyRepository: CarBodyRepository
  ) {}

  async createCarBody(dto: CreateCarBodyDto): Promise<ComplectationBody> {
    const carBodyEntity = new CarBodyEntity(dto);
    return this.carBodyRepository.create(carBodyEntity);
  }

  async deleteCarBody(id: number): Promise<void> {
    await this.carBodyRepository.destroy(id);
  }

  async getCarBody(id: number): Promise<ComplectationBody> {
    return this.carBodyRepository.findById(id);
  }

  async updateCarBody(id: number, dto: UpdateCarBodyDto): Promise<ComplectationBody> {
    return this.carBodyRepository.update(id, new CarBodyEntity(dto));
  }
}