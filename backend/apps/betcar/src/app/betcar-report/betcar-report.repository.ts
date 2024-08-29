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
          connect: []
        },
        frontSideDamage: {
          connect: []
        },
        leftSideDamage: {
          connect: []
        },
        backSideDamage: {
          connect: []
        },
        trunkDamage: {
          connect: []
        },
        rightSideDamage: {
          connect: []
        },
        roofDamage: {
          connect: []
        },
        glassDamage: {
          connect: []
        },
        discDamage: {
          connect: []
        },
        interiorDamage: {
          connect: []
        },
        exteriorPhoto: {
          connect: []
        },
        interiorPhoto: {
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
        expertOpinion: {
          connect: []
        },
      }, 
      include: {
        sellerDetails: true,
        carData: {
          include: {
            vinBodyNumber: true,
            frameNumber: true,
            stateNumber: true,
            tCP: true,
            sTS: true,
            engineNumber: true,
            additionalDocuments: true,
          }
        },
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
        paintworkInspection:{
          include: {
            addElementPaintwork: true,
          }
        },
        engineCompartmentDamage: {
          include: {
            addElement: true,
          }
        },
        frontSideDamage: {
          include: {
            addElementFront: true
          }
        },
        leftSideDamage: {
          include: {
            addElementLeft: true
          }
        },
        backSideDamage: {
          include: {
            addElementBack: true
          }
        },
        trunkDamage: {
          include: {
            addElementTrunk: true
          }
        },
        rightSideDamage: {
          include: {
            addElementRight: true
          }
        },
        roofDamage: {
          include: {
            addElementRoof: true
          }
        },
        glassDamage: {
          include: {
            addElementGlass: true
          }
        },
        discDamage: {
          include: {
            addElementDisc: true
          }
        },
        interiorDamage: {
          include: {
            addElementInterior: true
          }
        },
        exteriorPhoto: true,
        interiorPhoto: true,
        roundViewVideo: true,
        stoppedEngine: {
          include: {
            addElementStop: true
          }
        },
        runningEngine: {
          include: {
            addElementElectrical: true,
            addElementMechanical: true
          }
        },
        dashboard: {
          include: {
            addElementDash: true
          }
        },
        testDrive: {
          include: {
            addElementTest: true
          }
        },
        expertOpinion: true,
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
        carData: {
          include: {
            vinBodyNumber: true,
            frameNumber: true,
            stateNumber: true,
            tCP: true,
            sTS: true,
            engineNumber: true,
            additionalDocuments: true,
          }
        },
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
        paintworkInspection:{
          include: {
            addElementPaintwork: true,
          }
        },
        engineCompartmentDamage: {
          include: {
            addElement: true,
          }
        },
        frontSideDamage: {
          include: {
            addElementFront: true
          }
        },
        leftSideDamage: {
          include: {
            addElementLeft: true
          }
        },
        backSideDamage: {
          include: {
            addElementBack: true
          }
        },
        trunkDamage: {
          include: {
            addElementTrunk: true
          }
        },
        rightSideDamage: {
          include: {
            addElementRight: true
          }
        },
        roofDamage: {
          include: {
            addElementRoof: true
          }
        },
        glassDamage: {
          include: {
            addElementGlass: true
          }
        },
        discDamage: {
          include: {
            addElementDisc: true
          }
        },
        interiorDamage: {
          include: {
            addElementInterior: true
          }
        },
        exteriorPhoto: true,
        interiorPhoto: true,
        roundViewVideo: true,
        stoppedEngine: {
          include: {
            addElementStop: true
          }
        },
        runningEngine: {
          include: {
            addElementElectrical: true,
            addElementMechanical: true
          }
        },
        dashboard: {
          include: {
            addElementDash: true
          }
        },
        testDrive: {
          include: {
            addElementTest: true
          }
        },
        expertOpinion: true,
      }
    });
  }

  public find(): Promise<Report[]> {
    return this.prisma.report.findMany({
      include: {
        sellerDetails: true,
        carData: {
          include: {
            vinBodyNumber: true,
            frameNumber: true,
            stateNumber: true,
            tCP: true,
            sTS: true,
            engineNumber: true,
            additionalDocuments: true,
          }
        },
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
        paintworkInspection:{
          include: {
            addElementPaintwork: true,
          }
        },
        engineCompartmentDamage: {
          include: {
            addElement: true,
          }
        },
        frontSideDamage: {
          include: {
            addElementFront: true
          }
        },
        leftSideDamage: {
          include: {
            addElementLeft: true
          }
        },
        backSideDamage: {
          include: {
            addElementBack: true
          }
        },
        trunkDamage: {
          include: {
            addElementTrunk: true
          }
        },
        rightSideDamage: {
          include: {
            addElementRight: true
          }
        },
        roofDamage: {
          include: {
            addElementRoof: true
          }
        },
        glassDamage: {
          include: {
            addElementGlass: true
          }
        },
        discDamage: {
          include: {
            addElementDisc: true
          }
        },
        interiorDamage: {
          include: {
            addElementInterior: true
          }
        },
        exteriorPhoto: true,
        interiorPhoto: true,
        roundViewVideo: true,
        stoppedEngine: {
          include: {
            addElementStop: true
          }
        },
        runningEngine: {
          include: {
            addElementElectrical: true,
            addElementMechanical: true
          }
        },
        dashboard: {
          include: {
            addElementDash: true
          }
        },
        testDrive: {
          include: {
            addElementTest: true
          }
        },
        expertOpinion: true,
      }
    });
  }

  public update(_id: number, _item: BetcarReportEntity): Promise<Report> {
    return Promise.resolve(undefined);
  }
}
