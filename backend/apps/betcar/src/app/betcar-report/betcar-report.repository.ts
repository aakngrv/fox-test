import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { BetcarReportEntity } from './betcar-report.entity';
import { Report } from '@backend/shared/shared-types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BetcarReportRepository implements CRUDRepository<BetcarReportEntity, number, Report> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: BetcarReportEntity): Promise<Report> {
    return this.prisma.report.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(reportId: number): Promise<void> {
    await this.prisma.report.delete({
      where: {
        reportId,
      }
    });
  }

  public async findById(reportId: number): Promise<Report | null> {
    return this.prisma.report.findFirst({
      where: {
        reportId
      },
    });
  }

  public find(): Promise<Report[]> {
    return this.prisma.report.findMany({
      // include: {
      //   comments: true,
      //   categories: true
      // }
    });
  }

  public update(_id: number, _item: BetcarReportEntity): Promise<Report> {
    return Promise.resolve(undefined);
  }
}
