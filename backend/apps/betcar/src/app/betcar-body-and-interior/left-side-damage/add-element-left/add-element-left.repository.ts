import { AddElementLeftEntity } from './add-element-left.entity';
import { AddElementLeft } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AddElementLeftRepository implements CRUDRepository<AddElementLeftEntity, number, AddElementLeft> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: AddElementLeftEntity): Promise<AddElementLeft> {
    return this.prisma.addElementLeft.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(addElementLeftId: number): Promise<void> {
    await this.prisma.addElementLeft.delete({
      where: {
        addElementLeftId,
      }
    });
  }

  public findById(addElementLeftId: number): Promise<AddElementLeft | null> {
    return this.prisma.addElementLeft.findFirst({
      where: {
        addElementLeftId
      }
    });
  }

  public find(ids: number[] = []): Promise<AddElementLeft[]> {
    return this.prisma.addElementLeft.findMany({
      where: {
        addElementLeftId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(addElementLeftId: number, item: AddElementLeftEntity): Promise<AddElementLeft> {
    return this.prisma.addElementLeft.update({
      where: {
        addElementLeftId
      },
      data: { ...item.toObject(), addElementLeftId}
    });
  }
}
