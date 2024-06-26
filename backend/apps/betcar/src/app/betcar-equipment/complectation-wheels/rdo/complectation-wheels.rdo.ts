import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ComplectationWheelsRdo {
  

  @ApiProperty({
    description: 'ID шин автомобиля',
    example: 1
  })
  @Expose()
  public complectationWheelsId: number;
  
  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  @Expose()
  public reportId: number;
  
  @ApiProperty({
    description: 'Все шины одинаковые',
    example: false
  })
  @Expose()
  public isTiresIdentical: boolean;

  @ApiProperty({
    description: 'Дополнительные комплекты шин',
    example: false
  })
  @Expose()
  public additionalTireSets: boolean;

  @ApiProperty({
    description: 'Дополнительные комплекты дисков',
    example: false
  })
  @Expose()
  public additionalSetsOfDisks: boolean;

  @ApiProperty({
    description: 'Тип дисков',
    example: 'string'
  })
  @Expose()
  public typeOfDisks: string;

  @ApiProperty({
    description: 'Сезонность',
    example: ["string"]
  })
  @Expose()
  public seasonality: string[];

  @ApiProperty({
    description: 'Марка шин переднего левого колеса',
    example: 'string'
  })
  @Expose()
  public frontLeftBrand: string;

  @ApiProperty({
    description: 'Марка шин заднего левого колеса',
    example: 'string'
  })
  @Expose()
  public backLeftBrand: string;

  @ApiProperty({
    description: 'Марка шин переднего правого колеса',
    example: 'string'
  })
  @Expose()
  public frontRightBrand: string;

  @ApiProperty({
    description: 'Марка шин заднего правого колеса',
    example: 'string'
  })
  @Expose()
  public backRightBrand: string;

  @ApiProperty({
    description: 'Модель шин переднего левого колеса',
    example: 'string'
  })
  @Expose()
  public frontLeftModel: string;

  @ApiProperty({
    description: 'Модель шин заднего левого колеса',
    example: 'string'
  })
  @Expose()
  public backLeftModel: string;

  @ApiProperty({
    description: 'Модель шин переднего правого колеса',
    example: 'string'
  })
  @Expose()
  public frontRightModel: string;

  @ApiProperty({
    description: 'Модель шин заднего правого колеса',
    example: 'string'
  })
  @Expose()
  public backRightModel: string;

  @ApiProperty({
    description: 'Дата выпуска шин переднего левого колеса',
    example: 'string'
  })
  @Expose()
  public frontLeftIssueDate: string;

  @ApiProperty({
    description: 'Дата выпуска шин заднего левого колеса',
    example: 'string'
  })
  @Expose()
  public backLeftIssueDate: string;

  @ApiProperty({
    description: 'Дата выпуска шин переднего правого колеса',
    example: 'string'
  })
  @Expose()
  public frontRightIssueDate: string;

  @ApiProperty({
    description: 'Дата выпуска шин заднего правого колеса',
    example: 'string'
  })
  @Expose()
  public backRightIssueDate: string;

  @ApiProperty({
    description: 'Параметры шин переднего левого колеса',
    example: ['string']
  })
  @Expose()
  public frontLeftOptions: string[];

  @ApiProperty({
    description: 'Параметры шин заднего левого колеса',
    example: ['string']
  })
  @Expose()
  public backLeftOptions: string[];

  @ApiProperty({
    description: 'Параметры шин переднего правого колеса',
    example: ['string']
  })
  @Expose()
  public frontRightOptions: string[];

  @ApiProperty({
    description: 'Параметры шин заднего правого колеса',
    example: ['string']
  })
  @Expose()
  public backRightOptions: string[];

  @ApiProperty({
    description: 'Износ шин переднего левого колеса',
    example: 'string'
  })
  @Expose()
  public frontLeftWear: string;

  @ApiProperty({
    description: 'Износ шин заднего левого колеса',
    example: 'string'
  })
  @Expose()
  public backLeftWear: string;

  @ApiProperty({
    description: 'Износ шин переднего правого колеса',
    example: 'string'
  })
  @Expose()
  public frontRightWear: string;

  @ApiProperty({
    description: 'Износ шин заднего правого колеса',
    example: 'string'
  })
  @Expose()
  public backRightWear: string;

  @ApiProperty({
    description: 'Дополнительные шины - сезонность',
    example: ['string']
  })
  @Expose()
  public additionalTiresSeasonality: string[];
    
  @ApiProperty({
    description: 'Дополнительные диски - тип',
    example: 'string'
  })
  @Expose()
  public additionalDisksType: string;
}