import { RoofDamageEntity } from './roof-damage.entity';
import { RoofDamage } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class RoofDamageRepository implements CRUDRepository<RoofDamageEntity, number, RoofDamage> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: RoofDamageEntity): Promise<RoofDamage> {
    const entityData = item.toObject();
    return this.prisma.roofDamage.create({
      data: { 
        ...entityData,
        addElementRoof: {
          connect: []
        },
      },
      include: {
        addElementRoof: true,
      }
    });
  }

  public async destroy(roofDamageId: number): Promise<void> {
    await this.prisma.roofDamage.delete({
      where: {
        roofDamageId,
      }
    });
  }

  public findById(roofDamageId: number): Promise<RoofDamage | null> {
    return this.prisma.roofDamage.findFirst({
      where: {
        roofDamageId
      },
      include: {
        addElementRoof: true,
      }
    });
  }

  public find(ids: number[] = []): Promise<RoofDamage[]> {
    return this.prisma.roofDamage.findMany({
      where: {
        roofDamageId: {
          in: ids.length > 0 ? ids : undefined
        }
      },
      include: {
        addElementRoof: true,
      }
    });
  }

  public update(roofDamageId: number, item: RoofDamageEntity): Promise<RoofDamage> {
    return this.prisma.roofDamage.update({
      where: {
        roofDamageId
      },
      data: { 
        ...item.toObject(), 
        roofDamageId, 
        addElementRoof: {
          connect: []
        },
      },
      include: {
        addElementRoof: true,
      }
    });
  }
}