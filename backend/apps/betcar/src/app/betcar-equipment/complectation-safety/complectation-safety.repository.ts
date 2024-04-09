import { ComplectationSafetyEntity } from './complectation-safety.entity';
import { ComplectationSafety } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ComplectationSafetyRepository implements CRUDRepository<ComplectationSafetyEntity, number, ComplectationSafety> {
  
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: ComplectationSafetyEntity): Promise<ComplectationSafety> {
    return this.prisma.complectationSafety.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(complectationSafetyId: number): Promise<void> {
    await this.prisma.complectationSafety.delete({
      where: {
        complectationSafetyId,
      }
    });
  }

  public findById(complectationSafetyId: number): Promise<ComplectationSafety | null> {
    return this.prisma.complectationSafety.findFirst({
      where: {
        complectationSafetyId
      }
    });
  }

  public find(ids: number[] = []): Promise<ComplectationSafety[]> {
    return this.prisma.complectationSafety.findMany({
      where: {
        complectationSafetyId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(complectationSafetyId: number, item: ComplectationSafetyEntity): Promise<ComplectationSafety> {
    return this.prisma.complectationSafety.update({
      where: {
        complectationSafetyId
      },
      data: { ...item.toObject(), complectationSafetyId}
    });
  }
}