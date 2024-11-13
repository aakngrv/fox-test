import { Module } from '@nestjs/common';
import { BetcarReportController } from './betcar-report.controller';
import { BetcarReportService } from './betcar-report.service';
import { BetcarReportRepository } from './betcar-report.repository';
import { LeftSideDamageModule } from '../betcar-body-and-interior/left-side-damage/left-side-damage.module';
import { BackSideDamageModule } from '../betcar-body-and-interior/back-side-damage/back-side-damage.module';
import { TrunkDamageModule } from '../betcar-body-and-interior/trunk-damage/trunk-damage.module';
import { RightSideDamageModule } from '../betcar-body-and-interior/right-side-damage/right-side-damage.module';
import { RoofDamageModule } from '../betcar-body-and-interior/roof-damage/roof-damage.module';
import { GlassDamageModule } from '../betcar-body-and-interior/glass-damage/glass-damage.module';
import { DiscDamageModule } from '../betcar-body-and-interior/disc-damage/disc-damage.module';
import { InteriorDamageModule } from '../betcar-body-and-interior/interior-damage/interior-damage.module';
import { ExteriorPhotoModule } from "../betcar-body-and-interior/exterior-photo/exterior-photo.module";
import { InteriorPhotoModule } from "../betcar-body-and-interior/interior-photo/interior-photo.module";
import { RoundViewVideoModule } from "../betcar-body-and-interior/round-view-video/round-view-video.module";
import { StoppedEngineModule } from "../betcar-technical-inspection/stopped-engine/stopped-engine.module";
import { RunningEngineModule } from "../betcar-technical-inspection/running-engine/running-engine.module";
import { DashboardModule } from "../betcar-technical-inspection/dashboard/dashboard.module";
import { TestDriveModule } from "../betcar-technical-inspection/test-drive/test-drive.module";
import { ExpertOpinionModule } from "../betcar-expert-opinion/expert-opinion/expert-opinion.module";


@Module({
  imports: [
    LeftSideDamageModule,
    BackSideDamageModule,
    TrunkDamageModule,
    RightSideDamageModule,
    RoofDamageModule,
    GlassDamageModule,
    DiscDamageModule,
    InteriorDamageModule,
    ExteriorPhotoModule,
    InteriorPhotoModule,
    RoundViewVideoModule,
    StoppedEngineModule,
    RunningEngineModule,
    DashboardModule,
    TestDriveModule,
    ExpertOpinionModule,
  ],
  controllers: [BetcarReportController],
  providers: [
    BetcarReportService, 
    BetcarReportRepository
  ],
  exports: []
})
export class BetcarReportModule {}
