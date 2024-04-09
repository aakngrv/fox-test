import { ServiceInspectionEntity} from "./service-inspection.entity";
import { ServiceInspection } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ServiceInspectionRepository implements CRUDRepository<ServiceInspectionEntity, number, ServiceInspection> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: ServiceInspectionEntity): Promise<ServiceInspection> {
    return this.prisma.serviceInspection.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(serviceInspectionId: number): Promise<void> {
    await this.prisma.serviceInspection.delete({
      where: {
        serviceInspectionId,
      }
    });
  }

  public findById(serviceInspectionId: number): Promise<ServiceInspection | null> {
    return this.prisma.serviceInspection.findFirst({
      where: {
        serviceInspectionId
      }
    });
  }

  public find(ids: number[] = []): Promise<ServiceInspection[]> {
    return this.prisma.serviceInspection.findMany({
      where: {
        serviceInspectionId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(serviceInspectionId: number, item: ServiceInspectionEntity): Promise<ServiceInspection> {
    return this.prisma.serviceInspection.update({
      where: {
        serviceInspectionId
      },
      data: { ...item.toObject(), serviceInspectionId }
    });
  }
}