import { CreateAddElementElectricalDto } from './dto/create-add-element-electrical.dto';
import { AddElementElectrical } from '@backend/shared/shared-types';
import { AddElementElectricalRepository } from './add-element-electrical.repository';
import { Injectable } from '@nestjs/common';
import { AddElementElectricalEntity } from './add-element-electrical.entity';
import { UpdateAddElementElectricalDto } from './dto/update-add-element-electrical.dto';

@Injectable()
export class AddElementElectricalService {

  constructor(
    private readonly addElementElectricalRepository: AddElementElectricalRepository
  ) {}

  async createAddElementElectrical(dto: CreateAddElementElectricalDto): Promise<AddElementElectrical> {
    const addElementElectricalEntity = new AddElementElectricalEntity(dto);
    return this.addElementElectricalRepository.create(addElementElectricalEntity);
  }

  async deleteAddElementElectrical(id: number): Promise<void> {
    await this.addElementElectricalRepository.destroy(id);
  }

  async getAddElementElectrical(id: number): Promise<AddElementElectrical> {
    return this.addElementElectricalRepository.findById(id);
  }

  async updateAddElementElectrical(id: number, dto: UpdateAddElementElectricalDto): Promise<AddElementElectrical> {
    return this.addElementElectricalRepository.update(id, new AddElementElectricalEntity(dto));
  }
}
