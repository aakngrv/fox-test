import { ApiProperty } from '@nestjs/swagger';
import { Expose } from "class-transformer";

export class EngineNumberRdo {

  @ApiProperty({
    description: 'ID номера двигателя',
    example: 1
  })
  @Expose()
  public engineNumberId: number;
  
  @ApiProperty({
    description: 'ID данных автомобиля',
    example: 1
  })
  @Expose()
  public carDataId: number;

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