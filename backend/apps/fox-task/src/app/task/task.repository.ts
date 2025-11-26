import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { TaskEntity } from './task.entity';
import { Task } from '@backend/shared/shared-types';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class TaskRepository implements CRUDRepository<TaskEntity, number, Task> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: TaskEntity): Promise<Task> {
    const entityData = item.toObject();
    return this.prisma.task.create({
      data: {
        ...entityData,
      }
    });
  }

  public async destroy(taskId: number): Promise<void> {
    await this.prisma.task.delete({
      where: {
        taskId,
      }
    });
  }

  public async findById(taskId: number): Promise<Task | null> {
    return this.prisma.task.findFirst({
      where: {
        taskId
      }
    });
  }

  public find(): Promise<Task[]> {
    return this.prisma.task.findMany({});
  }


  public update(taskId: number, item: TaskEntity): Promise<Task> {
    const entityData = item.toObject();
    return this.prisma.task.update({
      where: {
        taskId
      },
        data: {
          ...entityData,
        }
    });
  }
}

