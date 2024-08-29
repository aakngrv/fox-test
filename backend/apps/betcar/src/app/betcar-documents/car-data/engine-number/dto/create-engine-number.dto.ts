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
    example: [false]
  })
  public numberState: boolean[];

  @ApiProperty({
    description: 'Фото номера рамы',
    example: ["string"]
  })
  public photo: string[];

  @ApiProperty({
    description: 'Номер двигателя',
    example: "string"
  })
  public engineNumber: string;

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  public comment: string;
  
}