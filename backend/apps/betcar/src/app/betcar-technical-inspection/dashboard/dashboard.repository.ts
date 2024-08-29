import { DashboardEntity} from "./dashboard.entity";
import { Dashboard } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DashboardRepository implements CRUDRepository<DashboardEntity, number, Dashboard> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: DashboardEntity): Promise<Dashboard> {
    return this.prisma.dashboard.create({
      data: { 
        ...item.toObject(),
        addElementDash: {
          connect: []
        },
      },
      include: {
        addElementDash: true,
      }
    });
  }

  public async destroy(dashboardId: number): Promise<void> {
    await this.prisma.dashboard.delete({
      where: {
        dashboardId,
      }
    });
  }

  public findById(dashboardId: number): Promise<Dashboard | null> {
    return this.prisma.dashboard.findFirst({
      where: {
        dashboardId
      },
      include: {
        addElementDash: true,
      }
    });
  }

  public find(ids: number[] = []): Promise<Dashboard[]> {
    return this.prisma.dashboard.findMany({
      where: {
        dashboardId: {
          in: ids.length > 0 ? ids : undefined
        }
      },
      include: {
        addElementDash: true,
      }
    });
  }

  public update(dashboardId: number, item: DashboardEntity): Promise<Dashboard> {
    return this.prisma.dashboard.update({
      where: {
        dashboardId
      },
      data: { 
        ...item.toObject(),
        dashboardId,
        addElementDash: {
          connect: []
        },
      },
      include: {
        addElementDash: true,
      }
    });
  }
}