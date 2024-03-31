import { TrunkDamageEntity } from './trunk-damage.entity';
import { TrunkDamage } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TrunkDamageRepository implements CRUDRepository<TrunkDamageEntity, number, TrunkDamage> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: TrunkDamageEntity): Promise<TrunkDamage> {
    const entityData = item.toObject();
    return this.prisma.trunkDamage.create({
      data: { 
        ...entityData,
        addElementTrunk: {
          connect: []
        },
      },
      include: {
        addElementTrunk: true,
      }
    });
  }

  public async destroy(trunkDamageId: number): Promise<void> {
    await this.prisma.trunkDamage.delete({
      where: {
        trunkDamageId,
      }
    });
  }

  public findById(trunkDamageId: number): Promise<TrunkDamage | null> {
    return this.prisma.trunkDamage.findFirst({
      where: {
        trunkDamageId
      },
      include: {
        addElementTrunk: true,
      }
    });
  }

  public find(ids: number[] = []): Promise<TrunkDamage[]> {
    return this.prisma.trunkDamage.findMany({
      where: {
        trunkDamageId: {
          in: ids.length > 0 ? ids : undefined
        }
      },
      include: {
        addElementTrunk: true,
      }
    });
  }

  public update(trunkDamageId: number, item: TrunkDamageEntity): Promise<TrunkDamage> {
    return this.prisma.trunkDamage.update({
      where: {
        trunkDamageId
      },
      data: { 
        ...item.toObject(), 
        trunkDamageId, 
        addElementTrunk: {
          connect: []
        },
      },
      include: {
        addElementTrunk: true,
      }
    });
  }
}