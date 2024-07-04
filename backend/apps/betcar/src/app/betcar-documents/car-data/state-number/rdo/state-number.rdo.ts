import { ApiProperty } from '@nestjs/swagger';
import { Expose } from "class-transformer";

export class StateNumberRdo {

  @ApiProperty({
    description: 'ID номера гос',
    example: 1
  })
  @Expose()
  public stateNumberId: number;
  
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
    description: 'Иностранный',
    example: false
  })
  @Expose()
  public foreign: boolean;

  @ApiProperty({
    description: 'Гос номер',
    example: "string"
  })
  @Expose()
  public stateNumber: string;

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  @Expose()
  public comment: string;
}