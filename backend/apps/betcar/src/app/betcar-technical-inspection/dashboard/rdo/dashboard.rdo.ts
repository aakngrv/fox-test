import { AddElementDash } from '@backend/shared/shared-types';
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
    description: 'Ошибки отсутствуют',
    example: false
  })
  @Expose()
  public noErrors: boolean;
  
  @ApiProperty({
    description: 'Файл диагностики',
    example: ["string"]
  })
  @Expose()
  public diagnosticsFile?: string[];

  @ApiProperty({
    description: 'Комментарий эксперта',
    example: "string"
  })
  @Expose()
  public diagnosticsComment: string;

  @ApiProperty({
    description: 'Пробег на приборной панели',
    example: "string"
  })
  @Expose()
  public mileageOnDashboard?: string;

  @ApiProperty({
    description: 'Пробег в блоках ДВС',
    example: "string"
  })
  @Expose()
  public mileageInTheEngineBlock?: string;

  @ApiProperty({
    description: 'Пробег в блоке КПП',
    example: "string"
  })
  @Expose()
  public mileageInTheGearbox?: string;

  @ApiProperty({
    description: 'Пробег в доп блоке',
    example: "string"
  })
  @Expose()
  public mileageInAdditionalBlocks?: string;

  @ApiProperty({
    description: 'Без пробега',
    example: false
  })
  @Expose()
  public isNoMileage?: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  @Expose()
  public totalComment: string;

  @ApiProperty({
    description: 'Доп ошибки',
    example: [1]
  })
  @Expose()
  public addElementDash: AddElementDash[];
}