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
        complectationSafety: {
          connect: []
        },
        complectationProtection: {
          connect: []
        },
        complectationOther: {
          connect: []
        },
        paintworkInspection: {
          connect: []
        },
        engineCompartmentDamage: {
          create: [{ addElement: true }, { removeElement: true}],
          connect: []
        },
        frontSideDamage: {
          create: [{ addElementFront: true }, { removeElement: true}],
          connect: []
        },
        leftSideDamage: {
          create: [{ addElementLeft: true }, { removeElement: true}],
          connect: []
        },
        backSideDamage: {
          create: [{ addElementBack: true }, { removeElement: true}],
          connect: []
        },
        trunkDamage: {
          create: [{ addElementTrunk: true }, { removeElement: true}],
          connect: []
        },
        rightSideDamage: {
          create: [{ addElementRight: true }, { removeElement: true}],
          connect: []
        },
        roofDamage: {
          create: [{ addElementRoof: true }, { removeElement: true}],
          connect: []
        },
        glassDamage: {
          create: [{ addElementGlass: true }, { removeElement: true}],
          connect: []
        },
        discDamage: {
          create: [{ addElementDisc: true }, { removeElement: true}],
          connect: []
        },
        interiorDamage: {
          create: [{ addElementInterior: true }, { removeElement: true}],
          connect: []
        },
        exteriorPhoto: {
          // create: [{ addElementInterior: true }, { removeElement: true}],
          connect: []
        },
        interiorPhoto: {
          // create: [{ addElementInterior: true }, { removeElement: true}],
          connect: []
        },
        roundViewVideo: {
          connect: []
        },
        stoppedEngine: {
          connect: []
        },
        runningEngine: {
          connect: []
        },
        dashboard: {
          connect: []
        },
        testDrive: {
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
        complectationSafety: true,
        complectationProtection: true,
        complectationOther: true,
        paintworkInspection: true,
        engineCompartmentDamage: true,
        frontSideDamage: true,
        leftSideDamage: true,
        backSideDamage: true,
        trunkDamage: true,
        rightSideDamage: true,
        roofDamage: true,
        glassDamage: true,
        discDamage: true,
        interiorDamage: true,
        exteriorPhoto: true,
        interiorPhoto: true,
        roundViewVideo: true,
        stoppedEngine: true,
        runningEngine: true,
        dashboard: true,
        testDrive: true,
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
        complectationSafety: true,
        complectationProtection: true,
        complectationOther: true,
        paintworkInspection: true,
        engineCompartmentDamage: true,
        frontSideDamage: true,
        leftSideDamage: true,
        backSideDamage: true,
        trunkDamage: true,
        rightSideDamage: true,
        roofDamage: true,
        glassDamage: true,
        discDamage: true,
        interiorDamage: true,
        exteriorPhoto: true,
        interiorPhoto: true,
        roundViewVideo: true,
        stoppedEngine: true,
        runningEngine: true,
        dashboard: true,
        testDrive: true,
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
        complectationSafety: true,
        complectationProtection: true,
        complectationOther: true,
        paintworkInspection: true,
        engineCompartmentDamage: true,
        frontSideDamage: true,
        leftSideDamage: true,
        backSideDamage: true,
        trunkDamage: true,
        rightSideDamage: true,
        roofDamage: true,
        glassDamage: true,
        discDamage: true,
        interiorDamage: true,
        exteriorPhoto: true,
        interiorPhoto: true,
        roundViewVideo: true,
        stoppedEngine: true,
        runningEngine: true,
        dashboard: true,
        testDrive: true,
      }
    });
  }

  public update(_id: number, _item: BetcarReportEntity): Promise<Report> {
    return Promise.resolve(undefined);
  }
}
