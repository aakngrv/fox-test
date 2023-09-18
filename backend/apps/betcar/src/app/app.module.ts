import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SellerDetailsModule } from './betcar-documents/seller-details/seller-details.module';
import { BetcarReportModule } from './betcar-report/betcar-report.module';

@Module({
  imports: [
    PrismaModule,
    SellerDetailsModule,
    BetcarReportModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
