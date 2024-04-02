import { CreateAddElementInteriorDto } from './dto/create-add-element-interior.dto';
import { AddElementInterior } from '@backend/shared/shared-types';
import { AddElementInteriorRepository } from './add-element-interior.repository';
import { Injectable } from '@nestjs/common';
import { AddElementInteriorEntity } from './add-element-interior.entity';
import { UpdateAddElementInteriorDto } from './dto/update-add-element-interior.dto';

@Injectable()
export class AddElementInteriorService {

  constructor(
    private readonly addElementInteriorRepository: AddElementInteriorRepository
  ) {}

  async createAddElementInterior(dto: CreateAddElementInteriorDto): Promise<AddElementInterior> {
    const addElementInteriorEntity = new AddElementInteriorEntity(dto);
    return this.addElementInteriorRepository.create(addElementInteriorEntity);
  }

  async deleteAddElementInterior(id: number): Promise<void> {
    await this.addElementInteriorRepository.destroy(id);
  }

  async getAddElementInterior(id: number): Promise<AddElementInterior> {
    return this.addElementInteriorRepository.findById(id);
  }

  async updateAddElementInterior(id: number, dto: UpdateAddElementInteriorDto): Promise<AddElementInterior> {
    return this.addElementInteriorRepository.update(id, new AddElementInteriorEntity(dto));
  }
}
