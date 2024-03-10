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
  ],
  controllers: [BetcarReportController],
  providers: [
    BetcarReportService, 
    BetcarReportRepository
  ],
  exports: []
})
export class BetcarReportModule {}