import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { BetcarReportModule } from './betcar-report/betcar-report.module';


@Module({
  imports: [
    PrismaModule,
    BetcarReportModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
