import { ApiProperty } from '@nestjs/swagger';

export class CreateDashboardDto {

  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  public reportId: number;
  
  @ApiProperty({
    description: 'Ошибки отсутствуют',
    example: false
  })
  public noErrors: boolean;

  @ApiProperty({
    description: 'Выбрать ошибку',
    example: ["string"]
  })
  public selectError: string[];
  
  @ApiProperty({
    description: 'Файл диагностики',
    example: ["string"]
  })
  public diagnosticsFile?: string[];

  @ApiProperty({
    description: 'Комментарий эксперта',
    example: "string"
  })
  public diagnosticsResult: string;

  @ApiProperty({
    description: 'Пробег на приборной панели',
    example: "string"
  })
  public mileageOnDashboard?: string;

  @ApiProperty({
    description: 'Пробег в блоках ДВС',
    example: "string"
  })
  public mileageInTheEngineBlock?: string;

  @ApiProperty({
    description: 'Пробег в блоке КПП',
    example: "string"
  })
  public mileageInTheGearbox?: string;

  @ApiProperty({
    description: 'Пробег в доп блоке',
    example: "string"
  })
  public mileageInAdditionalBlocks?: string;

  @ApiProperty({
    description: 'Без пробега',
    example: false
  })
  public isNoMileage?: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  public totalComment: string;

  @ApiProperty({
    description: 'Доп ошибки',
    example:[1]
  })
  public addElementDash: number[];
}