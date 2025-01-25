import { Injectable } from '@nestjs/common';
import { UserBidRepository } from './bids.repository';
import { CreateUserBidDto } from './dto/create-bid.dto';
import { UserBid } from '@backend/shared/shared-types';
import { UserBidEntity } from './bids.entity';
import { BidEmailDto } from './dto/bid-email.dto';


@Injectable()
export class UserBidService {
  constructor(
    private readonly userBidRepository: UserBidRepository,
  ) {}

  async createBid(dto: CreateUserBidDto): Promise<UserBid> {

    const bidEntity = new UserBidEntity({ 
      ...dto, 
    });
    
    return this.userBidRepository.create(bidEntity);
  }

  async deleteBid(id: number): Promise<void> {
    await this.userBidRepository.destroy(id);
  }

  async getBid(id: number): Promise<UserBid> {
    return this.userBidRepository.findById(id);
  }

  async getBidByEmail(bidEmail: BidEmailDto): Promise<UserBid[]> {
    const { email } = bidEmail;
    return await this.userBidRepository.findByEmail(email);
  }

  async getBids(): Promise<UserBid[]> {
    return this.userBidRepository.find();
  }

  async updateBid(id: number, dto: CreateUserBidDto): Promise<UserBid> {
    const bidEntity = new UserBidEntity({ 
      ...dto, 
    });
    return this.userBidRepository.update(id, bidEntity);
  }
}