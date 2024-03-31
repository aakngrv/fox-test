import { LeftSideDamageEntity } from './left-side-damage.entity';
import { LeftSideDamage } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LeftSideDamageRepository implements CRUDRepository<LeftSideDamageEntity, number, LeftSideDamage> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: LeftSideDamageEntity): Promise<LeftSideDamage> {
    const entityData = item.toObject();
    return this.prisma.leftSideDamage.create({
      data: { 
        ...entityData,
        addElementLeft: {
          connect: []
        },
      },
      include: {
        addElementLeft: true,
      }
    });
  }

  public async destroy(leftSideDamageId: number): Promise<void> {
    await this.prisma.leftSideDamage.delete({
      where: {
        leftSideDamageId,
      }
    });
  }

  public findById(leftSideDamageId: number): Promise<LeftSideDamage | null> {
    return this.prisma.leftSideDamage.findFirst({
      where: {
        leftSideDamageId
      },
      include: {
        addElementLeft: true,
      }
    });
  }

  public find(ids: number[] = []): Promise<LeftSideDamage[]> {
    return this.prisma.leftSideDamage.findMany({
      where: {
        leftSideDamageId: {
          in: ids.length > 0 ? ids : undefined
        }
      },
      include: {
        addElementLeft: true,
      }
    });
  }

  public update(leftSideDamageId: number, item: LeftSideDamageEntity): Promise<LeftSideDamage> {
    return this.prisma.leftSideDamage.update({
      where: {
        leftSideDamageId
      },
      data: { 
        ...item.toObject(), 
        leftSideDamageId, 
        addElementLeft: {
          connect: []
        },
      },
      include: {
        addElementLeft: true,
      }
    });
  }
}