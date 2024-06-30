import { DashboardController} from "./dashboard.controller";
import { DashboardService} from "./dashboard.service";
import { DashboardRepository} from "./dashboard.repository";
import { Module } from '@nestjs/common';
import { AddElementDashModule } from "./add-element-dash/add-element-dash.module";

@Module({
  imports: [
    AddElementDashModule
  ],
  controllers: [DashboardController],
  providers: [DashboardService, DashboardRepository],
  exports: [DashboardRepository]
})
export class DashboardModule {}
