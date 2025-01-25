import { Injectable } from '@nestjs/common';
import { OrgBidRepository } from './org-bids.repository';
import { CreateOrgBidDto } from './dto/create-org-bids.dto';
import { OrganizationBid } from '@backend/shared/shared-types';
import { OrgBidEntity } from './org-bids.entity';
import { OrgBidEmailDto } from './dto/org-bid-email.dto';


@Injectable()
export class OrgBidService {
  constructor(
    private readonly orgBidRepository: OrgBidRepository,
  ) {}

  async createBid(dto: CreateOrgBidDto): Promise<OrganizationBid> {

    const bidEntity = new OrgBidEntity({ 
      ...dto, 
    });
    
    return this.orgBidRepository.create(bidEntity);
  }

  async deleteBid(id: number): Promise<void> {
    await this.orgBidRepository.destroy(id);
  }

  async getBid(id: number): Promise<OrganizationBid> {
    return this.orgBidRepository.findById(id);
  }

  async getBidByEmail(bidEmail: OrgBidEmailDto): Promise<OrganizationBid[]> {
    const { email } = bidEmail;
    return await this.orgBidRepository.findByEmail(email);
  }

  async getBids(): Promise<OrganizationBid[]> {
    return this.orgBidRepository.find();
  }

  async updateBid(id: number, dto: CreateOrgBidDto): Promise<OrganizationBid> {
    const bidEntity = new OrgBidEntity({ 
      ...dto, 
    });
    return this.orgBidRepository.update(id, bidEntity);
  }
}