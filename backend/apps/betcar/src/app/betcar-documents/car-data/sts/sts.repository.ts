import { STSEntity } from "./sts.entity";
import { STS } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class STSRepository implements CRUDRepository<STSEntity, number, STS> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: STSEntity): Promise<STS> {
    return this.prisma.sTS.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(sTSId: number): Promise<void> {
    await this.prisma.sTS.delete({
      where: {
        sTSId,
      }
    });
  }

  public findById(sTSId: number): Promise<STS | null> {
    return this.prisma.sTS.findFirst({
      where: {
        sTSId
      }
    });
  }

  public find(ids: number[] = []): Promise<STS[]> {
    return this.prisma.sTS.findMany({
      where: {
        sTSId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(sTSId: number, item: STSEntity): Promise<STS> {
    return this.prisma.sTS.update({
      where: {
        sTSId
      },
      data: { ...item.toObject(), sTSId }
    });
  }
}