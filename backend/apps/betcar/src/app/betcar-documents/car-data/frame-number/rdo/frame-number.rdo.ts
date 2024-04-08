import { ApiProperty } from '@nestjs/swagger';
import { Expose } from "class-transformer";

export class FrameNumberRdo {

  @ApiProperty({
    description: 'ID номера рамы',
    example: 1
  })
  @Expose()
  public frameNumberId: number;
  
  @ApiProperty({
    description: 'ID данных автомобиля',
    example: 1
  })
  @Expose()
  public carDataId: number;

  @ApiProperty({
    description: 'Рамы номер',
    example: "string"
  })
  @Expose()
  public frameNumber: string;

  @ApiProperty({
    description: 'Подтвержден экспертом',
    example: false
  })
  @Expose()
  public expertConfirm: boolean;

  @ApiProperty({
    description: 'Состояние номера',
    example: ["string"]
  })
  @Expose()
  public numberState: string[];

  @ApiProperty({
    description: 'Фото номера рамы',
    example: ["string"]
  })
  @Expose()
  public photo: string[];
}