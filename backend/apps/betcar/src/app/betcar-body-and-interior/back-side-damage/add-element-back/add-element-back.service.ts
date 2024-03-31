import { CreateAddElementBackDto } from './dto/create-add-element-back.dto';
import { AddElementBack } from '@backend/shared/shared-types';
import { AddElementBackRepository } from './add-element-back.repository';
import { Injectable } from '@nestjs/common';
import { AddElementBackEntity } from './add-element-back.entity';
import { UpdateAddElementBackDto } from './dto/update-add-element-back.dto';

@Injectable()
export class AddElementBackService {

  constructor(
    private readonly addElementBackRepository: AddElementBackRepository
  ) {}

  async createAddElementBack(dto: CreateAddElementBackDto): Promise<AddElementBack> {
    const addElementBackEntity = new AddElementBackEntity(dto);
    return this.addElementBackRepository.create(addElementBackEntity);
  }

  async deleteAddElementBack(id: number): Promise<void> {
    await this.addElementBackRepository.destroy(id);
  }

  async getAddElementBack(id: number): Promise<AddElementBack> {
    return this.addElementBackRepository.findById(id);
  }

  async updateAddElementBack(id: number, dto: UpdateAddElementBackDto): Promise<AddElementBack> {
    return this.addElementBackRepository.update(id, new AddElementBackEntity(dto));
  }
}
