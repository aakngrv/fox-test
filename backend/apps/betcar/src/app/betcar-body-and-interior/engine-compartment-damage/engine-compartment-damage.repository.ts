import { EngineCompartmentDamageEntity } from './engine-compartment-damage.entity';
import { EngineCompartmentDamage } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EngineCompartmentDamageRepository implements CRUDRepository<EngineCompartmentDamageEntity, number, EngineCompartmentDamage> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: EngineCompartmentDamageEntity): Promise<EngineCompartmentDamage> {
    const entityData = item.toObject();
    return this.prisma.engineCompartmentDamage.create({
      data: { 
        ...entityData,
        addElement: {
          connect: []
        },
      },
      include: {
        addElement: true,
      }
    });
  }

  public async destroy(engineCompartmentDamageId: number): Promise<void> {
    await this.prisma.engineCompartmentDamage.delete({
      where: {
        engineCompartmentDamageId,
      }
    });
  }

  public findById(engineCompartmentDamageId: number): Promise<EngineCompartmentDamage | null> {
    return this.prisma.engineCompartmentDamage.findFirst({
      where: {
        engineCompartmentDamageId
      },
      include: {
        addElement: true,
      }
    });
  }

  public find(ids: number[] = []): Promise<EngineCompartmentDamage[]> {
    return this.prisma.engineCompartmentDamage.findMany({
      where: {
        engineCompartmentDamageId: {
          in: ids.length > 0 ? ids : undefined
        }
      },
      include: {
        addElement: true,
      }
    });
  }

  public update(engineCompartmentDamageId: number, item: EngineCompartmentDamageEntity): Promise<EngineCompartmentDamage> {
    return this.prisma.engineCompartmentDamage.update({
      where: {
        engineCompartmentDamageId
      },
      data: { 
        ...item.toObject(), 
        engineCompartmentDamageId, 
        addElement: {
          connect: []
        },
      },
      include: {
        addElement: true,
      }
    });
  }
}