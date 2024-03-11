import { CreateComplectationProtectionDto } from './dto/create-complectation-protection.dto';
import { ComplectationProtection } from '@backend/shared/shared-types';
import { ComplectationProtectionRepository } from './complectation-protection.repository';
import { Injectable } from '@nestjs/common';
import { ComplectationProtectionEntity } from './complectation-protection.entity';
import { UpdateComplectationProtectionDto } from './dto/update-complectation-protection.dto';

@Injectable()
export class ComplectationProtectionService {

  constructor(
    private readonly complectationProtectionRepository: ComplectationProtectionRepository
  ) {}

  async createComplectationProtection(dto: CreateComplectationProtectionDto): Promise<ComplectationProtection> {
    const complectationProtectionEntity = new ComplectationProtectionEntity(dto);
    return this.complectationProtectionRepository.create(complectationProtectionEntity);
  }

  async deleteComplectationProtection(id: number): Promise<void> {
    await this.complectationProtectionRepository.destroy(id);
  }

  async getComplectationProtection(id: number): Promise<ComplectationProtection> {
    return this.complectationProtectionRepository.findById(id);
  }

  async updateComplectationProtection(id: number, dto: UpdateComplectationProtectionDto): Promise<ComplectationProtection> {
    return this.complectationProtectionRepository.update(id, new ComplectationProtectionEntity(dto));
  }
}