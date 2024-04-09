import { ComplectationSalonEntity } from './complectation-salon.entity';
import { ComplectationSalon } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ComplectationSalonRepository implements CRUDRepository<ComplectationSalonEntity, number, ComplectationSalon> {
  
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: ComplectationSalonEntity): Promise<ComplectationSalon> {
    return this.prisma.complectationSalon.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(complectationSalonId: number): Promise<void> {
    await this.prisma.complectationSalon.delete({
      where: {
        complectationSalonId,
      }
    });
  }

  public findById(complectationSalonId: number): Promise<ComplectationSalon | null> {
    return this.prisma.complectationSalon.findFirst({
      where: {
        complectationSalonId
      }
    });
  }

  public find(ids: number[] = []): Promise<ComplectationSalon[]> {
    return this.prisma.complectationSalon.findMany({
      where: {
        complectationSalonId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(complectationSalonId: number, item: ComplectationSalonEntity): Promise<ComplectationSalon> {
    return this.prisma.complectationSalon.update({
      where: {
        complectationSalonId
      },
      data: { ...item.toObject(), complectationSalonId}
    });
  }
}