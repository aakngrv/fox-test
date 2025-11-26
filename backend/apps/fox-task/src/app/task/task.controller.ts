import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { fillObject } from '@backend/util/util-core';
import { TaskRdo } from './rdo/task.rdo'; 
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Задачи')
@Controller('tasks')
export class TaskController {
  constructor(
    private readonly taskService: TaskService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Задача успешно создана.'
  })
  @Post('/')
  async create(@Body() dto: CreateTaskDto) {
    const newTask = await this.taskService.createTask(dto);
    return fillObject(TaskRdo, newTask);
  }
  
  @ApiResponse({
    type: TaskRdo,
    status: HttpStatus.OK,
    description: 'Задача найдена'
  })
  @Get('/:id')
  async show(@Param('id') id: number) {
    const existTask = await this.taskService.getTask(id);
    return fillObject(TaskRdo, existTask);
  }

  @ApiResponse({
    type: TaskRdo,
    status: HttpStatus.OK,
    description: 'Задачи найдены'
  })
  @Get('/')
  async index() {
    const tasks = await this.taskService.getTasks();
    return fillObject(TaskRdo, tasks);
  }
  
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Задача удалена.'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: number) {
    await this.taskService.deleteTask(id);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Задача успешно обновлена.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: number, @Body() dto: UpdateTaskDto) {
    const updatedTask = await this.taskService.updateTask(id, dto)
    return fillObject(TaskRdo, updatedTask)
  }
}
