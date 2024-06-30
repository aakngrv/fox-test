import { AddElementTestEntity } from './add-element-test.entity';
import { AddElementTest } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AddElementTestRepository implements CRUDRepository<AddElementTestEntity, number, AddElementTest> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: AddElementTestEntity): Promise<AddElementTest> {
    return this.prisma.addElementTest.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(addElementTestId: number): Promise<void> {
    await this.prisma.addElementTest.delete({
      where: {
        addElementTestId,
      }
    });
  }

  public findById(addElementTestId: number): Promise<AddElementTest | null> {
    return this.prisma.addElementTest.findFirst({
      where: {
        addElementTestId
      }
    });
  }

  public find(ids: number[] = []): Promise<AddElementTest[]> {
    return this.prisma.addElementTest.findMany({
      where: {
        addElementTestId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(addElementTestId: number, item: AddElementTestEntity): Promise<AddElementTest> {
    return this.prisma.addElementTest.update({
      where: {
        addElementTestId
      },
      data: { ...item.toObject(), addElementTestId}
    });
  }
}
