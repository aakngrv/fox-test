import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDataDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  public reportId: number;

  @ApiProperty({
    description: 'Массив с VIN',
    example: [1]
  })
  public vinBodyNumber: number[];

  @ApiProperty({
    description: 'Массив с номером рамы',
    example: [1]
  })
  public frameNumber: number[];

  @ApiProperty({
    description: 'Массив с гос номером',
    example: [1]
  })
  public stateNumber: number[];

  @ApiProperty({
    description: 'Массив с ПТС',
    example: [1]
  })
  public tCP: number[];

  @ApiProperty({
    description: 'Массив с СТС',
    example: [1]
  })
  public sTS: number[];

  @ApiProperty({
    description: 'Марка',
    example: "string"
  })
  public carBrand: string;

  @ApiProperty({
    description: 'Модель',
    example: "string"
  })
  public carModel: string;

  @ApiProperty({
    description: 'Год',
    example: "string"
  })
  public manufactureYear: string;

  @ApiProperty({
    description: 'Цвет',
    example: "string"
  })
  public color: string;

  @ApiProperty({
    description: 'Тип кузова',
    example: "string"
  })
  public bodyType: string;

  @ApiProperty({
    description: 'Тип двигателя',
    example: "string"
  })
  public enginesType: string;

  @ApiProperty({
    description: 'Тип КПП',
    example: "string"
  })
  public gearboxType: string;

  @ApiProperty({
    description: 'Привод',
    example: "string"
  })
  public driveUnit: string;

  @ApiProperty({
    description: 'Расположение руля',
    example: "string"
  })
  public steeringWheelLocation: string;

  @ApiProperty({
    description: 'Модификация',
    example: "string"
  })
  public modification: string;

  @ApiProperty({
    description: 'Массив с номером двигателя',
    example: [1]
  })
  public engineNumber: number[];

  @ApiProperty({
    description: 'Объем двигателя',
    example: "string"
  })
  public engineCapacity: string;

  @ApiProperty({
    description: 'Мощность',
    example: "string"
  })
  public power: string;

  @ApiProperty({
    description: 'Сервисная книжка',
    example: "string"
  })
  public serviceBook: string;

  @ApiProperty({
    description: 'Массив с доп документами',
    example: [1]
  })
  public additionalDocuments: number[];
}