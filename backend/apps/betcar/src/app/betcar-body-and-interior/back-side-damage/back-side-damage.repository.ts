import { BackSideDamageEntity } from './back-side-damage.entity';
import { BackSideDamage } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BackSideDamageRepository implements CRUDRepository<BackSideDamageEntity, number, BackSideDamage> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: BackSideDamageEntity): Promise<BackSideDamage> {
    const entityData = item.toObject();
    return this.prisma.backSideDamage.create({
      data: { 
        ...entityData,
        addElementBack: {
          connect: []
        },
      },
      include: {
        addElementBack: true,
      }
    });
  }

  public async destroy(backSideDamageId: number): Promise<void> {
    await this.prisma.backSideDamage.delete({
      where: {
        backSideDamageId,
      }
    });
  }

  public findById(backSideDamageId: number): Promise<BackSideDamage | null> {
    return this.prisma.backSideDamage.findFirst({
      where: {
        backSideDamageId
      },
      include: {
        addElementBack: true,
      }
    });
  }

  public find(ids: number[] = []): Promise<BackSideDamage[]> {
    return this.prisma.backSideDamage.findMany({
      where: {
        backSideDamageId: {
          in: ids.length > 0 ? ids : undefined
        }
      },
      include: {
        addElementBack: true,
      }
    });
  }

  public update(backSideDamageId: number, item: BackSideDamageEntity): Promise<BackSideDamage> {
    return this.prisma.backSideDamage.update({
      where: {
        backSideDamageId
      },
      data: { 
        ...item.toObject(), 
        backSideDamageId, 
        addElementBack: {
          connect: []
        },
      },
      include: {
        addElementBack: true,
      }
    });
  }
}