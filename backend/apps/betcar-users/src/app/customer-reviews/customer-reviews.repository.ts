import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { CustomerReviewsEntity } from './customer-reviews.entity';
import { CustomerReviews } from '@backend/shared/shared-types';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class CustomerReviewsRepository implements CRUDRepository<CustomerReviewsEntity, number, CustomerReviews> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: CustomerReviewsEntity): Promise<CustomerReviews> {
    const entityData = item.toObject();
    return this.prisma.customerReviews.create({
      data: {
        ...entityData,
      }
    });
  }

  public async destroy(customerReviewsId: number): Promise<void> {
    await this.prisma.customerReviews.delete({
      where: {
        customerReviewsId,
      }
    });
  }

  public async findById(customerReviewsId: number): Promise<CustomerReviews | null> {
    return this.prisma.customerReviews.findFirst({
      where: {
        customerReviewsId
      }
    });
  }

  public find(): Promise<CustomerReviews[]> {
    return this.prisma.customerReviews.findMany({});
  }

  public update(customerReviewsId: number, item: CustomerReviewsEntity): Promise<CustomerReviews> {
    const entityData = item.toObject();
    return this.prisma.customerReviews.update({
      where: {
        customerReviewsId
      },
        data: {
          ...entityData,
        }
    });
  }
}