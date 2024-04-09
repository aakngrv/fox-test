import { CreateAddElementGlassDto } from './dto/create-add-element-glass.dto';
import { AddElementGlass } from '@backend/shared/shared-types';
import { AddElementGlassRepository } from './add-element-glass.repository';
import { Injectable } from '@nestjs/common';
import { AddElementGlassEntity } from './add-element-glass.entity';
import { UpdateAddElementGlassDto } from './dto/update-add-element-glass.dto';

@Injectable()
export class AddElementGlassService {

  constructor(
    private readonly addElementGlassRepository: AddElementGlassRepository
  ) {}

  async createAddElementGlass(dto: CreateAddElementGlassDto): Promise<AddElementGlass> {
    const addElementGlassEntity = new AddElementGlassEntity(dto);
    return this.addElementGlassRepository.create(addElementGlassEntity);
  }

  async deleteAddElementGlass(id: number): Promise<void> {
    await this.addElementGlassRepository.destroy(id);
  }

  async getAddElementGlass(id: number): Promise<AddElementGlass> {
    return this.addElementGlassRepository.findById(id);
  }

  async updateAddElementGlass(id: number, dto: UpdateAddElementGlassDto): Promise<AddElementGlass> {
    return this.addElementGlassRepository.update(id, new AddElementGlassEntity(dto));
  }
}
