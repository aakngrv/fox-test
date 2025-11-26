import { Entity } from '@backend/util/util-types';
import { Task } from '@backend/shared/shared-types';



export class TaskEntity implements Entity<TaskEntity>, Task {

  public taskId?: number;
  public title?: string;
  public author?: string;
  public executor?: string;
  public createdAt?: Date;
  public description?: string;


  constructor(task: Task) {
    this.fillEntity(task);
  }

  public fillEntity(entity: Task): void {
    this.taskId = entity.taskId;
    this.title = entity.title;
    this.author = entity.author;
    this.executor = entity.executor;
    this.description = entity.description;
    this.createdAt = new Date();
  }

  public toObject(): TaskEntity {
    return { 
      ...this,
    };
  }
}