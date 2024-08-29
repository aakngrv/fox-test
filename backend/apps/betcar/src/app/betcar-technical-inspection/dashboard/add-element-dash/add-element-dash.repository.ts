import { AddElementDashEntity } from './add-element-dash.entity';
import { AddElementDash } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AddElementDashRepository implements CRUDRepository<AddElementDashEntity, number, AddElementDash> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: AddElementDashEntity): Promise<AddElementDash> {
    return this.prisma.addElementDash.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(addElementDashId: number): Promise<void> {
    await this.prisma.addElementDash.delete({
      where: {
        addElementDashId,
      }
    });
  }

  public findById(addElementDashId: number): Promise<AddElementDash | null> {
    return this.prisma.addElementDash.findFirst({
      where: {
        addElementDashId
      }
    });
  }

  public find(ids: number[] = []): Promise<AddElementDash[]> {
    return this.prisma.addElementDash.findMany({
      where: {
        addElementDashId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(addElementDashId: number, item: AddElementDashEntity): Promise<AddElementDash> {
    return this.prisma.addElementDash.update({
      where: {
        addElementDashId
      },
      data: { ...item.toObject(), addElementDashId}
    });
  }
}
