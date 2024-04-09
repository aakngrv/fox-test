import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CarBodyRdo {
  
  @ApiProperty({
    description: 'ID кузова автомобиля',
    example: 1
  })
  @Expose()
  public complectationBodyId: number;
  
  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  @Expose()
  public reportId: number;
  
  @ApiProperty({
    description: 'Рейлинги на крыше',
    example: false
  })
  @Expose()
  public roofRails: boolean;

  @ApiProperty({
    description: 'Наклейки на кузове',
    example: false
  })
  @Expose()
  public bodyStickers: boolean;

  @ApiProperty({
    description: 'Аэрография',
    example: false
  })
  @Expose()
  public airbrushing: boolean;

  @ApiProperty({
    description: 'Тюнинг кузова',
    example: false
  })
  @Expose()
  public bodyTuning: boolean;

  @ApiProperty({
    description: 'Оклеен пленкой',
    example: false
  })
  @Expose()
  public bodyInFilm: boolean;
}