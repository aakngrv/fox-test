import { CreateCarDataDto } from './dto/create-car-data.dto';
import { CarData } from '@backend/shared/shared-types';
import { CarDataRepository } from './car-data.repository';
import { Injectable } from '@nestjs/common';
import { CarDataEntity } from './car-data.entity';
import { UpdateCarDataDto } from './dto/update-car-data.dto';

@Injectable()
export class CarDataService {

  constructor(
    private readonly carDataRepository: CarDataRepository
  ) {}

  async createCarData(dto: CreateCarDataDto): Promise<CarData> {
    const carDataEntity = new CarDataEntity(dto);
    return this.carDataRepository.create(carDataEntity);
  }

  async deleteCarData(id: number): Promise<void> {
    await this.carDataRepository.destroy(id);
  }

  async getCarData(id: number): Promise<CarData> {
    return this.carDataRepository.findById(id);
  }

  async updateCarData(id: number, dto: UpdateCarDataDto): Promise<CarData> {
    return this.carDataRepository.update(id, new CarDataEntity(dto));
  }
}