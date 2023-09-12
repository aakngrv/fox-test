import { CreateSellerDetailsDto } from './dto/create-seller-details.dto';
import { SellerDetails } from '@backend/shared/shared-types';
import { SellerDetailsRepository } from './seller-details.repository';
import { Injectable } from '@nestjs/common';
import { SellerDetailsEntity } from './seller-details.entity';
import { UpdateSellerDetailsDto } from './dto/update-seller-details.dto';

@Injectable()
export class SellerDetailsService {
  updateSellerDetails(sellerDetailsId: number, dto: UpdateSellerDetailsDto) {
      throw new Error('Method not implemented.');
  }
  constructor(
    private readonly sellerDetailsRepository: SellerDetailsRepository
  ) {}

  async createSellerDetails(dto: CreateSellerDetailsDto): Promise<SellerDetails> {
    const sellerDetailsEntity = new SellerDetailsEntity(dto);
    return this.sellerDetailsRepository.create(sellerDetailsEntity);
  }

  async deleteSellerDetails(id: number): Promise<void> {
    this.sellerDetailsRepository.destroy(id);
  }

  async getSellerDetails(id: number): Promise<SellerDetails> {
    return this.sellerDetailsRepository.findById(id);
  }

  async getSellersDetails(): Promise<SellerDetails[]> {
    return this.sellerDetailsRepository.find();
  }

  async updateCategory(id: number, dto: UpdateSellerDetailsDto): Promise<SellerDetails> {
    return this.sellerDetailsRepository.update(id, new SellerDetailsEntity(dto));
  }
}