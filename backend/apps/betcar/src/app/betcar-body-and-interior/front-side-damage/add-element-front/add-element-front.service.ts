import { CreateAddElementFrontDto } from './dto/create-add-element-front.dto';
import { AddElementFront } from '@backend/shared/shared-types';
import { AddElementFrontRepository } from './add-element-front.repository';
import { Injectable } from '@nestjs/common';
import { AddElementFrontEntity } from './add-element-front.entity';
import { UpdateAddElementFrontDto } from './dto/update-add-element-front.dto';

@Injectable()
export class AddElementFrontService {

  constructor(
    private readonly addElementFrontRepository: AddElementFrontRepository
  ) {}

  async createAddElementFront(dto: CreateAddElementFrontDto): Promise<AddElementFront> {
    const addElementFrontEntity = new AddElementFrontEntity(dto);
    return this.addElementFrontRepository.create(addElementFrontEntity);
  }

  async deleteAddElementFront(id: number): Promise<void> {
    await this.addElementFrontRepository.destroy(id);
  }

  async getAddElementFront(id: number): Promise<AddElementFront> {
    return this.addElementFrontRepository.findById(id);
  }

  async updateAddElementFront(id: number, dto: UpdateAddElementFrontDto): Promise<AddElementFront> {
    return this.addElementFrontRepository.update(id, new AddElementFrontEntity(dto));
  }
}
