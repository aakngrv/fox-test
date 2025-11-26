import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TaskRdo {

  @ApiProperty({
    description: 'ID задачи',
    example: 0
  })
  @Expose()
  public taskId: number;

  @ApiProperty({
    description: 'Название задачи',
    example: ''
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Описание задачи',
    example: ''
  })
  @Expose()
  public description: string;

  @ApiProperty({
    description: 'Роль пользователя',
    example: ''
  })
  @Expose()
  public author: string;

  @ApiProperty({
    description: 'Роль пользователя',
    example: ''
  })
  @Expose()
  public executor: string;


  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  @Expose()
  public  createdAt: Date;
}



