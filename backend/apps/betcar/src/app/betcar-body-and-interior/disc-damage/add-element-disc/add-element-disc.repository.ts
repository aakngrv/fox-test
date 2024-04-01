import { AddElementDiscEntity } from './add-element-disc.entity';
import { AddElementDisc } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AddElementDiscRepository implements CRUDRepository<AddElementDiscEntity, number, AddElementDisc> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: AddElementDiscEntity): Promise<AddElementDisc> {
    return this.prisma.addElementDisc.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(addElementDiscId: number): Promise<void> {
    await this.prisma.addElementDisc.delete({
      where: {
        addElementDiscId,
      }
    });
  }

  public findById(addElementDiscId: number): Promise<AddElementDisc | null> {
    return this.prisma.addElementDisc.findFirst({
      where: {
        addElementDiscId
      }
    });
  }

  public find(ids: number[] = []): Promise<AddElementDisc[]> {
    return this.prisma.addElementDisc.findMany({
      where: {
        addElementDiscId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(addElementDiscId: number, item: AddElementDiscEntity): Promise<AddElementDisc> {
    return this.prisma.addElementDisc.update({
      where: {
        addElementDiscId
      },
      data: { ...item.toObject(), addElementDiscId }
    });
  }
}
