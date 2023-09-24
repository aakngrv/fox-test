import { CreateAdditionalDocumentsDto } from './dto/create-additional-documents.dto';
import { AdditionalDocuments } from '@backend/shared/shared-types';
import { AdditionalDocumentsRepository } from './additional-documents.repository';
import { Injectable } from '@nestjs/common';
import { AdditionalDocumentsEntity } from './additional-documents.entity';
import { UpdateAdditionalDocumentsDto } from './dto/update-additional-documents.dto';

@Injectable()
export class AdditionalDocumentsService {

  constructor(
    private readonly additionalDocumentsRepository: AdditionalDocumentsRepository
  ) {}

  async createAdditionalDocuments(dto: CreateAdditionalDocumentsDto): Promise<AdditionalDocuments> {
    const additionalDocumentsEntity = new AdditionalDocumentsEntity(dto);
    return this.additionalDocumentsRepository.create(additionalDocumentsEntity);
  }

  async deleteAdditionalDocuments(id: number): Promise<void> {
    await this.additionalDocumentsRepository.destroy(id);
  }

  async getAdditionalDocuments(id: number): Promise<AdditionalDocuments> {
    return this.additionalDocumentsRepository.findById(id);
  }

  async updateAdditionalDocuments(id: number, dto: UpdateAdditionalDocumentsDto): Promise<AdditionalDocuments> {
    return this.additionalDocumentsRepository.update(id, new AdditionalDocumentsEntity(dto));
  }
}