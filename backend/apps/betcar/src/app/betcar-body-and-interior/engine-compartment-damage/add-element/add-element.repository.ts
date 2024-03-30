import { AddElementEntity } from './add-element.entity';
import { AddElement } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AddElementRepository implements CRUDRepository<AddElementEntity, number, AddElement> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: AddElementEntity): Promise<AddElement> {
    return this.prisma.addElement.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(addElementId: number): Promise<void> {
    await this.prisma.addElement.delete({
      where: {
        addElementId,
      }
    });
  }

  public findById(addElementId: number): Promise<AddElement | null> {
    return this.prisma.addElement.findFirst({
      where: {
        addElementId
      }
    });
  }

  public find(ids: number[] = []): Promise<AddElement[]> {
    return this.prisma.addElement.findMany({
      where: {
        addElementId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(addElementId: number, item: AddElementEntity): Promise<AddElement> {
    return this.prisma.addElement.update({
      where: {
        addElementId
      },
      data: { ...item.toObject(), addElementId}
    });
  }
}