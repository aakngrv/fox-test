import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { 
  VinBodyNumber,
  FrameNumber,
  StateNumber,
  TCP,
  STS,
  EngineNumber,
  AdditionalDocuments,
} from '@backend/shared/shared-types';

export class CarDataRdo {
  
  @ApiProperty({
    description: 'ID данных об автомобиле',
    example: '1'
  })
  @Expose()
  public  carDataId: number;

  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  @Expose()
  public reportId: number;

  @ApiProperty({
    description: 'Массив с VIN',
    example: [1]
  })
  @Expose()
  public vinBodyNumber: VinBodyNumber[];

  @ApiProperty({
    description: 'Массив с номером рамы',
    example: [1]
  })
  @Expose()
  public frameNumber: FrameNumber[];

  @ApiProperty({
    description: 'Массив с гос номером',
    example: [1]
  })
  @Expose()
  public stateNumber: StateNumber[];

  @ApiProperty({
    description: 'Массив с ПТС',
    example: [1]
  })
  @Expose()
  public tCP: TCP[];

  @ApiProperty({
    description: 'Массив с СТС',
    example: [1]
  })
  @Expose()
  public sTS: STS[];

  @ApiProperty({
    description: 'Марка',
    example: "string"
  })
  @Expose()
  public carBrand: string;

  @ApiProperty({
    description: 'Модель',
    example: "string"
  })
  @Expose()
  public carModel: string;

  @ApiProperty({
    description: 'Год',
    example: "string"
  })
  @Expose()
  public manufactureYear: string;

  @ApiProperty({
    description: 'Цвет',
    example: "string"
  })
  @Expose()
  public color: string;

  @ApiProperty({
    description: 'Тип кузова',
    example: "string"
  })
  @Expose()
  public bodyType: string;

  @ApiProperty({
    description: 'Тип двигателя',
    example: "string"
  })
  @Expose()
  public enginesType: string;

  @ApiProperty({
    description: 'Тип КПП',
    example: "string"
  })
  @Expose()
  public gearboxType: string;

  @ApiProperty({
    description: 'Привод',
    example: "string"
  })
  @Expose()
  public driveUnit: string;

  @ApiProperty({
    description: 'Расположение руля',
    example: "string"
  })
  @Expose()
  public steeringWheelLocation: string;

  @ApiProperty({
    description: 'Массив с номером двигателя',
    example: [1]
  })
  @Expose()
  public engineNumber: EngineNumber[];

  @ApiProperty({
    description: 'Объем двигателя',
    example: "string"
  })
  @Expose()
  public engineCapacity: string;

  @ApiProperty({
    description: 'Мощность',
    example: "string"
  })
  @Expose()
  public power: string;

  @ApiProperty({
    description: 'Сервисная книжка',
    example: "string"
  })
  @Expose()
  public serviceBook: string;

  @ApiProperty({
    description: 'Массив с доп документами',
    example: [1]
  })
  @Expose()
  public additionalDocuments: AdditionalDocuments[];
}