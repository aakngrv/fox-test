import { CreateAddElementDashDto } from './dto/create-add-element-dash.dto';
import { AddElementDash } from '@backend/shared/shared-types';
import { AddElementDashRepository } from './add-element-dash.repository';
import { Injectable } from '@nestjs/common';
import { AddElementDashEntity } from './add-element-dash.entity';
import { UpdateAddElementDashDto } from './dto/update-add-element-dash.dto';

@Injectable()
export class AddElementDashService {

  constructor(
    private readonly addElementDashRepository: AddElementDashRepository
  ) {}

  async createAddElementDash(dto: CreateAddElementDashDto): Promise<AddElementDash> {
    const addElementDashEntity = new AddElementDashEntity(dto);
    return this.addElementDashRepository.create(addElementDashEntity);
  }

  async deleteAddElementDash(id: number): Promise<void> {
    await this.addElementDashRepository.destroy(id);
  }

  async getAddElementDash(id: number): Promise<AddElementDash> {
    return this.addElementDashRepository.findById(id);
  }

  async updateAddElementDash(id: number, dto: UpdateAddElementDashDto): Promise<AddElementDash> {
    return this.addElementDashRepository.update(id, new AddElementDashEntity(dto));
  }
}
