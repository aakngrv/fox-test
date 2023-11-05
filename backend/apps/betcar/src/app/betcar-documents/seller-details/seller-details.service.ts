import { CreateSellerDetailsDto } from './dto/create-seller-details.dto';
import { SellerDetails } from '@backend/shared/shared-types';
import { SellerDetailsRepository } from './seller-details.repository';
import { Injectable } from '@nestjs/common';
import { SellerDetailsEntity } from './seller-details.entity';
import { UpdateSellerDetailsDto } from './dto/update-seller-details.dto';

@Injectable()
export class SellerDetailsService {

  constructor(
    private readonly sellerDetailsRepository: SellerDetailsRepository
  ) {}

  async createSellerDetails(dto: CreateSellerDetailsDto): Promise<SellerDetails> {
    const sellerDetailsEntity = new SellerDetailsEntity(dto);
    return this.sellerDetailsRepository.create(sellerDetailsEntity);
  }

  async deleteSellerDetails(id: number): Promise<void> {
    await this.sellerDetailsRepository.destroy(id);
  }

  async getSellerDetails(id: number): Promise<SellerDetails> {
    return this.sellerDetailsRepository.findById(id);
  }

  async updateSellerDetails(id: number, dto: UpdateSellerDetailsDto): Promise<SellerDetails> {
    return this.sellerDetailsRepository.update(id, new SellerDetailsEntity(dto));
  }
}
