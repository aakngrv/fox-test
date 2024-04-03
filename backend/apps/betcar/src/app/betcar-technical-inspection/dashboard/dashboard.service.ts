import { CreateDashboardDto} from "./dto/create-dashboard.dto";
import { Dashboard } from '@backend/shared/shared-types';
import { DashboardRepository} from "./dashboard.repository";
import { Injectable } from '@nestjs/common';
import { DashboardEntity} from "./dashboard.entity";
import { UpdateDashboardDto} from "./dto/update-dashboard.dto";

@Injectable()
export class DashboardService {

  constructor(
    private readonly dashboardRepository: DashboardRepository
  ) {}

  async createDashboard(dto: CreateDashboardDto): Promise<Dashboard> {
    const dashboardEntity = new DashboardEntity(dto);
    return this.dashboardRepository.create(dashboardEntity);
  }

  async deleteDashboard(id: number): Promise<void> {
    await this.dashboardRepository.destroy(id);
  }

  async getDashboard(id: number): Promise<Dashboard> {
    return this.dashboardRepository.findById(id);
  }

  async updateDashboard(id: number, dto: UpdateDashboardDto): Promise<Dashboard> {
    return this.dashboardRepository.update(id, new DashboardEntity(dto));
  }
}