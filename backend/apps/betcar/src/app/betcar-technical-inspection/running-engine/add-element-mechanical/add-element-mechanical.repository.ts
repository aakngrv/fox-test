import { AddElementMechanicalEntity } from './add-element-mechanical.entity';
import { AddElementMechanical } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AddElementMechanicalRepository implements CRUDRepository<AddElementMechanicalEntity, number, AddElementMechanical> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: AddElementMechanicalEntity): Promise<AddElementMechanical> {
    return this.prisma.addElementMechanical.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(addElementMechanicalId: number): Promise<void> {
    await this.prisma.addElementMechanical.delete({
      where: {
        addElementMechanicalId,
      }
    });
  }

  public findById(addElementMechanicalId: number): Promise<AddElementMechanical | null> {
    return this.prisma.addElementMechanical.findFirst({
      where: {
        addElementMechanicalId
      }
    });
  }

  public find(ids: number[] = []): Promise<AddElementMechanical[]> {
    return this.prisma.addElementMechanical.findMany({
      where: {
        addElementMechanicalId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(addElementMechanicalId: number, item: AddElementMechanicalEntity): Promise<AddElementMechanical> {
    return this.prisma.addElementMechanical.update({
      where: {
        addElementMechanicalId
      },
      data: { ...item.toObject(), addElementMechanicalId}
    });
  }
}
