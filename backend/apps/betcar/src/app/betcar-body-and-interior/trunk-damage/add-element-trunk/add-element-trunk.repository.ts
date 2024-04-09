import { AddElementTrunkEntity } from './add-element-trunk.entity';
import { AddElementTrunk } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AddElementTrunkRepository implements CRUDRepository<AddElementTrunkEntity, number, AddElementTrunk> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: AddElementTrunkEntity): Promise<AddElementTrunk> {
    return this.prisma.addElementTrunk.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(addElementTrunkId: number): Promise<void> {
    await this.prisma.addElementTrunk.delete({
      where: {
        addElementTrunkId,
      }
    });
  }

  public findById(addElementTrunkId: number): Promise<AddElementTrunk | null> {
    return this.prisma.addElementTrunk.findFirst({
      where: {
        addElementTrunkId
      }
    });
  }

  public find(ids: number[] = []): Promise<AddElementTrunk[]> {
    return this.prisma.addElementTrunk.findMany({
      where: {
        addElementTrunkId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(addElementTrunkId: number, item: AddElementTrunkEntity): Promise<AddElementTrunk> {
    return this.prisma.addElementTrunk.update({
      where: {
        addElementTrunkId
      },
      data: { ...item.toObject(), addElementTrunkId}
    });
  }
}
