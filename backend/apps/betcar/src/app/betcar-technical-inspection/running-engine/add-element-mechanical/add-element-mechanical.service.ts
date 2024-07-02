import { CreateAddElementMechanicalDto } from './dto/create-add-element-mechanical.dto';
import { AddElementMechanical } from '@backend/shared/shared-types';
import { AddElementMechanicalRepository } from './add-element-mechanical.repository';
import { Injectable } from '@nestjs/common';
import { AddElementMechanicalEntity } from './add-element-mechanical.entity';
import { UpdateAddElementMechanicalDto } from './dto/update-add-element-mechanical.dto';

@Injectable()
export class AddElementMechanicalService {

  constructor(
    private readonly addElementMechanicalRepository: AddElementMechanicalRepository
  ) {}

  async createAddElementMechanical(dto: CreateAddElementMechanicalDto): Promise<AddElementMechanical> {
    const addElementMechanicalEntity = new AddElementMechanicalEntity(dto);
    return this.addElementMechanicalRepository.create(addElementMechanicalEntity);
  }

  async deleteAddElementMechanical(id: number): Promise<void> {
    await this.addElementMechanicalRepository.destroy(id);
  }

  async getAddElementMechanical(id: number): Promise<AddElementMechanical> {
    return this.addElementMechanicalRepository.findById(id);
  }

  async updateAddElementMechanical(id: number, dto: UpdateAddElementMechanicalDto): Promise<AddElementMechanical> {
    return this.addElementMechanicalRepository.update(id, new AddElementMechanicalEntity(dto));
  }
}
