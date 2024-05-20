import { ApiProperty } from '@nestjs/swagger';

export class CreateDashboardDto {

  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  public reportId: number;

  @ApiProperty({
    description: 'ABS',
    example: false
  })
  public abs: boolean;

  @ApiProperty({
    description: 'Подушка безопасности',
    example: false
  })
  public airbag: boolean;

  @ApiProperty({
    description: 'checkEngine',
    example: false
  })
  public checkEngine: boolean;

  @ApiProperty({
    description: 'Аккумулятор',
    example: false
  })
  public battery: boolean;

  @ApiProperty({
    description: 'Давление шин',
    example: false
  })
  public tirePressure: boolean;

  @ApiProperty({
    description: 'Давление масла',
    example: false
  })
  public oilPressure: boolean;

  @ApiProperty({
    description: 'Комментарий контр ламп',
    example: 'string'
  })
  public controlLightComment: string;

  @ApiProperty({
    description: 'Электронная диагностика',
    example: false
  })
  public electronicDiagnostics: boolean;

  @ApiProperty({
    description: 'Файл диагностики',
    example: 'string'
  })
  public diagnosticsFile?: string;

  @ApiProperty({
    description: 'Результаты диагностики',
    example: 'string'
  })
  public diagnosticsResult: string;

  @ApiProperty({
    description: 'Пробег на приборной панели',
    example: 'string'
  })
  public mileageOnDashboard?: string;

  @ApiProperty({
    description: 'Пробег в блоке ДВС',
    example: 'string'
  })
  public mileageInTheEngineBlock?: string;

  @ApiProperty({
    description: 'Пробег в блоке КПП',
    example: 'string'
  })
  public mileageInTheGearbox?: string;

  @ApiProperty({
    description: 'Пробег в доп блоке',
    example: 'string'
  })
  public mileageInAdditionalBlocks?: string;

  @ApiProperty({
    description: 'Пробег в блоках не выявлен',
    example: false
  })
  public isNoMileage?: boolean;

  @ApiProperty({
    description: 'Общий комментарий',
    example: 'string'
  })
  public totalComment: string;
  
  @ApiProperty({
    description: 'Без ошибок',
    example: false
  })
  public noErrors: boolean;
}