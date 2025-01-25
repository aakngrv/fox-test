import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { OrgBidEntity } from './org-bids.entity';
import { OrganizationBid } from '@backend/shared/shared-types';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class OrgBidRepository implements CRUDRepository<OrgBidEntity, number, OrganizationBid> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: OrgBidEntity): Promise<OrganizationBid> {
    const entityData = item.toObject();
    return this.prisma.organizatonBid.create({
      data: {
        ...entityData,
      }
    });
  }

  public async destroy(bidId: number): Promise<void> {
    await this.prisma.organizatonBid.delete({
      where: {
        bidId,
      }
    });
  }

  public async findById(bidId: number): Promise<OrganizationBid | null> {
    return this.prisma.organizatonBid.findFirst({
      where: {
        bidId
      }
    });
  }
  
  public async findByEmail(userEmail: string): Promise<OrganizationBid[] | null> {
    return this.prisma.organizatonBid.findMany({
      where: {
        email: userEmail
      },
    });
  }

  public find(): Promise<OrganizationBid[]> {
    return this.prisma.organizatonBid.findMany({});
  }

  public update(bidId: number, item: OrgBidEntity): Promise<OrganizationBid> {
    const entityData = item.toObject();
    return this.prisma.organizatonBid.update({
      where: {
        bidId
      },
        data: {
          ...entityData,
        }
    });
  }
}