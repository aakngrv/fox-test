import { TestDriveEntity} from "./test-drive.entity";
import { TestDrive } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TestDriveRepository implements CRUDRepository<TestDriveEntity, number, TestDrive> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: TestDriveEntity): Promise<TestDrive> {
    return this.prisma.testDrive.create({
      data: { 
        ...item.toObject(),
        addElementTest: {
          connect: []
        },
      },
      include: {
        addElementTest: true,
      }
    });
  }

  public async destroy(testDriveId: number): Promise<void> {
    await this.prisma.testDrive.delete({
      where: {
        testDriveId,
      }
    });
  }

  public findById(testDriveId: number): Promise<TestDrive | null> {
    return this.prisma.testDrive.findFirst({
      where: {
        testDriveId
      },
      include: {
        addElementTest: true,
      }
    });
  }

  public find(ids: number[] = []): Promise<TestDrive[]> {
    return this.prisma.testDrive.findMany({
      where: {
        testDriveId: {
          in: ids.length > 0 ? ids : undefined
        }
      },
      include: {
        addElementTest: true,
      }
    });
  }

  public update(testDriveId: number, item: TestDriveEntity): Promise<TestDrive> {
    return this.prisma.testDrive.update({
      where: {
        testDriveId
      },
      data: { 
        ...item.toObject(),
        testDriveId,
        addElementTest: {
          connect: []
        },
      },
      include: {
        addElementTest: true,
      }
    });
  }
}