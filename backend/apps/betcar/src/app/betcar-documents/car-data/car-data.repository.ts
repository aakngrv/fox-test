import { CarDataEntity } from './car-data.entity';
import { CarData } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CarDataRepository implements CRUDRepository<CarDataEntity, number, CarData> {
  
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: CarDataEntity): Promise<CarData> {
    return this.prisma.carData.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(carDataId: number): Promise<void> {
    await this.prisma.carData.delete({
      where: {
        carDataId,
      }
    });
  }

  public findById(carDataId: number): Promise<CarData | null> {
    return this.prisma.carData.findFirst({
      where: {
        carDataId
      }
    });
  }

  public update(carDataId: number, item: CarDataEntity): Promise<CarData> {
    return this.prisma.carData.update({
      where: {
        carDataId
      },
      data: { ...item.toObject(), carDataId}
    });
  }
}