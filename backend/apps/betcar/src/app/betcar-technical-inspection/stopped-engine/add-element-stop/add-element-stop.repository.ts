import { AddElementStopEntity } from './add-element-stop.entity';
import { AddElementStop } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AddElementStopRepository implements CRUDRepository<AddElementStopEntity, number, AddElementStop> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: AddElementStopEntity): Promise<AddElementStop> {
    return this.prisma.addElementStop.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(addElementStopId: number): Promise<void> {
    await this.prisma.addElementStop.delete({
      where: {
        addElementStopId,
      }
    });
  }

  public findById(addElementStopId: number): Promise<AddElementStop | null> {
    return this.prisma.addElementStop.findFirst({
      where: {
        addElementStopId
      }
    });
  }

  public find(ids: number[] = []): Promise<AddElementStop[]> {
    return this.prisma.addElementStop.findMany({
      where: {
        addElementStopId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(addElementStopId: number, item: AddElementStopEntity): Promise<AddElementStop> {
    return this.prisma.addElementStop.update({
      where: {
        addElementStopId
      },
      data: { ...item.toObject(), addElementStopId}
    });
  }
}
