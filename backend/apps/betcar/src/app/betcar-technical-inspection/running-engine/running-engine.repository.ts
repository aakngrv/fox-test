import { RunningEngineEntity} from "./running-engine.entity";
import { RunningEngine } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class RunningEngineRepository implements CRUDRepository<RunningEngineEntity, number, RunningEngine> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: RunningEngineEntity): Promise<RunningEngine> {
    return this.prisma.runningEngine.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(runningEngineId: number): Promise<void> {
    await this.prisma.runningEngine.delete({
      where: {
        runningEngineId,
      }
    });
  }

  public findById(runningEngineId: number): Promise<RunningEngine | null> {
    return this.prisma.runningEngine.findFirst({
      where: {
        runningEngineId
      }
    });
  }

  public find(ids: number[] = []): Promise<RunningEngine[]> {
    return this.prisma.runningEngine.findMany({
      where: {
        runningEngineId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(runningEngineId: number, item: RunningEngineEntity): Promise<RunningEngine> {
    return this.prisma.runningEngine.update({
      where: {
        runningEngineId
      },
      data: { ...item.toObject(), runningEngineId }
    });
  }
}