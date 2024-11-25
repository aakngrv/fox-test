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
    const entityData = item.toObject();
    return this.prisma.report.create({
      data: {
        ...entityData,
      }
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
      }
    });
  }

  public async findByNumber(reportNumber: number): Promise<Report | null> {
    return this.prisma.report.findFirst({
      where: {
        reportNumber: reportNumber
      }
    });
  }

  public async findByVIN(vinNumber: string): Promise<Report[] | null> {
    return this.prisma.report.findMany({
      where: {
        vinNumber: vinNumber
      },
    });
  }
  
  public async findByEmail(userEmail: string): Promise<Report[] | null> {
    return this.prisma.report.findMany({
      where: {
        userEmail: userEmail
      },
    });
  }

  public find(): Promise<Report[]> {
    return this.prisma.report.findMany({});
  }


  public update(reportId: number, item: BetcarReportEntity): Promise<Report> {
    const entityData = item.toObject();
    return this.prisma.report.update({
      where: {
        reportId
      },
        data: {
          ...entityData,
        }
    });
  }
}

