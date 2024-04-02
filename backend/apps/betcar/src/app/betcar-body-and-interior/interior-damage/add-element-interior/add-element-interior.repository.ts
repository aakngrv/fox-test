import { AddElementInteriorEntity } from './add-element-interior.entity';
import { AddElementInterior } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AddElementInteriorRepository implements CRUDRepository<AddElementInteriorEntity, number, AddElementInterior> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: AddElementInteriorEntity): Promise<AddElementInterior> {
    return this.prisma.addElementInterior.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(addElementInteriorId: number): Promise<void> {
    await this.prisma.addElementInterior.delete({
      where: {
        addElementInteriorId,
      }
    });
  }

  public findById(addElementInteriorId: number): Promise<AddElementInterior | null> {
    return this.prisma.addElementInterior.findFirst({
      where: {
        addElementInteriorId
      }
    });
  }

  public find(ids: number[] = []): Promise<AddElementInterior[]> {
    return this.prisma.addElementInterior.findMany({
      where: {
        addElementInteriorId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(addElementInteriorId: number, item: AddElementInteriorEntity): Promise<AddElementInterior> {
    return this.prisma.addElementInterior.update({
      where: {
        addElementInteriorId
      },
      data: { ...item.toObject(), addElementInteriorId }
    });
  }
}
