import { Module } from '@nestjs/common';
import { BetcarReportController } from './betcar-report.controller';
import { BetcarReportService } from './betcar-report.service';
import { BetcarReportRepository } from './betcar-report.repository';
import { SellerDetailsModule } from '../betcar-documents/seller-details/seller-details.module';
import { CarDataModule } from '../betcar-documents/car-data/car-data.module';
import { AdditionalDocumentsModule } from '../betcar-documents/additional-documents/additional-documents.module';
import { TcpModule } from '../betcar-documents/tcp/tcp.module';
import { StsModule } from '../betcar-documents/sts/sts.module';
import { LocationModule } from '../betcar-documents/location/location.module';
import { CarBodyModule } from '../betcar-equipment/car-body/car-body.module';
import { ComplectationWheelsModule } from '../betcar-equipment/complectation-wheels/complectation-wheels.module';
import { ComplectationSalonModule } from '../betcar-equipment/complectation-salon/complectation-salon.module';
import { ComplectationHeadlightsModule } from '../betcar-equipment/complectation-headlights/complectation-headlights.module';
import { ComplectationMultimediaModule } from '../betcar-equipment/complectation-multimedia/complectation-multimedia.module';
import { ComplectationComfortModule } from '../betcar-equipment/complectation-comfort/complectation-comfort.module';
import { ComplectationSafetyModule } from '../betcar-equipment/complectation-safety/complectation-safety.module';
import { ComplectationProtectionModule } from '../betcar-equipment/complectation-protection/complectation-protection.module';
import { ComplectationOtherModule } from '../betcar-equipment/complectation-other/complectation-other.module';
import { PaintworkInspectionModule } from '../betcar-body-and-interior/paintwork-inspection/paintwork-inspection.module';
import { EngineCompartmentDamageModule } from '../betcar-body-and-interior/engine-compartment-damage/engine-compartment-damage.module';
import { FrontSideDamageModule } from '../betcar-body-and-interior/front-side-damage/front-side-damage.module';
import { LeftSideDamageModule } from '../betcar-body-and-interior/left-side-damage/left-side-damage.module';
import { BackSideDamageModule } from '../betcar-body-and-interior/back-side-damage/back-side-damage.module';
import { TrunkDamageModule } from '../betcar-body-and-interior/trunk-damage/trunk-damage.module';
import { RightSideDamageModule } from '../betcar-body-and-interior/right-side-damage/right-side-damage.module';
import { RoofDamageModule } from '../betcar-body-and-interior/roof-damage/roof-damage.module';
import { GlassDamageModule } from '../betcar-body-and-interior/glass-damage/glass-damage.module';
import { DiscDamageModule } from '../betcar-body-and-interior/disc-damage/disc-damage.module';
import { InteriorDamageModule } from '../betcar-body-and-interior/interior-damage/interior-damage.module';

@Module({
  imports: [
    SellerDetailsModule, 
    CarDataModule,
    AdditionalDocumentsModule,
    TcpModule,
    StsModule,
    LocationModule,
    CarBodyModule,
    ComplectationWheelsModule,
    ComplectationSalonModule,
    ComplectationHeadlightsModule,
    ComplectationMultimediaModule,
    ComplectationComfortModule,
    ComplectationSafetyModule,
    ComplectationProtectionModule,
    ComplectationOtherModule,
    PaintworkInspectionModule,
    EngineCompartmentDamageModule,
    FrontSideDamageModule,
    LeftSideDamageModule,
    BackSideDamageModule,
    TrunkDamageModule,
    RightSideDamageModule,
    RoofDamageModule,
    GlassDamageModule,
    DiscDamageModule,
    InteriorDamageModule,
  ],
  controllers: [BetcarReportController],
  providers: [
    BetcarReportService, 
    BetcarReportRepository
  ],
  exports: []
})
export class BetcarReportModule {}
