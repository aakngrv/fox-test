import { ApiProperty } from '@nestjs/swagger';

export class CreateTCPDto {

  @ApiProperty({
    description: 'ID данных автомобиля',
    example: 1
  })
  public carDataId: number;

  @ApiProperty({
    description: 'Отсутствует',
    example: false
  })
  public absent: boolean;

  @ApiProperty({
    description: 'Тип ПТС',
    example: 'string'
  })
  public tCPType: string;

  @ApiProperty({
    description: 'Фото',
    example: ["string"]
  })
  public photo: string[];

  @ApiProperty({
    description: 'Количество владельцев',
    example: "string"
  })
  public numberOfOwners: string;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public comment: string;
}