import { CreateAddElementPaintworkDto } from './dto/create-add-element-paintwork.dto';
import { AddElementPaintwork } from '@backend/shared/shared-types';
import { AddElementPaintworkRepository } from './add-element-paintwork.repository';
import { Injectable } from '@nestjs/common';
import { AddElementPaintworkEntity } from './add-element-paintwork.entity';
import { UpdateAddElementPaintworkDto } from './dto/update-add-element-paintwork.dto';

@Injectable()
export class AddElementPaintworkService {

  constructor(
    private readonly addElementPaintworkRepository: AddElementPaintworkRepository
  ) {}

  async createAddElementPaintwork(dto: CreateAddElementPaintworkDto): Promise<AddElementPaintwork> {
    const addElementPaintworkEntity = new AddElementPaintworkEntity(dto);
    return this.addElementPaintworkRepository.create(addElementPaintworkEntity);
  }

  async deleteAddElementPaintwork(id: number): Promise<void> {
    await this.addElementPaintworkRepository.destroy(id);
  }

  async getAddElementPaintwork(id: number): Promise<AddElementPaintwork> {
    return this.addElementPaintworkRepository.findById(id);
  }

  async updateAddElementPaintwork(id: number, dto: UpdateAddElementPaintworkDto): Promise<AddElementPaintwork> {
    return this.addElementPaintworkRepository.update(id, new AddElementPaintworkEntity(dto));
  }
}
