import { CreateComplectationMultimediaDto } from './dto/create-complectation-multimedia.dto';
import { ComplectationMultimedia } from '@backend/shared/shared-types';
import { ComplectationMultimediaRepository } from './complectation-multimedia.repository';
import { Injectable } from '@nestjs/common';
import { ComplectationMultimediaEntity } from './complectation-multimedia.entity';
import { UpdateComplectationMultimediaDto } from './dto/update-complectation-multimedia.dto';

@Injectable()
export class ComplectationMultimediaService {

  constructor(
    private readonly complectationMultimediaRepository: ComplectationMultimediaRepository
  ) {}

  async createComplectationMultimedia(dto: CreateComplectationMultimediaDto): Promise<ComplectationMultimedia> {
    const complectationMultimediaEntity = new ComplectationMultimediaEntity(dto);
    return this.complectationMultimediaRepository.create(complectationMultimediaEntity);
  }

  async deleteComplectationMultimedia(id: number): Promise<void> {
    await this.complectationMultimediaRepository.destroy(id);
  }

  async getComplectationMultimedia(id: number): Promise<ComplectationMultimedia> {
    return this.complectationMultimediaRepository.findById(id);
  }

  async updateComplectationMultimedia(id: number, dto: UpdateComplectationMultimediaDto): Promise<ComplectationMultimedia> {
    return this.complectationMultimediaRepository.update(id, new ComplectationMultimediaEntity(dto));
  }
}