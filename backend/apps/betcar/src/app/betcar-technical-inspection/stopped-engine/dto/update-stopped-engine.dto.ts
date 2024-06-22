import { ApiProperty } from '@nestjs/swagger';

export class UpdateStoppedEngineDto {

  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  public reportId: number;

  @ApiProperty({
    description: 'Новый',
    example: false
  })
  public isNew: boolean;

  @ApiProperty({
    description: 'Не на ходу',
    example: false
  })
  public isNotGo: boolean;

  @ApiProperty({
    description: 'Аварийный',
    example: false
  })
  public isEmergency: boolean;

  @ApiProperty({
    description: 'Разукомплектован',
    example: false
  })
  public isUnderstaffed: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public comment: string;

  @ApiProperty({
    description: 'Уровень масла ДВС',
    example: 'string'
  })
  public engineOilLevel: string;

  @ApiProperty({
    description: 'Уровень масла КПП',
    example: 'string'
  })
  public gearboxOilLevel: string;

  @ApiProperty({
    description: 'Уровень жидкости ГУР',
    example: 'string'
  })
  public gurLiquidLevel: string;

  @ApiProperty({
    description: 'Уровень тормозной жидкости',
    example: 'string'
  })
  public brakeFluidLevel: string;

  @ApiProperty({
    description: 'Уровень охлаждающей жидкости',
    example: 'string'
  })
  public coolantLevel: string;

  @ApiProperty({
    description: 'Комментарий тех жидкости',
    example: 'string'
  })
  public technicalFluidsComment: string;

  @ApiProperty({
    description: 'Приводные ремни',
    example: 'string'
  })
  public driveBelts: string;

  @ApiProperty({
    description: 'Тормозные диски',
    example: 'string'
  })
  public brakeDiscs: string;

  @ApiProperty({
    description: 'Тормозные колодки',
    example: 'string'
  })
  public brakePads: string;

  @ApiProperty({
    description: 'Комментарий износа',
    example: 'string'
  })
  public wearComment: string;

  @ApiProperty({
    description: 'Запотевание',
    example: ['string']
  })
  public fogging: string[];

  @ApiProperty({
    description: 'Фото',
    example: ['string']
  })
  public photo: string[];
}