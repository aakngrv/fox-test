import { StateNumberEntity} from "./state-number.entity";
import { StateNumber } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class StateNumberRepository implements CRUDRepository<StateNumberEntity, number, StateNumber> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: StateNumberEntity): Promise<StateNumber> {
    return this.prisma.stateNumber.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(stateNumberId: number): Promise<void> {
    await this.prisma.stateNumber.delete({
      where: {
        stateNumberId,
      }
    });
  }

  public findById(stateNumberId: number): Promise<StateNumber | null> {
    return this.prisma.stateNumber.findFirst({
      where: {
        stateNumberId
      }
    });
  }

  public find(ids: number[] = []): Promise<StateNumber[]> {
    return this.prisma.stateNumber.findMany({
      where: {
        stateNumberId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(stateNumberId: number, item: StateNumberEntity): Promise<StateNumber> {
    return this.prisma.stateNumber.update({
      where: {
        stateNumberId
      },
      data: { ...item.toObject(), stateNumberId }
    });
  }
}