import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { 
  VinBodyNumber,
  FrameNumber,
  StateNumber,
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
    description: 'Комментарий',
    example: 'string'
  })
  @Expose()
  public comment: string;
  
  @ApiProperty({
    description: 'Наличие сервисной книжки',
    example: false
  })
  @Expose()
  public haveAServiceBook: boolean;
  
  @ApiProperty({
    description: 'Дополнительные документы',
    example: 'string'
  })
  @Expose()
  public additionalDocuments: string;
  
  @ApiProperty({
    description: 'CTC',
    example: 'string'
  })
  @Expose()
  public sts: string;
  
    
  @ApiProperty({
    description: 'ПТС',
    example: 'string'
  })
  @Expose()
  public tcp: string;
    
  @ApiProperty({
    description: 'Тип TC',
    example: 'string'
  })
  @Expose()
  public carType: string;
  
    
  @ApiProperty({
    description: 'Марка автомобиля',
    example: 'string'
  })
  @Expose()
  public carBrand: string;
  
    
  @ApiProperty({
    description: 'Модель автомобиля',
    example: 'string'
  })
  @Expose()
  public carModel: string;
  
    
  @ApiProperty({
    description: 'Год выпуска',
    example: 'string'
  })
  @Expose()
  public manufactureYear: string;
  
    
  @ApiProperty({
    description: 'Тип кузова',
    example: 'string'
  })
  @Expose()
  public bodyType: string;
  
    
  @ApiProperty({
    description: 'Поколение',
    example: 'string'
  })
  @Expose()
  public generation: string;
  
    
  @ApiProperty({
    description: 'Тип двигателя',
    example: 'string'
  })
  @Expose()
  public enginesType: string;
  
    
  @ApiProperty({
    description: 'Модификация двигателя',
    example: 'string'
  })
  @Expose()
  public enginesModification: string;
  
    
  @ApiProperty({
    description: 'Номер двигателя',
    example: 'string'
  })
  @Expose()
  public enginesNumber: string;
  
    
  @ApiProperty({
    description: 'Привод',
    example: 'string'
  })
  @Expose()
  public driveUnit: string;
  
    
  @ApiProperty({
    description: 'Тип КПП',
    example: 'string'
  })
  @Expose()
  public gearboxType: string;
  
    
  @ApiProperty({
    description: 'Модификация',
    example: 'string'
  })
  @Expose()
  public modification: string;
  
    
  @ApiProperty({
    description: 'Объем двигателя',
    example: 'string'
  })
  @Expose()
  public engineCapacity: string;
  
    
  @ApiProperty({
    description: 'Мощность',
    example: 'string'
  })
  @Expose()
  public power: string;
  
    
  @ApiProperty({
    description: 'Цвет',
    example: 'string'
  })
  @Expose()
  public color: string;
  
    
  @ApiProperty({
    description: 'CTC',
    example: false
  })
  @Expose()
  public isMetallic: boolean;

  @ApiProperty({
    description: 'Пробег',
    example: false
  })
  @Expose()
  public mileage: string;
  
  @ApiProperty({
    description: 'Не установлен',
    example: false
  })
  @Expose()
  public isNotInstalled: boolean;
  
  @ApiProperty({
    description: 'Новый автомобиль?',
    example: false
  })
  @Expose()
  public isNewCar: boolean;
  
  @ApiProperty({
    description: 'Аварийный?',
    example: false
  })
  @Expose()
  public isEmergency: boolean;
  
  @ApiProperty({
    description: 'Не на ходу?',
    example: false
  })
  @Expose()
  public isNotOnTrack: boolean;
  
  @ApiProperty({
    description: 'Общий комментрий',
    example: 'string'
  })
  @Expose()
  public totalComment: string;
}