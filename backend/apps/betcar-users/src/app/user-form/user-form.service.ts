import { Injectable } from '@nestjs/common';
import { UserFormRepository } from './user-form.repository';
import { CreateUserFormDto } from './dto/create-user-form.dto';
import { UserForm } from '@backend/shared/shared-types';
import { UserFormEntity } from './user-form.entity';


@Injectable()
export class UserFormService {
  constructor(
    private readonly userFormRepository: UserFormRepository,
  ) {}

  async createForm(dto: CreateUserFormDto): Promise<UserForm> {

    const formEntity = new UserFormEntity({ 
      ...dto, 
    });
    
    return this.userFormRepository.create(formEntity);
  }

  async deleteForm(id: number): Promise<void> {
    await this.userFormRepository.destroy(id);
  }

  async getForm(id: number): Promise<UserForm> {
    return this.userFormRepository.findById(id);
  }

  async getForms(): Promise<UserForm[]> {
    return this.userFormRepository.find();
  }

  async updateForm(id: number, dto: CreateUserFormDto): Promise<UserForm> {
    const formEntity = new UserFormEntity({ 
      ...dto, 
    });
    return this.userFormRepository.update(id, formEntity);
  }
}