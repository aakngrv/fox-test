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
  ],
  controllers: [BetcarReportController],
  providers: [
    BetcarReportService, 
    BetcarReportRepository
  ],
  exports: []
})
export class BetcarReportModule {}