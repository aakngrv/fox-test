import { ComplectationWheelsEntity } from './complectation-wheels.entity';
import { ComplectationWheels } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ComplectationWheelsRepository implements CRUDRepository<ComplectationWheelsEntity, number, ComplectationWheels> {
  
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: ComplectationWheelsEntity): Promise<ComplectationWheels> {
    return this.prisma.complectationWheels.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(complectationWheelsId: number): Promise<void> {
    await this.prisma.complectationWheels.delete({
      where: {
        complectationWheelsId,
      }
    });
  }

  public findById(complectationWheelsId: number): Promise<ComplectationWheels | null> {
    return this.prisma.complectationWheels.findFirst({
      where: {
        complectationWheelsId
      }
    });
  }

  public find(ids: number[] = []): Promise<ComplectationWheels[]> {
    return this.prisma.complectationWheels.findMany({
      where: {
        complectationWheelsId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(complectationWheelsId: number, item: ComplectationWheelsEntity): Promise<ComplectationWheels> {
    return this.prisma.complectationWheels.update({
      where: {
        complectationWheelsId
      },
      data: { ...item.toObject(), complectationWheelsId}
    });
  }
}