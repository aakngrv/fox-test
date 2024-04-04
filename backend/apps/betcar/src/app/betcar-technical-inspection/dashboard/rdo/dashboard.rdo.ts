import { ApiProperty } from '@nestjs/swagger';
import { Expose } from "class-transformer";

export class DashboardRdo {

  @ApiProperty({
    description: 'ID приборной панели',
    example: 1
  })
  @Expose()
  public dashboardId: number; 
  
  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  @Expose()
  public reportId: number;

  @ApiProperty({
    description: 'ABS',
    example: false
  })
  @Expose()
  public abs: boolean;

  @ApiProperty({
    description: 'Подушка безопасности',
    example: false
  })
  @Expose()
  public airbag: boolean;

  @ApiProperty({
    description: 'checkEngine',
    example: false
  })
  @Expose()
  public checkEngine: boolean;

  @ApiProperty({
    description: 'Аккумулятор',
    example: false
  })
  @Expose()
  public battery: boolean;

  @ApiProperty({
    description: 'Давление шин',
    example: false
  })
  @Expose()
  public tirePressure: boolean;

  @ApiProperty({
    description: 'Давление масла',
    example: false
  })
  @Expose()
  public oilPressure: boolean;

  @ApiProperty({
    description: 'Комментарий контр ламп',
    example: 'string'
  })
  @Expose()
  public controlLightComment: string;

  @ApiProperty({
    description: 'Электронная диагностика',
    example: false
  })
  @Expose()
  public electronicDiagnostics: boolean;

  @ApiProperty({
    description: 'Файл диагностики',
    example: 'string'
  })
  @Expose()
  public diagnosticsFile?: string;

  @ApiProperty({
    description: 'Результаты диагностики',
    example: 'string'
  })
  @Expose()
  public diagnosticsResult: string;

  @ApiProperty({
    description: 'Пробег на приборной панели',
    example: 'string'
  })
  @Expose()
  public mileageOnDashboard?: string;

  @ApiProperty({
    description: 'Пробег в блоке ДВС',
    example: 'string'
  })
  @Expose()
  public mileageInTheEngineBlock?: string;

  @ApiProperty({
    description: 'Пробег в блоке КПП',
    example: 'string'
  })
  @Expose()
  public mileageInTheGearbox?: string;

  @ApiProperty({
    description: 'Пробег в доп блоке',
    example: 'string'
  })
  @Expose()
  public mileageInAdditionalBlocks?: string;

  @ApiProperty({
    description: 'Пробег в блоках не выявлен',
    example: false
  })
  @Expose()
  public isNoMileage?: boolean;

  @ApiProperty({
    description: 'Общий комментарий',
    example: 'string'
  })
  @Expose()
  public totalComment: string;
}