import { CarBodyEntity } from './car-body.entity';
import { ComplectationBody } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CarBodyRepository implements CRUDRepository<CarBodyEntity, number, ComplectationBody> {
  
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: CarBodyEntity): Promise<ComplectationBody> {
    return this.prisma.complectationBody.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(complectationBodyId: number): Promise<void> {
    await this.prisma.complectationBody.delete({
      where: {
        complectationBodyId,
      }
    });
  }

  public findById(complectationBodyId: number): Promise<ComplectationBody | null> {
    return this.prisma.complectationBody.findFirst({
      where: {
        complectationBodyId
      }
    });
  }

  public find(ids: number[] = []): Promise<ComplectationBody[]> {
    return this.prisma.complectationBody.findMany({
      where: {
        complectationBodyId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(complectationBodyId: number, item: CarBodyEntity): Promise<ComplectationBody> {
    return this.prisma.complectationBody.update({
      where: {
        complectationBodyId
      },
      data: { ...item.toObject(), complectationBodyId}
    });
  }
}