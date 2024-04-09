import { SellerDetailsEntity } from './seller-details.entity';
import { SellerDetails } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SellerDetailsRepository implements CRUDRepository<SellerDetailsEntity, number, SellerDetails> {
  
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: SellerDetailsEntity): Promise<SellerDetails> {
    return this.prisma.sellerDetails.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(sellerDetailsId: number): Promise<void> {
    await this.prisma.sellerDetails.delete({
      where: {
        sellerDetailsId,
      }
    });
  }

  public findById(sellerDetailsId: number): Promise<SellerDetails | null> {
    return this.prisma.sellerDetails.findFirst({
      where: {
        sellerDetailsId
      }
    });
  }

  public find(ids: number[] = []): Promise<SellerDetails[]> {
    return this.prisma.sellerDetails.findMany({
      where: {
        sellerDetailsId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(sellerDetailsId: number, item: SellerDetailsEntity): Promise<SellerDetails> {
    return this.prisma.sellerDetails.update({
      where: {
        sellerDetailsId
      },
      data: { ...item.toObject(), sellerDetailsId}
    });
  }
}