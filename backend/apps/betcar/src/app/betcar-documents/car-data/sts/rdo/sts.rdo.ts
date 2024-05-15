import { ApiProperty } from '@nestjs/swagger';
import { Expose } from "class-transformer";

export class STSRdo {

  @ApiProperty({
    description: 'ID CTC',
    example: 1
  })
  @Expose()
  public sTSId: number;

  @ApiProperty({
    description: 'ID данных автомобиля',
    example: 1
  })
  @Expose()
  public carDataId: number;

  @ApiProperty({
    description: 'Отсутствует',
    example: false
  })
  @Expose()
  public absent: boolean;

  @ApiProperty({
    description: 'Фото',
    example: "string"
  })
  @Expose()
  public photo: string;

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  @Expose()
  public comment: string;
}