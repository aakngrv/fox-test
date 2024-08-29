import { CreateDashboardDto} from "./dto/create-dashboard.dto";
import { Dashboard } from '@backend/shared/shared-types';
import { DashboardRepository} from "./dashboard.repository";
import { Injectable } from '@nestjs/common';
import { DashboardEntity} from "./dashboard.entity";
import { UpdateDashboardDto} from "./dto/update-dashboard.dto";
import { AddElementDashRepository } from "./add-element-dash/add-element-dash.repository";

@Injectable()
export class DashboardService {

  constructor(
    private readonly dashboardRepository: DashboardRepository,
    private readonly addElementDashRepository: AddElementDashRepository
  ) {}

  async createDashboard(dto: CreateDashboardDto): Promise<Dashboard> {
    const addElementDash = await this.addElementDashRepository.find(dto.addElementDash);
    const dashboardEntity = new DashboardEntity({
      ...dto,
      addElementDash
    });
    return this.dashboardRepository.create(dashboardEntity);
  }

  async deleteDashboard(id: number): Promise<void> {
    await this.dashboardRepository.destroy(id);
  }

  async getDashboard(id: number): Promise<Dashboard> {
    return this.dashboardRepository.findById(id);
  }

  async updateDashboard(id: number, dto: UpdateDashboardDto): Promise<Dashboard> {
    const addElementDash = await this.addElementDashRepository.find(dto.addElementDash);
    return this.dashboardRepository.update(id, new DashboardEntity({
      ...dto,
      addElementDash
    }));
  }
}