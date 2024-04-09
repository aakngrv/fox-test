import { AddElementRoofEntity } from './add-element-roof.entity';
import { AddElementRoof } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AddElementRoofRepository implements CRUDRepository<AddElementRoofEntity, number, AddElementRoof> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: AddElementRoofEntity): Promise<AddElementRoof> {
    return this.prisma.addElementRoof.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(addElementRoofId: number): Promise<void> {
    await this.prisma.addElementRoof.delete({
      where: {
        addElementRoofId,
      }
    });
  }

  public findById(addElementRoofId: number): Promise<AddElementRoof | null> {
    return this.prisma.addElementRoof.findFirst({
      where: {
        addElementRoofId
      }
    });
  }

  public find(ids: number[] = []): Promise<AddElementRoof[]> {
    return this.prisma.addElementRoof.findMany({
      where: {
        addElementRoofId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(addElementRoofId: number, item: AddElementRoofEntity): Promise<AddElementRoof> {
    return this.prisma.addElementRoof.update({
      where: {
        addElementRoofId
      },
      data: { ...item.toObject(), addElementRoofId}
    });
  }
}
