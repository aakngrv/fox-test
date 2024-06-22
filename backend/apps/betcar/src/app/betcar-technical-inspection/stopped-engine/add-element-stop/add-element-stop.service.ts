import { CreateAddElementStopDto } from './dto/create-add-element-stop.dto';
import { AddElementStop } from '@backend/shared/shared-types';
import { AddElementStopRepository } from './add-element-stop.repository';
import { Injectable } from '@nestjs/common';
import { AddElementStopEntity } from './add-element-stop.entity';
import { UpdateAddElementStopDto } from './dto/update-add-element-stop.dto';

@Injectable()
export class AddElementStopService {

  constructor(
    private readonly addElementStopRepository: AddElementStopRepository
  ) {}

  async createAddElementStop(dto: CreateAddElementStopDto): Promise<AddElementStop> {
    const addElementStopEntity = new AddElementStopEntity(dto);
    return this.addElementStopRepository.create(addElementStopEntity);
  }

  async deleteAddElementStop(id: number): Promise<void> {
    await this.addElementStopRepository.destroy(id);
  }

  async getAddElementStop(id: number): Promise<AddElementStop> {
    return this.addElementStopRepository.findById(id);
  }

  async updateAddElementStop(id: number, dto: UpdateAddElementStopDto): Promise<AddElementStop> {
    return this.addElementStopRepository.update(id, new AddElementStopEntity(dto));
  }
}
