import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {

  
  @ApiProperty({
    description: 'Название задачи',
    example: ''
  })
  public title: string;

  @ApiProperty({
    description: 'Описание задачи',
    example: ''
  })
  public description: string;

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
    description: 'Дата создания',
    example: ''
  })
  public  createdAt: Date;
}
