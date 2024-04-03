import { AddElementBackEntity } from './add-element-back.entity';
import { AddElementBack } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AddElementBackRepository implements CRUDRepository<AddElementBackEntity, number, AddElementBack> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: AddElementBackEntity): Promise<AddElementBack> {
    return this.prisma.addElementBack.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(addElementBackId: number): Promise<void> {
    await this.prisma.addElementBack.delete({
      where: {
        addElementBackId,
      }
    });
  }

  public findById(addElementBackId: number): Promise<AddElementBack | null> {
    return this.prisma.addElementBack.findFirst({
      where: {
        addElementBackId
      }
    });
  }

  public find(ids: number[] = []): Promise<AddElementBack[]> {
    return this.prisma.addElementBack.findMany({
      where: {
        addElementBackId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(addElementBackId: number, item: AddElementBackEntity): Promise<AddElementBack> {
    return this.prisma.addElementBack.update({
      where: {
        addElementBackId
      },
      data: { ...item.toObject(), addElementBackId}
    });
  }
}
