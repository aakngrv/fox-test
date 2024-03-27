import { PaintworkInspectionEntity } from './paintwork-inspection.entity';
import { PaintworkInspection } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PaintworkInspectionRepository implements CRUDRepository<PaintworkInspectionEntity, number, PaintworkInspection> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: PaintworkInspectionEntity): Promise<PaintworkInspection> {
    return this.prisma.paintworkInspection.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(paintworkInspectionId: number): Promise<void> {
    await this.prisma.paintworkInspection.delete({
      where: {
        paintworkInspectionId,
      }
    });
  }

  public findById(paintworkInspectionId: number): Promise<PaintworkInspection | null> {
    return this.prisma.paintworkInspection.findFirst({
      where: {
        paintworkInspectionId
      }
    });
  }

  public find(ids: number[] = []): Promise<PaintworkInspection[]> {
    return this.prisma.paintworkInspection.findMany({
      where: {
        paintworkInspectionId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(paintworkInspectionId: number, item: PaintworkInspectionEntity): Promise<PaintworkInspection> {
    return this.prisma.paintworkInspection.update({
      where: {
        paintworkInspectionId
      },
      data: { ...item.toObject(), paintworkInspectionId}
    });
  }
}