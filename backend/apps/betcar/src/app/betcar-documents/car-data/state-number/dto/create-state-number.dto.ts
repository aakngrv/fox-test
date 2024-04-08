import { ApiProperty } from '@nestjs/swagger';

export class CreateStateNumberDto {

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
    description: 'Иностранный',
    example: false
  })
  public foreign: boolean;

  @ApiProperty({
    description: 'Гос номер',
    example: "string"
  })
  public stateNumber: string;
}