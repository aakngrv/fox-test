import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { UserBidEntity } from './bids.entity';
import { UserBid } from '@backend/shared/shared-types';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class UserBidRepository implements CRUDRepository<UserBidEntity, number, UserBid> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: UserBidEntity): Promise<UserBid> {
    const entityData = item.toObject();
    return this.prisma.userBid.create({
      data: {
        ...entityData,
      }
    });
  }

  public async destroy(bidId: number): Promise<void> {
    await this.prisma.userBid.delete({
      where: {
        bidId,
      }
    });
  }

  public async findById(bidId: number): Promise<UserBid | null> {
    return this.prisma.userBid.findFirst({
      where: {
        bidId
      }
    });
  }
  
  public async findByEmail(userEmail: string): Promise<UserBid[] | null> {
    return this.prisma.userBid.findMany({
      where: {
        email: userEmail
      },
    });
  }

  public find(): Promise<UserBid[]> {
    return this.prisma.userBid.findMany({});
  }

  public update(bidId: number, item: UserBidEntity): Promise<UserBid> {
    const entityData = item.toObject();
    return this.prisma.userBid.update({
      where: {
        bidId
      },
        data: {
          ...entityData,
        }
    });
  }
}