import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SellerDetailsModule } from './betcar-documents/seller-details/seller-details.module';

@Module({
  imports: [PrismaModule, SellerDetailsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
