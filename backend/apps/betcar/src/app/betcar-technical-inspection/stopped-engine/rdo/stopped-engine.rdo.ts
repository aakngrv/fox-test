import { ApiProperty } from '@nestjs/swagger';
import { Expose } from "class-transformer";

export class StoppedEngineRdo {

  @ApiProperty({
    description: 'ID видео обзора',
    example: 1
  })
  @Expose()
  public stoppedEngineId: number;

  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  @Expose()
  public reportId: number;

  @ApiProperty({
    description: 'Новый',
    example: false
  })
  @Expose()
  public isNew: boolean;

  @ApiProperty({
    description: 'Не на ходу',
    example: false
  })
  @Expose()
  public isNotGo: boolean;

  @ApiProperty({
    description: 'Аварийный',
    example: false
  })
  @Expose()
  public isEmergency: boolean;

  @ApiProperty({
    description: 'Разукомплектован',
    example: false
  })
  @Expose()
  public isUnderstaffed: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  @Expose()
  public comment: string;

  @ApiProperty({
    description: 'Уровень масла ДВС',
    example: 'string'
  })
  @Expose()
  public engineOilLevel: string;

  @ApiProperty({
    description: 'Уровень масла КПП',
    example: 'string'
  })
  @Expose()
  public gearboxOilLevel: string;

  @ApiProperty({
    description: 'Уровень жидкости ГУР',
    example: 'string'
  })
  @Expose()
  public gurLiquidLevel: string;

  @ApiProperty({
    description: 'Уровень тормозной жидкости',
    example: 'string'
  })
  @Expose()
  public brakeFluidLevel: string;

  @ApiProperty({
    description: 'Уровень охлаждающей жидкости',
    example: 'string'
  })
  @Expose()
  public coolantLevel: string;

  @ApiProperty({
    description: 'Комментарий тех жидкости',
    example: 'string'
  })
  @Expose()
  public technicalFluidsComment: string;

  @ApiProperty({
    description: 'Приводные ремни',
    example: 'string'
  })
  @Expose()
  public driveBelts: string;

  @ApiProperty({
    description: 'Тормозные диски',
    example: 'string'
  })
  @Expose()
  public brakeDiscs: string;

  @ApiProperty({
    description: 'Комментарий износа',
    example: 'string'
  })
  @Expose()
  public wearComment: string;
}