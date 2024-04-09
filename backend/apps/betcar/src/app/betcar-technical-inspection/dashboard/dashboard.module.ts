import { DashboardController} from "./dashboard.controller";
import { DashboardService} from "./dashboard.service";
import { DashboardRepository} from "./dashboard.repository";
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [DashboardController],
  providers: [DashboardService, DashboardRepository],
  exports: [DashboardRepository]
})
export class DashboardModule {}
