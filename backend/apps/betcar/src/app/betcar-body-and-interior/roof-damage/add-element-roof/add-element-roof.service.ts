import { CreateAddElementRoofDto } from './dto/create-add-element-roof.dto';
import { AddElementRoof } from '@backend/shared/shared-types';
import { AddElementRoofRepository } from './add-element-roof.repository';
import { Injectable } from '@nestjs/common';
import { AddElementRoofEntity } from './add-element-roof.entity';
import { UpdateAddElementRoofDto } from './dto/update-add-element-roof.dto';

@Injectable()
export class AddElementRoofService {

  constructor(
    private readonly addElementRoofRepository: AddElementRoofRepository
  ) {}

  async createAddElementRoof(dto: CreateAddElementRoofDto): Promise<AddElementRoof> {
    const addElementRoofEntity = new AddElementRoofEntity(dto);
    return this.addElementRoofRepository.create(addElementRoofEntity);
  }

  async deleteAddElementRoof(id: number): Promise<void> {
    await this.addElementRoofRepository.destroy(id);
  }

  async getAddElementRoof(id: number): Promise<AddElementRoof> {
    return this.addElementRoofRepository.findById(id);
  }

  async updateAddElementRoof(id: number, dto: UpdateAddElementRoofDto): Promise<AddElementRoof> {
    return this.addElementRoofRepository.update(id, new AddElementRoofEntity(dto));
  }
}
