import { FrameNumberEntity} from "./frame-number.entity";
import { FrameNumber } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class FrameNumberRepository implements CRUDRepository<FrameNumberEntity, number, FrameNumber> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: FrameNumberEntity): Promise<FrameNumber> {
    return this.prisma.frameNumber.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(frameNumberId: number): Promise<void> {
    await this.prisma.frameNumber.delete({
      where: {
        frameNumberId,
      }
    });
  }

  public findById(frameNumberId: number): Promise<FrameNumber | null> {
    return this.prisma.frameNumber.findFirst({
      where: {
        frameNumberId
      }
    });
  }

  public find(ids: number[] = []): Promise<FrameNumber[]> {
    return this.prisma.frameNumber.findMany({
      where: {
        frameNumberId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(frameNumberId: number, item: FrameNumberEntity): Promise<FrameNumber> {
    return this.prisma.frameNumber.update({
      where: {
        frameNumberId
      },
      data: { ...item.toObject(), frameNumberId }
    });
  }
}