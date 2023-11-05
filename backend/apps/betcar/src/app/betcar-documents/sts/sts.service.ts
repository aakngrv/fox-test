import { CreateStsDto } from './dto/create-sts.dto';
import { STS } from '@backend/shared/shared-types';
import { StsRepository } from './sts.repository';
import { Injectable } from '@nestjs/common';
import { StsEntity } from './sts.entity';
import { UpdateStsDto } from './dto/update-sts.dto';

@Injectable()
export class StsService {

  constructor(
    private readonly stsRepository: StsRepository
  ) {}

  async createSts(dto: CreateStsDto): Promise<STS> {
    const stsEntity = new StsEntity(dto);
    return this.stsRepository.create(stsEntity);
  }

  async deleteSts(id: number): Promise<void> {
    await this.stsRepository.destroy(id);
  }

  async getSts(id: number): Promise<STS> {
    return this.stsRepository.findById(id);
  }

  async updateSts(id: number, dto: UpdateStsDto): Promise<STS> {
    return this.stsRepository.update(id, new StsEntity(dto));
  }
}