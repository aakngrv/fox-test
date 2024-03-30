import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ComplectationSafetyRdo {
  
  @ApiProperty({
    description: 'ID безопасности автомобиля',
    example: '1'
  })
  @Expose()
  public complectationSafetyId: number;

  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  @Expose()
  public reportId: number;
  
  @ApiProperty({
    description: 'ЭРА-ГЛОНАСС',
    example: false
  })
  @Expose()
  public eraGlonass: boolean;

  @ApiProperty({
    description: 'Блокировка замков',
    example: false
  })
  @Expose()
  public locking: boolean;

  @ApiProperty({
    description: 'Бронированный кузов',
    example: false
  })
  @Expose()
  public armoredBody: boolean;

  @ApiProperty({
    description: 'Подушки безопасности',
    example: ["string"]
  })
  @Expose()
  public airbags: string[];

  @ApiProperty({
    description: 'Система крепления isofix',
    example: ["string"]
  })
  @Expose()
  public isofix: string[];

  @ApiProperty({
    description: 'Вспомогательные системы',
    example: ["string"]
  })
  @Expose()
  public auxiliarySystems: string[];
}