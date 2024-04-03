import { RoundViewVideoEntity} from "./round-view-video.entity";
import { RoundViewVideo } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class RoundViewVideoRepository implements CRUDRepository<RoundViewVideoEntity, number, RoundViewVideo> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: RoundViewVideoEntity): Promise<RoundViewVideo> {
    return this.prisma.roundViewVideo.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(roundViewVideoId: number): Promise<void> {
    await this.prisma.roundViewVideo.delete({
      where: {
        roundViewVideoId,
      }
    });
  }

  public findById(roundViewVideoId: number): Promise<RoundViewVideo | null> {
    return this.prisma.roundViewVideo.findFirst({
      where: {
        roundViewVideoId
      }
    });
  }

  public find(ids: number[] = []): Promise<RoundViewVideo[]> {
    return this.prisma.roundViewVideo.findMany({
      where: {
        roundViewVideoId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(roundViewVideoId: number, item: RoundViewVideoEntity): Promise<RoundViewVideo> {
    return this.prisma.roundViewVideo.update({
      where: {
        roundViewVideoId
      },
      data: { ...item.toObject(), roundViewVideoId }
    });
  }
}