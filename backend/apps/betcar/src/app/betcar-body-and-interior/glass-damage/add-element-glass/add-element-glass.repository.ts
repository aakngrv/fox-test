import { AddElementGlassEntity } from './add-element-glass.entity';
import { AddElementGlass } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AddElementGlassRepository implements CRUDRepository<AddElementGlassEntity, number, AddElementGlass> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: AddElementGlassEntity): Promise<AddElementGlass> {
    return this.prisma.addElementGlass.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(addElementGlassId: number): Promise<void> {
    await this.prisma.addElementGlass.delete({
      where: {
        addElementGlassId,
      }
    });
  }

  public findById(addElementGlassId: number): Promise<AddElementGlass | null> {
    return this.prisma.addElementGlass.findFirst({
      where: {
        addElementGlassId
      }
    });
  }

  public find(ids: number[] = []): Promise<AddElementGlass[]> {
    return this.prisma.addElementGlass.findMany({
      where: {
        addElementGlassId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(addElementGlassId: number, item: AddElementGlassEntity): Promise<AddElementGlass> {
    return this.prisma.addElementGlass.update({
      where: {
        addElementGlassId
      },
      data: { ...item.toObject(), addElementGlassId}
    });
  }
}
