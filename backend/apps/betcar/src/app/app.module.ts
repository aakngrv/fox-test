import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SellerDetailsModule } from './betcar-documents/seller-details/seller-details.module';
import { BetcarReportModule } from './betcar-report/betcar-report.module';
import { CarDataModule } from './betcar-documents/car-data/car-data.module';


@Module({
  imports: [
    PrismaModule,
    BetcarReportModule,
    SellerDetailsModule,
    CarDataModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
