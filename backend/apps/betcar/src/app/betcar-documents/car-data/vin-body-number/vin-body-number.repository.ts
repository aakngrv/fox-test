import { VinBodyNumberEntity} from "./vin-body-number.entity";
import { VinBodyNumber } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class VinBodyNumberRepository implements CRUDRepository<VinBodyNumberEntity, number, VinBodyNumber> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: VinBodyNumberEntity): Promise<VinBodyNumber> {
    return this.prisma.vinBodyNumber.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(vinBodyNumberId: number): Promise<void> {
    await this.prisma.vinBodyNumber.delete({
      where: {
        vinBodyNumberId,
      }
    });
  }

  public findById(vinBodyNumberId: number): Promise<VinBodyNumber | null> {
    return this.prisma.vinBodyNumber.findFirst({
      where: {
        vinBodyNumberId
      }
    });
  }

  public find(ids: number[] = []): Promise<VinBodyNumber[]> {
    return this.prisma.vinBodyNumber.findMany({
      where: {
        vinBodyNumberId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(vinBodyNumberId: number, item: VinBodyNumberEntity): Promise<VinBodyNumber> {
    return this.prisma.vinBodyNumber.update({
      where: {
        vinBodyNumberId
      },
      data: { ...item.toObject(), vinBodyNumberId }
    });
  }
}