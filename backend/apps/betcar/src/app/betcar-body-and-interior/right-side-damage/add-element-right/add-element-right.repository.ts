import { AddElementRightEntity } from './add-element-right.entity';
import { AddElementRight } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AddElementRightRepository implements CRUDRepository<AddElementRightEntity, number, AddElementRight> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: AddElementRightEntity): Promise<AddElementRight> {
    return this.prisma.addElementRight.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(addElementRightId: number): Promise<void> {
    await this.prisma.addElementRight.delete({
      where: {
        addElementRightId,
      }
    });
  }

  public findById(addElementRightId: number): Promise<AddElementRight | null> {
    return this.prisma.addElementRight.findFirst({
      where: {
        addElementRightId
      }
    });
  }

  public find(ids: number[] = []): Promise<AddElementRight[]> {
    return this.prisma.addElementRight.findMany({
      where: {
        addElementRightId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(addElementRightId: number, item: AddElementRightEntity): Promise<AddElementRight> {
    return this.prisma.addElementRight.update({
      where: {
        addElementRightId
      },
      data: { ...item.toObject(), addElementRightId}
    });
  }
}
