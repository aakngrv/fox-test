import { SellerDetailsController } from './seller-details.controller';
import { SellerDetailsService } from './seller-details.service';
import { SellerDetailsRepository } from './seller-details.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [SellerDetailsController],
  providers: [SellerDetailsService, SellerDetailsRepository],
  exports: [SellerDetailsRepository]
})
export class SellerDetailsModule {}