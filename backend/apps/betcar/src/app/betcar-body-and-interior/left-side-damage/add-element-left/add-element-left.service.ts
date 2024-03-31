import { CreateAddElementLeftDto } from './dto/create-add-element-left.dto';
import { AddElementLeft } from '@backend/shared/shared-types';
import { AddElementLeftRepository } from './add-element-left.repository';
import { Injectable } from '@nestjs/common';
import { AddElementLeftEntity } from './add-element-left.entity';
import { UpdateAddElementLeftDto } from './dto/update-add-element-left';

@Injectable()
export class AddElementLeftService {

  constructor(
    private readonly addElementLeftRepository: AddElementLeftRepository
  ) {}

  async createAddElementLeft(dto: CreateAddElementLeftDto): Promise<AddElementLeft> {
    const addElementLeftEntity = new AddElementLeftEntity(dto);
    return this.addElementLeftRepository.create(addElementLeftEntity);
  }

  async deleteAddElementLeft(id: number): Promise<void> {
    await this.addElementLeftRepository.destroy(id);
  }

  async getAddElementLeft(id: number): Promise<AddElementLeft> {
    return this.addElementLeftRepository.findById(id);
  }

  async updateAddElementLeft(id: number, dto: UpdateAddElementLeftDto): Promise<AddElementLeft> {
    return this.addElementLeftRepository.update(id, new AddElementLeftEntity(dto));
  }
}
