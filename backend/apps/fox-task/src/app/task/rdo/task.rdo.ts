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
    description: 'Роль пользователя',
    example: false
  })
  @Expose()
  public author: boolean;

  @ApiProperty({
    description: 'Роль пользователя',
    example: false
  })
  @Expose()
  public executor: boolean;

  @ApiProperty({
    description: 'Описание задачи',
    example: ''
  })
  @Expose()
  public description: string;


  @ApiProperty({
    description: 'Email пользователя',
    example: ''
  })
  @Expose()
  public userEmail: string;


  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  @Expose()
  public  createdAt: Date;
}



