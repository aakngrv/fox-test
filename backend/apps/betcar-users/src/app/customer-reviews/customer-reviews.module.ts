import { Module } from '@nestjs/common';
import { CustomerReviewsController } from './customer-reviews.controller';
import { CustomerReviewsService } from './customer-reviews.service';
import { CustomerReviewsRepository } from './customer-reviews.repository';


@Module({
  imports: [
  ],
  controllers: [CustomerReviewsController],
  providers: [
    CustomerReviewsService, 
    CustomerReviewsRepository
  ],
  exports: []
})
export class CustomerReviewsModule {}