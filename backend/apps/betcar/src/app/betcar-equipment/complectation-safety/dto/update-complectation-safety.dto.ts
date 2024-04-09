import { ApiProperty } from '@nestjs/swagger';

export class UpdateComplectationSafetyDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  public reportId: number;
  
  @ApiProperty({
    description: 'ЭРА-ГЛОНАСС',
    example: false
  })
  public eraGlonass: boolean;

  @ApiProperty({
    description: 'Блокировка замков',
    example: false
  })
  public locking: boolean;

  @ApiProperty({
    description: 'Бронированный кузов',
    example: false
  })
  public armoredBody: boolean;

  @ApiProperty({
    description: 'Подушки безопасности',
    example: ["string"]
  })
  public airbags: string[];

  @ApiProperty({
    description: 'Система крепления isofix',
    example: ["string"]
  })
  public isofix: string[];

  @ApiProperty({
    description: 'Вспомогательные системы',
    example: ["string"]
  })
  public auxiliarySystems: string[];
}