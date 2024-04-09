import { DiscDamageEntity } from './disc-damage.entity';
import { DiscDamage } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DiscDamageRepository implements CRUDRepository<DiscDamageEntity, number, DiscDamage> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: DiscDamageEntity): Promise<DiscDamage> {
    const entityData = item.toObject();
    return this.prisma.discDamage.create({
      data: { 
        ...entityData,
        addElementDisc: {
          connect: []
        },
      },
      include: {
        addElementDisc: true,
      }
    });
  }

  public async destroy(discDamageId: number): Promise<void> {
    await this.prisma.discDamage.delete({
      where: {
        discDamageId,
      }
    });
  }

  public findById(discDamageId: number): Promise<DiscDamage | null> {
    return this.prisma.discDamage.findFirst({
      where: {
        discDamageId
      },
      include: {
        addElementDisc: true,
      }
    });
  }

  public find(ids: number[] = []): Promise<DiscDamage[]> {
    return this.prisma.discDamage.findMany({
      where: {
        discDamageId: {
          in: ids.length > 0 ? ids : undefined
        }
      },
      include: {
        addElementDisc: true,
      }
    });
  }

  public update(discDamageId: number, item: DiscDamageEntity): Promise<DiscDamage> {
    return this.prisma.discDamage.update({
      where: {
        discDamageId
      },
      data: { 
        ...item.toObject(), 
        discDamageId, 
        addElementDisc: {
          connect: []
        },
      },
      include: {
        addElementDisc: true,
      }
    });
  }
}