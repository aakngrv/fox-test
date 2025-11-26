import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from '@backend/shared/shared-types';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskEntity } from './task.entity';


@Injectable()
export class TaskService {
  constructor(
    private readonly taskRepository: TaskRepository,
  ) {}

  async createTask(dto: CreateTaskDto): Promise<Task> {

    const taskEntity = new TaskEntity({ 
      ...dto, 
    });
    
    return this.taskRepository.create(taskEntity);
  }

  async deleteTask(id: number): Promise<void> {
    await this.taskRepository.destroy(id);
  }

  async getTask(id: number): Promise<Task> {
    return this.taskRepository.findById(id);
  }

  async getTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async updateTask(id: number, dto: UpdateTaskDto): Promise<Task> {
    const taskEntity = new TaskEntity({ 
      ...dto, 
    });
    
    return this.taskRepository.update(id, taskEntity);
  }
}

