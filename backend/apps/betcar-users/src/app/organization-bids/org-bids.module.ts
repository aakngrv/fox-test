import { Module } from '@nestjs/common';
import { OrgBidsController } from './org-bids.controller';
import { OrgBidService } from './org-bids.service';
import { OrgBidRepository } from './org-bids.repository';


@Module({
  imports: [
  ],
  controllers: [OrgBidsController],
  providers: [
    OrgBidService, 
    OrgBidRepository
  ],
  exports: []
})
export class OrgBidsModule {}