import { AddElementPaintworkEntity } from './add-element-paintwork.entity';
import { AddElementPaintwork } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AddElementPaintworkRepository implements CRUDRepository<AddElementPaintworkEntity, number, AddElementPaintwork> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: AddElementPaintworkEntity): Promise<AddElementPaintwork> {
    return this.prisma.addElementPaintwork.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(addElementPaintworkId: number): Promise<void> {
    await this.prisma.addElementPaintwork.delete({
      where: {
        addElementPaintworkId,
      }
    });
  }

  public findById(addElementPaintworkId: number): Promise<AddElementPaintwork | null> {
    return this.prisma.addElementPaintwork.findFirst({
      where: {
        addElementPaintworkId
      }
    });
  }

  public find(ids: number[] = []): Promise<AddElementPaintwork[]> {
    return this.prisma.addElementPaintwork.findMany({
      where: {
        addElementPaintworkId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(addElementPaintworkId: number, item: AddElementPaintworkEntity): Promise<AddElementPaintwork> {
    return this.prisma.addElementPaintwork.update({
      where: {
        addElementPaintworkId
      },
      data: { ...item.toObject(), addElementPaintworkId}
    });
  }
}
