import { CreateAddElementDiscDto } from './dto/create-add-element-disc.dto';
import { AddElementDisc } from '@backend/shared/shared-types';
import { AddElementDiscRepository } from './add-element-disc.repository';
import { Injectable } from '@nestjs/common';
import { AddElementDiscEntity } from './add-element-disc.entity';
import { UpdateAddElementDiscDto } from './dto/update-add-element-disc.dto';

@Injectable()
export class AddElementDiscService {

  constructor(
    private readonly addElementDiscRepository: AddElementDiscRepository
  ) {}

  async createAddElementDisc(dto: CreateAddElementDiscDto): Promise<AddElementDisc> {
    const addElementDiscEntity = new AddElementDiscEntity(dto);
    return this.addElementDiscRepository.create(addElementDiscEntity);
  }

  async deleteAddElementDisc(id: number): Promise<void> {
    await this.addElementDiscRepository.destroy(id);
  }

  async getAddElementDisc(id: number): Promise<AddElementDisc> {
    return this.addElementDiscRepository.findById(id);
  }

  async updateAddElementDisc(id: number, dto: UpdateAddElementDiscDto): Promise<AddElementDisc> {
    return this.addElementDiscRepository.update(id, new AddElementDiscEntity(dto));
  }
}
