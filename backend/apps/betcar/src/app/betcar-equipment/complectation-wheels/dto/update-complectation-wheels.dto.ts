import { ApiProperty } from '@nestjs/swagger';

export class UpdateComplectationWheelsDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  public reportId: number;
  
  @ApiProperty({
    description: 'Все шины одинаковые',
    example: false
  })
  public isTiresIdentical: boolean;

  @ApiProperty({
    description: 'Дополнительные комплекты шин',
    example: false
  })
  public additionalTireSets: boolean;

  @ApiProperty({
    description: 'Дополнительные комплекты дисков',
    example: false
  })
  public additionalSetsOfDisks: boolean;

  @ApiProperty({
    description: 'Тип дисков',
    example: 'string'
  })
  public typeOfDisks: string;

  @ApiProperty({
    description: 'Сезонность',
    example: "string"
  })
  public seasonality: string;

  @ApiProperty({
    description: 'Марка шин переднего левого колеса',
    example: 'string'
  })
  public frontLeftBrand: string;

  @ApiProperty({
    description: 'Марка шин заднего левого колеса',
    example: 'string'
  })
  public backLeftBrand: string;

  @ApiProperty({
    description: 'Марка шин переднего правого колеса',
    example: 'string'
  })
  public frontRightBrand: string;

  @ApiProperty({
    description: 'Марка шин заднего правого колеса',
    example: 'string'
  })
  public backRightBrand: string;

  @ApiProperty({
    description: 'Модель шин переднего левого колеса',
    example: 'string'
  })
  public frontLeftModel: string;

  @ApiProperty({
    description: 'Модель шин заднего левого колеса',
    example: 'string'
  })
  public backLeftModel: string;

  @ApiProperty({
    description: 'Модель шин переднего правого колеса',
    example: 'string'
  })
  public frontRightModel: string;

  @ApiProperty({
    description: 'Модель шин заднего правого колеса',
    example: 'string'
  })
  public backRightModel: string;

  @ApiProperty({
    description: 'Дата выпуска шин переднего левого колеса',
    example: 'string'
  })
  public frontLeftIssueDate: string;

  @ApiProperty({
    description: 'Дата выпуска шин заднего левого колеса',
    example: 'string'
  })
  public backLeftIssueDate: string;

  @ApiProperty({
    description: 'Дата выпуска шин переднего правого колеса',
    example: 'string'
  })
  public frontRightIssueDate: string;

  @ApiProperty({
    description: 'Дата выпуска шин заднего правого колеса',
    example: 'string'
  })
  public backRightIssueDate: string;

  @ApiProperty({
    description: 'Параметры шин переднего левого колеса',
    example: ['string']
  })
  public frontLeftOptions: string[];

  @ApiProperty({
    description: 'Параметры шин заднего левого колеса',
    example: ['string']
  })
  public backLeftOptions: string[];

  @ApiProperty({
    description: 'Параметры шин переднего правого колеса',
    example: ['string']
  })
  public frontRightOptions: string[];

  @ApiProperty({
    description: 'Параметры шин заднего правого колеса',
    example: ['string']
  })
  public backRightOptions: string[];

  @ApiProperty({
    description: 'Износ шин переднего левого колеса',
    example: 'string'
  })
  public frontLeftWear: string;

  @ApiProperty({
    description: 'Износ шин заднего левого колеса',
    example: 'string'
  })
  public backLeftWear: string;

  @ApiProperty({
    description: 'Износ шин переднего правого колеса',
    example: 'string'
  })
  public frontRightWear: string;

  @ApiProperty({
    description: 'Износ шин заднего правого колеса',
    example: 'string'
  })
  public backRightWear: string;

  @ApiProperty({
    description: 'Дополнительные шины - сезонность',
    example: ['string']
  })
  public additionalTiresSeasonality: string[];

  @ApiProperty({
    description: 'Дополнительные диски - тип',
    example: 'string'
  })
  public additionalDisksType: string;
}