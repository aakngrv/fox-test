import { CreateAddElementRightDto } from './dto/create-add-element-right.dto';
import { AddElementRight } from '@backend/shared/shared-types';
import { AddElementRightRepository } from './add-element-right.repository';
import { Injectable } from '@nestjs/common';
import { AddElementRightEntity } from './add-element-right.entity';
import { UpdateAddElementRightDto } from './dto/update-add-element-right.dto';

@Injectable()
export class AddElementRightService {

  constructor(
    private readonly addElementRightRepository: AddElementRightRepository
  ) {}

  async createAddElementRight(dto: CreateAddElementRightDto): Promise<AddElementRight> {
    const addElementRightEntity = new AddElementRightEntity(dto);
    return this.addElementRightRepository.create(addElementRightEntity);
  }

  async deleteAddElementRight(id: number): Promise<void> {
    await this.addElementRightRepository.destroy(id);
  }

  async getAddElementRight(id: number): Promise<AddElementRight> {
    return this.addElementRightRepository.findById(id);
  }

  async updateAddElementRight(id: number, dto: UpdateAddElementRightDto): Promise<AddElementRight> {
    return this.addElementRightRepository.update(id, new AddElementRightEntity(dto));
  }
}
