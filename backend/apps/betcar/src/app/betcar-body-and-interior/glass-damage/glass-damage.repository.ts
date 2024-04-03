import { GlassDamageEntity } from './glass-damage.entity';
import { GlassDamage } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class GlassDamageRepository implements CRUDRepository<GlassDamageEntity, number, GlassDamage> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: GlassDamageEntity): Promise<GlassDamage> {
    const entityData = item.toObject();
    return this.prisma.glassDamage.create({
      data: { 
        ...entityData,
        addElementGlass: {
          connect: []
        },
      },
      include: {
        addElementGlass: true,
      }
    });
  }

  public async destroy(glassDamageId: number): Promise<void> {
    await this.prisma.glassDamage.delete({
      where: {
        glassDamageId,
      }
    });
  }

  public findById(glassDamageId: number): Promise<GlassDamage | null> {
    return this.prisma.glassDamage.findFirst({
      where: {
        glassDamageId
      },
      include: {
        addElementGlass: true,
      }
    });
  }

  public find(ids: number[] = []): Promise<GlassDamage[]> {
    return this.prisma.glassDamage.findMany({
      where: {
        glassDamageId: {
          in: ids.length > 0 ? ids : undefined
        }
      },
      include: {
        addElementGlass: true,
      }
    });
  }

  public update(glassDamageId: number, item: GlassDamageEntity): Promise<GlassDamage> {
    return this.prisma.glassDamage.update({
      where: {
        glassDamageId
      },
      data: { 
        ...item.toObject(), 
        glassDamageId, 
        addElementGlass: {
          connect: []
        },
      },
      include: {
        addElementGlass: true,
      }
    });
  }
}