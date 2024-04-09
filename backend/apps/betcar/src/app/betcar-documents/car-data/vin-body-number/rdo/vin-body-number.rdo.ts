import { ApiProperty } from '@nestjs/swagger';
import { Expose } from "class-transformer";

export class VinBodyNumberRdo {

  @ApiProperty({
    description: 'ID VIN номера',
    example: 1
  })
  @Expose()
  public vinBodyNumberId: number;
  
  @ApiProperty({
    description: 'ID данных автомобиля',
    example: 1
  })
  @Expose()
  public carDataId: number;

  @ApiProperty({
    description: 'VIN номер',
    example: "string"
  })
  @Expose()
  public vinNumber: string;

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
    description: 'Фото VIN',
    example: ["string"]
  })
  @Expose()
  public photo: string[];
}