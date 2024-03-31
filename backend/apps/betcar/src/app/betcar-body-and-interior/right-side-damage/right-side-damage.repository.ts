import { RightSideDamageEntity } from './right-side-damage.entity';
import { RightSideDamage } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class RightSideDamageRepository implements CRUDRepository<RightSideDamageEntity, number, RightSideDamage> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: RightSideDamageEntity): Promise<RightSideDamage> {
    const entityData = item.toObject();
    return this.prisma.rightSideDamage.create({
      data: { 
        ...entityData,
        addElementRight: {
          connect: []
        },
      },
      include: {
        addElementRight: true,
      }
    });
  }

  public async destroy(rightSideDamageId: number): Promise<void> {
    await this.prisma.rightSideDamage.delete({
      where: {
        rightSideDamageId,
      }
    });
  }

  public findById(rightSideDamageId: number): Promise<RightSideDamage | null> {
    return this.prisma.rightSideDamage.findFirst({
      where: {
        rightSideDamageId
      },
      include: {
        addElementRight: true,
      }
    });
  }

  public find(ids: number[] = []): Promise<RightSideDamage[]> {
    return this.prisma.rightSideDamage.findMany({
      where: {
        rightSideDamageId: {
          in: ids.length > 0 ? ids : undefined
        }
      },
      include: {
        addElementRight: true,
      }
    });
  }

  public update(rightSideDamageId: number, item: RightSideDamageEntity): Promise<RightSideDamage> {
    return this.prisma.rightSideDamage.update({
      where: {
        rightSideDamageId
      },
      data: { 
        ...item.toObject(), 
        rightSideDamageId, 
        addElementRight: {
          connect: []
        },
      },
      include: {
        addElementRight: true,
      }
    });
  }
}