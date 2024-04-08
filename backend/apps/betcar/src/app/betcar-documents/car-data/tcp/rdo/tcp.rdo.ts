import { ApiProperty } from '@nestjs/swagger';
import { Expose } from "class-transformer";

export class TCPRdo {

  @ApiProperty({
    description: 'ID ПТС',
    example: 1
  })
  @Expose()
  public tCPId: number;

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
    description: 'Тип ПТС',
    example: 'string'
  })
  @Expose()
  public tCPType: string;

  @ApiProperty({
    description: 'Фото',
    example: ["string"]
  })
  @Expose()
  public photo: string[];

  @ApiProperty({
    description: 'Комментрарий',
    example: 'string'
  })
  @Expose()
  public comment: string;
}