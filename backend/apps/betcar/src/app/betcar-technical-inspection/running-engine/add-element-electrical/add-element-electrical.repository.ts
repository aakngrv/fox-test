import { AddElementElectricalEntity } from './add-element-electrical.entity';
import { AddElementElectrical } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AddElementElectricalRepository implements CRUDRepository<AddElementElectricalEntity, number, AddElementElectrical> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: AddElementElectricalEntity): Promise<AddElementElectrical> {
    return this.prisma.addElementElectrical.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(addElementElectricalId: number): Promise<void> {
    await this.prisma.addElementElectrical.delete({
      where: {
        addElementElectricalId,
      }
    });
  }

  public findById(addElementElectricalId: number): Promise<AddElementElectrical | null> {
    return this.prisma.addElementElectrical.findFirst({
      where: {
        addElementElectricalId
      }
    });
  }

  public find(ids: number[] = []): Promise<AddElementElectrical[]> {
    return this.prisma.addElementElectrical.findMany({
      where: {
        addElementElectricalId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(addElementElectricalId: number, item: AddElementElectricalEntity): Promise<AddElementElectrical> {
    return this.prisma.addElementElectrical.update({
      where: {
        addElementElectricalId
      },
      data: { ...item.toObject(), addElementElectricalId}
    });
  }
}
