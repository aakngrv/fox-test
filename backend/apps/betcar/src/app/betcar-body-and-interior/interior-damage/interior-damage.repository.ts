import { InteriorDamageEntity} from "./interior-damage.entity";
import { InteriorDamage } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class InteriorDamageRepository implements CRUDRepository<InteriorDamageEntity, number, InteriorDamage> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: InteriorDamageEntity): Promise<InteriorDamage> {
    const entityData = item.toObject();
    return this.prisma.interiorDamage.create({
      data: {
        ...entityData,
        addElementInterior: {
          connect: []
        },
      },
      include: {
        addElementInterior: true,
      }
    });
  }

  public async destroy(interiorDamageId: number): Promise<void> {
    await this.prisma.interiorDamage.delete({
      where: {
        interiorDamageId,
      }
    });
  }

  public findById(interiorDamageId: number): Promise<InteriorDamage | null> {
    return this.prisma.interiorDamage.findFirst({
      where: {
        interiorDamageId
      },
      include: {
        addElementInterior: true,
      }
    });
  }

  public find(ids: number[] = []): Promise<InteriorDamage[]> {
    return this.prisma.interiorDamage.findMany({
      where: {
        interiorDamageId: {
          in: ids.length > 0 ? ids : undefined
        }
      },
      include: {
        addElementInterior: true,
      }
    });
  }

  public update(interiorDamageId: number, item: InteriorDamageEntity): Promise<InteriorDamage> {
    return this.prisma.interiorDamage.update({
      where: {
        interiorDamageId
      },
      data: {
        ...item.toObject(),
        interiorDamageId,
        addElementInterior: {
          connect: []
        },
      },
      include: {
        addElementInterior: true,
      }
    });
  }
}