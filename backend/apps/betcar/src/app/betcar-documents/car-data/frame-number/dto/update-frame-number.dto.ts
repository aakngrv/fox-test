import { ApiProperty } from '@nestjs/swagger';

export class UpdateFrameNumberDto {

  @ApiProperty({
    description: 'ID данных автомобиля',
    example: 1
  })
  public carDataId: number;

  @ApiProperty({
    description: 'Рамы номер',
    example: "string"
  })
  public frameNumber: string;

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