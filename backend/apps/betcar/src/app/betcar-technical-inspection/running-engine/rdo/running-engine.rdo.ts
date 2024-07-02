import { AddElementElectrical, AddElementMechanical } from '@backend/shared/shared-types';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from "class-transformer";

export class RunningEngineRdo {

  @ApiProperty({
    description: 'ID запущенного двигателя',
    example: 1
  })
  @Expose()
  public runningEngineId: number;
  
  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  @Expose()
  public reportId: number;

  @ApiProperty({
    description: 'Двигатель не запускается',
    example: false
  })
  @Expose()
  public engineNotStart: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  @Expose()
  public comment: string;

  @ApiProperty({
    description: 'Видео запуска двигателя',
    example: 'string'
  })
  @Expose()
  public engineVideo: string;
  
  @ApiProperty({
    description: 'Все системы в порядке',
    example: false
  })
  @Expose()
  public allSystemOkElectric: boolean;

  @ApiProperty({
    description: 'Выбрать несправность',
    example: ['string']
  })
  @Expose()
  public electricalMalfunction: string[];

  @ApiProperty({
    description: 'Все системы в порядке',
    example: false
  })
  @Expose()
  public allSystemOkMechanical: boolean;

  @ApiProperty({
    description: 'Выбрать несправность',
    example: ['string']
  })
  @Expose()
  public mechanicalMalfunction: string[];

    
  @ApiProperty({
    description: 'Новый элемент эл систем',
    example: [1]
  })
  @Expose()
  public addElementElectrical: AddElementElectrical[];

  @ApiProperty({
    description: 'Новый элемент мех систем',
    example: [1]
  })
  @Expose()
  public addElementMechanical: AddElementMechanical[];
}