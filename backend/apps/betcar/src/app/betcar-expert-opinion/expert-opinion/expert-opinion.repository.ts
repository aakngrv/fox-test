import { ExpertOpinionEntity} from "./expert-opinion.entity";
import { ExpertOpinion } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ExpertOpinionRepository implements CRUDRepository<ExpertOpinionEntity, number, ExpertOpinion> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: ExpertOpinionEntity): Promise<ExpertOpinion> {
    return this.prisma.expertOpinion.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(expertOpinionId: number): Promise<void> {
    await this.prisma.expertOpinion.delete({
      where: {
        expertOpinionId,
      }
    });
  }

  public findById(expertOpinionId: number): Promise<ExpertOpinion | null> {
    return this.prisma.expertOpinion.findFirst({
      where: {
        expertOpinionId
      }
    });
  }

  public find(ids: number[] = []): Promise<ExpertOpinion[]> {
    return this.prisma.expertOpinion.findMany({
      where: {
        expertOpinionId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(expertOpinionId: number, item: ExpertOpinionEntity): Promise<ExpertOpinion> {
    return this.prisma.expertOpinion.update({
      where: {
        expertOpinionId
      },
      data: { ...item.toObject(), expertOpinionId }
    });
  }
}