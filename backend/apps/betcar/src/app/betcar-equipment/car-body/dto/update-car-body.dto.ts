import { ApiProperty } from '@nestjs/swagger';

export class UpdateCarBodyDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  public reportId: number;
  
  @ApiProperty({
    description: 'Рейлинги на крыше',
    example: false
  })
  public roofRails: boolean;

  @ApiProperty({
    description: 'Наклейки на кузове',
    example: false
  })
  public bodyStickers: boolean;

  @ApiProperty({
    description: 'Аэрография',
    example: false
  })
  public airbrushing: boolean;

  @ApiProperty({
    description: 'Тюнинг кузова',
    example: false
  })
  public bodyTuning: boolean;

  @ApiProperty({
    description: 'Оклеен пленкой',
    example: false
  })
  public bodyInFilm: boolean;
}