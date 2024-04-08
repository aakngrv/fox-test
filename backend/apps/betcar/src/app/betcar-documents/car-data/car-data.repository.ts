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
    const entityData = item.toObject();
    return this.prisma.carData.create({
      data: { 
        ...entityData,
        vinBodyNumber: {
          connect: []
        },
        frameNumber: {
          connect: []
        },
        stateNumber: {
          connect: []
        },
      },
      include: {
        vinBodyNumber: true,
        frameNumber: true,
        stateNumber: true,
      }
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
      },
      include: {
        vinBodyNumber: true,
        frameNumber: true,
        stateNumber: true,
      }
    });
  }

  public find(ids: number[] = []): Promise<CarData[]> {
    return this.prisma.carData.findMany({
      where: {
        carDataId: {
          in: ids.length > 0 ? ids : undefined
        }
      },
      include: {
        vinBodyNumber: true,
        frameNumber: true,
        stateNumber: true,
      }
    });
  }

  public update(carDataId: number, item: CarDataEntity): Promise<CarData> {
    return this.prisma.carData.update({
      where: {
        carDataId
      },
      data: { 
        ...item.toObject(), 
        carDataId,
        vinBodyNumber: {
          connect: []
        },
        frameNumber: {
          connect: []
        },
        stateNumber: {
          connect: []
        }
      },
      include: {
        vinBodyNumber: true,
        frameNumber: true,
        stateNumber: true,
      }
    });
  }
}