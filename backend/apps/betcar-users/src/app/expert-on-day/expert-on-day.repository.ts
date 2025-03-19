import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { ExpertOnDayEntity } from './expert-on-day.entity';
import { ExpertOnDay } from '@backend/shared/shared-types';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class ExpertOnDayRepository implements CRUDRepository<ExpertOnDayEntity, number, ExpertOnDay> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: ExpertOnDayEntity): Promise<ExpertOnDay> {
    const entityData = item.toObject();
    return this.prisma.expertOnDay.create({
      data: {
        ...entityData,
      }
    });
  }

  public async destroy(expertOnDayId: number): Promise<void> {
    await this.prisma.expertOnDay.delete({
      where: {
        expertOnDayId,
      }
    });
  }

  public async findById(expertOnDayId: number): Promise<ExpertOnDay | null> {
    return this.prisma.expertOnDay.findFirst({
      where: {
        expertOnDayId
      }
    });
  }


  public find(): Promise<ExpertOnDay[]> {
    return this.prisma.expertOnDay.findMany({});
  }

  public update(expertOnDayId: number, item: ExpertOnDayEntity): Promise<ExpertOnDay> {
    const entityData = item.toObject();
    return this.prisma.expertOnDay.update({
      where: {
        expertOnDayId
      },
        data: {
          ...entityData,
        }
    });
  }
}