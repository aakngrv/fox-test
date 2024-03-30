import { FrontSideDamageEntity } from './front-side-damage.entity';
import { FrontSideDamage } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FrontSideDamageRepository implements CRUDRepository<FrontSideDamageEntity, number, FrontSideDamage> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: FrontSideDamageEntity): Promise<FrontSideDamage> {
    const entityData = item.toObject();
    return this.prisma.frontSideDamage.create({
      data: { 
        ...entityData,
        addElementFront: {
          connect: []
        },
      },
      include: {
        addElementFront: true,
      }
    });
  }

  public async destroy(frontSideDamageId: number): Promise<void> {
    await this.prisma.frontSideDamage.delete({
      where: {
        frontSideDamageId,
      }
    });
  }

  public findById(frontSideDamageId: number): Promise<FrontSideDamage | null> {
    return this.prisma.frontSideDamage.findFirst({
      where: {
        frontSideDamageId
      },
      include: {
        addElementFront: true,
      }
    });
  }

  public find(ids: number[] = []): Promise<FrontSideDamage[]> {
    return this.prisma.frontSideDamage.findMany({
      where: {
        frontSideDamageId: {
          in: ids.length > 0 ? ids : undefined
        }
      },
      include: {
        addElementFront: true,
      }
    });
  }

  public update(frontSideDamageId: number, item: FrontSideDamageEntity): Promise<FrontSideDamage> {
    return this.prisma.frontSideDamage.update({
      where: {
        frontSideDamageId
      },
      data: { 
        ...item.toObject(), 
        frontSideDamageId, 
        addElementFront: {
          connect: []
        },
      },
      include: {
        addElementFront: true,
      }
    });
  }
}