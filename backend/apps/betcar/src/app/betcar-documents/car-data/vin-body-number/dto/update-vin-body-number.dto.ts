import { ApiProperty } from '@nestjs/swagger';

export class UpdateVinBodyNumberDto {

  @ApiProperty({
    description: 'ID данных автомобиля',
    example: 1
  })
  public carDataId: number;

  @ApiProperty({
    description: 'VIN номер',
    example: "string"
  })
  public vinNumber: string;

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
    description: 'Фото VIN',
    example: ["string"]
  })
  public photo: string[];
}