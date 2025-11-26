import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
   
  @ApiProperty({
    description: 'Название задачи',
    example: ''
  })
  public title: string;

  @ApiProperty({
    description: 'Роль пользователя',
    example: ''
  })
  public author: string;

  @ApiProperty({
    description: 'Роль пользователя',
    example: ''
  })
  public executor: string;

  @ApiProperty({
    description: 'Описание задачи',
    example: ''
  })
  public description: string;
  

  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  public  createdAt: Date;
}