import { CreateAddElementTrunkDto } from './dto/create-add-element-trunk.dto';
import { AddElementTrunk } from '@backend/shared/shared-types';
import { AddElementTrunkRepository } from './add-element-trunk.repository';
import { Injectable } from '@nestjs/common';
import { AddElementTrunkEntity } from './add-element-trunk.entity';
import { UpdateAddElementTrunkDto } from './dto/update-add-element-trunk.dto';

@Injectable()
export class AddElementTrunkService {

  constructor(
    private readonly addElementTrunkRepository: AddElementTrunkRepository
  ) {}

  async createAddElementTrunk(dto: CreateAddElementTrunkDto): Promise<AddElementTrunk> {
    const addElementTrunkEntity = new AddElementTrunkEntity(dto);
    return this.addElementTrunkRepository.create(addElementTrunkEntity);
  }

  async deleteAddElementTrunk(id: number): Promise<void> {
    await this.addElementTrunkRepository.destroy(id);
  }

  async getAddElementTrunk(id: number): Promise<AddElementTrunk> {
    return this.addElementTrunkRepository.findById(id);
  }

  async updateAddElementTrunk(id: number, dto: UpdateAddElementTrunkDto): Promise<AddElementTrunk> {
    return this.addElementTrunkRepository.update(id, new AddElementTrunkEntity(dto));
  }
}
