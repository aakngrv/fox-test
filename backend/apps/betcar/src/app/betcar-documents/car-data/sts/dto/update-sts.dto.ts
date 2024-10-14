import { ApiProperty } from '@nestjs/swagger';

export class UpdateSTSDto {

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
    description: 'Фото',
    example: ["string"]
  })
  public photo: string[];

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  public comment: string;
}