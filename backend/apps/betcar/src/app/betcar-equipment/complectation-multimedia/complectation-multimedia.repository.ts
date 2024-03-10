import { ComplectationMultimediaEntity } from './complectation-multimedia.entity';
import { ComplectationMultimedia } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ComplectationMultimediaRepository implements CRUDRepository<ComplectationMultimediaEntity, number, ComplectationMultimedia> {
  
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: ComplectationMultimediaEntity): Promise<ComplectationMultimedia> {
    return this.prisma.complectationMultimedia.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(complectationMultimediaId: number): Promise<void> {
    await this.prisma.complectationMultimedia.delete({
      where: {
        complectationMultimediaId,
      }
    });
  }

  public findById(complectationMultimediaId: number): Promise<ComplectationMultimedia | null> {
    return this.prisma.complectationMultimedia.findFirst({
      where: {
        complectationMultimediaId
      }
    });
  }

  public find(ids: number[] = []): Promise<ComplectationMultimedia[]> {
    return this.prisma.complectationMultimedia.findMany({
      where: {
        complectationMultimediaId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(complectationMultimediaId: number, item: ComplectationMultimediaEntity): Promise<ComplectationMultimedia> {
    return this.prisma.complectationMultimedia.update({
      where: {
        complectationMultimediaId
      },
      data: { ...item.toObject(), complectationMultimediaId}
    });
  }
}