import { StoppedEngineEntity} from "./stopped-engine.entity";
import { StoppedEngine } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class StoppedEngineRepository implements CRUDRepository<StoppedEngineEntity, number, StoppedEngine> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: StoppedEngineEntity): Promise<StoppedEngine> {
    return this.prisma.stoppedEngine.create({
      data: { 
        ...item.toObject(),
        addElementStop: {
          connect: []
        },
      },
      include: {
        addElementStop: true,
      }
    });
  }

  public async destroy(stoppedEngineId: number): Promise<void> {
    await this.prisma.stoppedEngine.delete({
      where: {
        stoppedEngineId,
      }
    });
  }

  public findById(stoppedEngineId: number): Promise<StoppedEngine | null> {
    return this.prisma.stoppedEngine.findFirst({
      where: {
        stoppedEngineId
      },
      include: {
        addElementStop: true,
      }
    });
  }

  public find(ids: number[] = []): Promise<StoppedEngine[]> {
    return this.prisma.stoppedEngine.findMany({
      where: {
        stoppedEngineId: {
          in: ids.length > 0 ? ids : undefined
        }
      },
      include: {
        addElementStop: true,
      }
    });
  }

  public update(stoppedEngineId: number, item: StoppedEngineEntity): Promise<StoppedEngine> {
    return this.prisma.stoppedEngine.update({
      where: {
        stoppedEngineId
      },
      data: { 
        ...item.toObject(),
        stoppedEngineId,
        addElementStop: {
          connect: []
        },
      },
      include: {
        addElementStop: true,
      }
    });
  }
}