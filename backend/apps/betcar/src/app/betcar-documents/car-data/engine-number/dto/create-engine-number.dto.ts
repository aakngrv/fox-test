import { ApiProperty } from '@nestjs/swagger';

export class CreateEngineNumberDto {

  @ApiProperty({
    description: 'ID данных автомобиля',
    example: 1
  })
  public carDataId: number;

  @ApiProperty({
    description: 'Подтвержден экспертом',
    example: false
  })
  public expertConfirm: boolean;

  @ApiProperty({
    description: 'Состояние номера',
    example: ["string"]
  })
  public numberState: string[];

  @ApiProperty({
    description: 'Фото номера рамы',
    example: ["string"]
  })
  public photo: string[];
}