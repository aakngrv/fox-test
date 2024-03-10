import { ComplectationComfortEntity } from './complectation-comfort.entity';
import { ComplectationComfort } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ComplectationComfortRepository implements CRUDRepository<ComplectationComfortEntity, number, ComplectationComfort> {
  
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: ComplectationComfortEntity): Promise<ComplectationComfort> {
    return this.prisma.complectationComfort.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(complectationComfortId: number): Promise<void> {
    await this.prisma.complectationComfort.delete({
      where: {
        complectationComfortId,
      }
    });
  }

  public findById(complectationComfortId: number): Promise<ComplectationComfort | null> {
    return this.prisma.complectationComfort.findFirst({
      where: {
        complectationComfortId
      }
    });
  }

  public find(ids: number[] = []): Promise<ComplectationComfort[]> {
    return this.prisma.complectationComfort.findMany({
      where: {
        complectationComfortId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(complectationComfortId: number, item: ComplectationComfortEntity): Promise<ComplectationComfort> {
    return this.prisma.complectationComfort.update({
      where: {
        complectationComfortId
      },
      data: { ...item.toObject(), complectationComfortId}
    });
  }
}