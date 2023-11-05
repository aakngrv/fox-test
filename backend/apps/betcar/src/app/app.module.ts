import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SellerDetailsModule } from './betcar-documents/seller-details/seller-details.module';
import { BetcarReportModule } from './betcar-report/betcar-report.module';
import { CarDataModule } from './betcar-documents/car-data/car-data.module';
import { AdditionalDocumentsModule } from './betcar-documents/additional-documents/additional-documents.module';
import { TcpModule } from './betcar-documents/tcp/tcp.module';
import { StsModule } from './betcar-documents/sts/sts.module';
import { LocationModule } from './betcar-documents/location/location.module';


@Module({
  imports: [
    PrismaModule,
    BetcarReportModule,
    SellerDetailsModule,
    CarDataModule,
    AdditionalDocumentsModule,
    TcpModule,
    StsModule,
    LocationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
