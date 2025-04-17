import { Injectable } from '@nestjs/common';
import { CustomerReviewsRepository } from './customer-reviews.repository';
import { CreateCustomerReviewsDto } from './dto/create-customer-reviews.dto';
import { CustomerReviews } from '@backend/shared/shared-types';
import { CustomerReviewsEntity } from './customer-reviews.entity';


@Injectable()
export class CustomerReviewsService {
  constructor(
    private readonly customerReviewsRepository: CustomerReviewsRepository,
  ) {}

  async createReview(dto: CreateCustomerReviewsDto): Promise<CustomerReviews> {

    const reviewsEntity = new CustomerReviewsEntity({ 
      ...dto, 
    });
    
    return this.customerReviewsRepository.create(reviewsEntity);
  }

  async deleteReview(id: number): Promise<void> {
    await this.customerReviewsRepository.destroy(id);
  }

  async getReview(id: number): Promise<CustomerReviews> {
    return this.customerReviewsRepository.findById(id);
  }

  async getReviews(): Promise<CustomerReviews[]> {
    return this.customerReviewsRepository.find();
  }

  async updateReview(id: number, dto: CreateCustomerReviewsDto): Promise<CustomerReviews> {
    const reviewEntity = new CustomerReviewsEntity({ 
      ...dto, 
    });
    return this.customerReviewsRepository.update(id, reviewEntity);
  }
}