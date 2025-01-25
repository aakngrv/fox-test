import { Module } from '@nestjs/common';
import { UserBidsController } from './bids.controller';
import { UserBidService } from './bids.service';
import { UserBidRepository } from './bids.repository';


@Module({
  imports: [
  ],
  controllers: [UserBidsController],
  providers: [
    UserBidService, 
    UserBidRepository
  ],
  exports: []
})
export class UserBidsModule {}