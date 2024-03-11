import { ComplectationOtherEntity } from './complectation-other.entity';
import { ComplectationOther } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ComplectationOtherRepository implements CRUDRepository<ComplectationOtherEntity, number, ComplectationOther> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: ComplectationOtherEntity): Promise<ComplectationOther> {
    return this.prisma.complectationOther.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(complectationOtherId: number): Promise<void> {
    await this.prisma.complectationOther.delete({
      where: {
        complectationOtherId,
      }
    });
  }

  public findById(complectationOtherId: number): Promise<ComplectationOther | null> {
    return this.prisma.complectationOther.findFirst({
      where: {
        complectationOtherId
      }
    });
  }

  public find(ids: number[] = []): Promise<ComplectationOther[]> {
    return this.prisma.complectationOther.findMany({
      where: {
        complectationOtherId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(complectationOtherId: number, item: ComplectationOtherEntity): Promise<ComplectationOther> {
    return this.prisma.complectationOther.update({
      where: {
        complectationOtherId
      },
      data: { ...item.toObject(), complectationOtherId}
    });
  }
}