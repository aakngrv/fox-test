import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDataDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  public reportId: number;
  
  @ApiProperty({
    description: 'VIN номер',
    example: 'string'
  })
  public vin: string;
  
  @ApiProperty({
    description: 'Номер рамы',
    example: 'string'
  })
  public frameNumber: string;
  
  @ApiProperty({
    description: 'Комментрарий',
    example: 'string'
  })
  public comment: string;
  
  @ApiProperty({
    description: 'Наличие сервисной книжки',
    example: false
  })
  public haveAServiceBook: boolean;
  
  @ApiProperty({
    description: 'Дополнительные документы',
    example: 'string'
  })
  public additionalDocuments: string;
  
  @ApiProperty({
    description: 'CTC',
    example: 'string'
  })
  public sts: string;
  
    
  @ApiProperty({
    description: 'ПТС',
    example: 'string'
  })
  public tcp: string;
  
    
  @ApiProperty({
    description: 'Гос номер',
    example: 'string'
  })
  public stateNumber: string;
  
    
  @ApiProperty({
    description: 'Тип TC',
    example: 'string'
  })
  public carType: string;
  
    
  @ApiProperty({
    description: 'Марка автомобиля',
    example: 'string'
  })
  public carBrand: string;
  
    
  @ApiProperty({
    description: 'Модель автомобиля',
    example: 'string'
  })
  public carModel: string;
  
    
  @ApiProperty({
    description: 'Год выпуска',
    example: 'string'
  })
  public manufactureYear: string;
  
    
  @ApiProperty({
    description: 'Тип кузова',
    example: 'string'
  })
  public bodyType: string;
  
    
  @ApiProperty({
    description: 'Поколение',
    example: 'string'
  })
  public generation: string;
  
    
  @ApiProperty({
    description: 'Тип двигателя',
    example: 'string'
  })
  public enginesType: string;
  
    
  @ApiProperty({
    description: 'Модификация двигателя',
    example: 'string'
  })
  public enginesModification: string;
  
    
  @ApiProperty({
    description: 'Номер двигателя',
    example: 'string'
  })
  public enginesNumber: string;
  
    
  @ApiProperty({
    description: 'Привод',
    example: 'string'
  })
  public driveUnit: string;
  
    
  @ApiProperty({
    description: 'Тип КПП',
    example: 'string'
  })
  public gearboxType: string;
  
    
  @ApiProperty({
    description: 'Модификация',
    example: 'string'
  })
  public modification: string;
  
    
  @ApiProperty({
    description: 'Объем двигателя',
    example: 'string'
  })
  public engineCapacity: string;
  
    
  @ApiProperty({
    description: 'Мощность',
    example: 'string'
  })
  public power: string;
  
    
  @ApiProperty({
    description: 'Цвет',
    example: 'string'
  })
  public color: string;
  
    
  @ApiProperty({
    description: 'CTC',
    example: false
  })
  public isMetallic: boolean;

  @ApiProperty({
    description: 'Пробег',
    example: 'string'
  })
  public mileage: string;
  
  @ApiProperty({
    description: 'Не установлен',
    example: false
  })
  public isNotInstalled: boolean;
  
  @ApiProperty({
    description: 'Новый автомобиль?',
    example: false
  })
  public isNewCar: boolean;
  
  @ApiProperty({
    description: 'Аварийный?',
    example: false
  })
  public isEmergency: boolean;
  
  @ApiProperty({
    description: 'Не на ходу?',
    example: false
  })
  public isNotOnTrack: boolean;
  
  @ApiProperty({
    description: 'Общий комментрий',
    example: 'string'
  })
  public totalComment: string;
}