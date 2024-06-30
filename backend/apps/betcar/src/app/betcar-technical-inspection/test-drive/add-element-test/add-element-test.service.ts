import { CreateAddElementTestDto } from './dto/create-add-element-test.dto';
import { AddElementTest } from '@backend/shared/shared-types';
import { AddElementTestRepository } from './add-element-test.repository';
import { Injectable } from '@nestjs/common';
import { AddElementTestEntity } from './add-element-test.entity';
import { UpdateAddElementTestDto } from './dto/update-add-element-test.dto';

@Injectable()
export class AddElementTestService {

  constructor(
    private readonly addElementTestRepository: AddElementTestRepository
  ) {}

  async createAddElementTest(dto: CreateAddElementTestDto): Promise<AddElementTest> {
    const addElementTestEntity = new AddElementTestEntity(dto);
    return this.addElementTestRepository.create(addElementTestEntity);
  }

  async deleteAddElementTest(id: number): Promise<void> {
    await this.addElementTestRepository.destroy(id);
  }

  async getAddElementTest(id: number): Promise<AddElementTest> {
    return this.addElementTestRepository.findById(id);
  }

  async updateAddElementTest(id: number, dto: UpdateAddElementTestDto): Promise<AddElementTest> {
    return this.addElementTestRepository.update(id, new AddElementTestEntity(dto));
  }
}
