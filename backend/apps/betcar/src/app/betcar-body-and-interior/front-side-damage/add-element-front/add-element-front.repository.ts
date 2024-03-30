import { AddElementFrontEntity } from './add-element-front.entity';
import { AddElementFront } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AddElementFrontRepository implements CRUDRepository<AddElementFrontEntity, number, AddElementFront> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: AddElementFrontEntity): Promise<AddElementFront> {
    return this.prisma.addElementFront.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(addElementFrontId: number): Promise<void> {
    await this.prisma.addElementFront.delete({
      where: {
        addElementFrontId,
      }
    });
  }

  public findById(addElementFrontId: number): Promise<AddElementFront | null> {
    return this.prisma.addElementFront.findFirst({
      where: {
        addElementFrontId
      }
    });
  }

  public find(ids: number[] = []): Promise<AddElementFront[]> {
    return this.prisma.addElementFront.findMany({
      where: {
        addElementFrontId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(addElementFrontId: number, item: AddElementFrontEntity): Promise<AddElementFront> {
    return this.prisma.addElementFront.update({
      where: {
        addElementFrontId
      },
      data: { ...item.toObject(), addElementFrontId}
    });
  }
}
