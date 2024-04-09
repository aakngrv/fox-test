import { ComplectationHeadlightsEntity } from './complectation-headlights.entity';
import { ComplectationHeadlights } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ComplectationHeadlightsRepository implements CRUDRepository<ComplectationHeadlightsEntity, number, ComplectationHeadlights> {
  
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: ComplectationHeadlightsEntity): Promise<ComplectationHeadlights> {
    return this.prisma.complectationHeadlights.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(complectationHeadlightsId: number): Promise<void> {
    await this.prisma.complectationHeadlights.delete({
      where: {
        complectationHeadlightsId,
      }
    });
  }

  public findById(complectationHeadlightsId: number): Promise<ComplectationHeadlights | null> {
    return this.prisma.complectationHeadlights.findFirst({
      where: {
        complectationHeadlightsId
      }
    });
  }

  public find(ids: number[] = []): Promise<ComplectationHeadlights[]> {
    return this.prisma.complectationHeadlights.findMany({
      where: {
        complectationHeadlightsId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(complectationHeadlightsId: number, item: ComplectationHeadlightsEntity): Promise<ComplectationHeadlights> {
    return this.prisma.complectationHeadlights.update({
      where: {
        complectationHeadlightsId
      },
      data: { ...item.toObject(), complectationHeadlightsId}
    });
  }
}