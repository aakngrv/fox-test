import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
   
  @ApiProperty({
    description: 'Название задачи',
    example: ''
  })
  public title: string;

  @ApiProperty({
    description: 'Роль пользователя',
    example: false
  })
  public author: boolean;

  @ApiProperty({
    description: 'Роль пользователя',
    example: false
  })
  public executor: boolean;

  @ApiProperty({
    description: 'Описание задачи',
    example: ''
  })
  public description: string;


  @ApiProperty({
    description: 'Email пользователя',
    example: ''
  })
  public userEmail: string;


  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  public  createdAt: Date;
}