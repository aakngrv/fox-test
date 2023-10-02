import { StsEntity } from './sts.entity';
import { STS } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class StsRepository implements CRUDRepository<StsEntity, number, STS> {
  
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: StsEntity): Promise<STS> {
    return this.prisma.sTS.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(stsId: number): Promise<void> {
    await this.prisma.sTS.delete({
      where: {
        stsId,
      }
    });
  }

  public findById(stsId: number): Promise<STS | null> {
    return this.prisma.sTS.findFirst({
      where: {
        stsId
      }
    });
  }

  public find(ids: number[] = []): Promise<STS[]> {
    return this.prisma.sTS.findMany({
      where: {
        stsId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(stsId: number, item: StsEntity): Promise<STS> {
    return this.prisma.sTS.update({
      where: {
        stsId
      },
      data: { ...item.toObject(), stsId}
    });
  }
}