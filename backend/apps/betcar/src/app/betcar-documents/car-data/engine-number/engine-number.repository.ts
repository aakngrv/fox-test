import { EngineNumberEntity} from "./engine-number.entity";
import { EngineNumber } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class EngineNumberRepository implements CRUDRepository<EngineNumberEntity, number, EngineNumber> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: EngineNumberEntity): Promise<EngineNumber> {
    return this.prisma.engineNumber.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(engineNumberId: number): Promise<void> {
    await this.prisma.engineNumber.delete({
      where: {
        engineNumberId,
      }
    });
  }

  public findById(engineNumberId: number): Promise<EngineNumber | null> {
    return this.prisma.engineNumber.findFirst({
      where: {
        engineNumberId
      }
    });
  }

  public find(ids: number[] = []): Promise<EngineNumber[]> {
    return this.prisma.engineNumber.findMany({
      where: {
        engineNumberId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(engineNumberId: number, item: EngineNumberEntity): Promise<EngineNumber> {
    return this.prisma.engineNumber.update({
      where: {
        engineNumberId
      },
      data: { ...item.toObject(), engineNumberId }
    });
  }
}