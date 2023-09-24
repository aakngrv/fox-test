import { Module } from '@nestjs/common';
import { BetcarReportController } from './betcar-report.controller';
import { BetcarReportService } from './betcar-report.service';
import { BetcarReportRepository } from './betcar-report.repository';
import { SellerDetailsModule } from '../betcar-documents/seller-details/seller-details.module';
import { CarDataModule } from '../betcar-documents/car-data/car-data.module';
import { AdditionalDocumentsModule } from '../betcar-documents/additional-documents/additional-documents.module';

@Module({
  imports: [
    SellerDetailsModule, 
    CarDataModule,
    AdditionalDocumentsModule,
  ],
  controllers: [BetcarReportController],
  providers: [
    BetcarReportService, 
    BetcarReportRepository
  ],
  exports: []
})
export class BetcarReportModule {}