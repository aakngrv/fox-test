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
        sellerDetails: {
          connect: []
        },
        carData: {
          connect: []
        },
        additionalDocuments: {
          connect: []
        },
        tcp: {
          connect: []
        },
        sts: {
          connect: []
        },
        location: {
          connect: []
        },
        complectationBody: {
          connect: []
        },
        complectationWheels: {
          connect: []
        },
        complectationSalon: {
          connect: []
        },
        complectationHeadlights: {
          connect: []
        },
        complectationMultimedia: {
          connect: []
        },
        complectationComfort: {
          connect: []
        },
      }, 
      include: {
        sellerDetails: true,
        carData: true,
        additionalDocuments: true,
        tcp: true,
        sts: true,
        location: true,
        complectationBody: true,
        complectationWheels: true,
        complectationSalon: true,
        complectationHeadlights: true,
        complectationMultimedia: true,
        complectationComfort: true,
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
      },
      include: {
        sellerDetails: true,
        carData: true,
        additionalDocuments: true,
        tcp: true,
        sts: true,
        location: true,
        complectationBody: true,
        complectationWheels: true,
        complectationSalon: true,
        complectationHeadlights: true,
        complectationMultimedia: true,
        complectationComfort: true,
      }
    });
  }

  public find(): Promise<Report[]> {
    return this.prisma.report.findMany({
      include: {
        sellerDetails: true,
        carData: true,
        additionalDocuments: true,
        tcp: true,
        sts: true,
        location: true,
        complectationBody: true,
        complectationWheels: true,
        complectationSalon: true,
        complectationHeadlights: true,
        complectationMultimedia: true,
        complectationComfort: true,
      }
    });
  }

  public update(_id: number, _item: BetcarReportEntity): Promise<Report> {
    return Promise.resolve(undefined);
  }
}
