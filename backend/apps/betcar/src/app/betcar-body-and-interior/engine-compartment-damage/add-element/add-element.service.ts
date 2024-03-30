import { CreateAddElementDto } from './dto/create-add-element.dto';
import { AddElement } from '@backend/shared/shared-types';
import { AddElementRepository } from './add-element.repository';
import { Injectable } from '@nestjs/common';
import { AddElementEntity } from './add-element.entity';
import { UpdateAddElementDto } from './dto/update-add-element';

@Injectable()
export class AddElementService {

  constructor(
    private readonly addElementRepository: AddElementRepository
  ) {}

  async createAddElement(dto: CreateAddElementDto): Promise<AddElement> {
    const addElementEntity = new AddElementEntity(dto);
    return this.addElementRepository.create(addElementEntity);
  }

  async deleteAddElement(id: number): Promise<void> {
    await this.addElementRepository.destroy(id);
  }

  async getAddElement(id: number): Promise<AddElement> {
    return this.addElementRepository.findById(id);
  }

  async updateAddElement(id: number, dto: UpdateAddElementDto): Promise<AddElement> {
    return this.addElementRepository.update(id, new AddElementEntity(dto));
  }
}