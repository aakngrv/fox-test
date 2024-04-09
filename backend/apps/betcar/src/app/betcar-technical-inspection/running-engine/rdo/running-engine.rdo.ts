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
    description: 'Аккумулятор',
    example: false
  })
  @Expose()
  public battery: boolean;

  @ApiProperty({
    description: 'Светотехника',
    example: false
  })
  @Expose()
  public lightingEngineering: boolean;

  @ApiProperty({
    description: 'Аудиосистема',
    example: false
  })
  @Expose()
  public audioSystem: boolean;

  @ApiProperty({
    description: 'Подогрев руля',
    example: false
  })
  @Expose()
  public heatedSteeringWheel: boolean;

  @ApiProperty({
    description: 'Звуковой сигнал',
    example: false
  })
  @Expose()
  public soundSignal: boolean;

  @ApiProperty({
    description: 'Массаж сидений',
    example: false
  })
  @Expose()
  public seatMassage: boolean;

  @ApiProperty({
    description: 'Стеклоомыватели',
    example: false
  })
  @Expose()
  public windshieldWashers: boolean;

  @ApiProperty({
    description: 'Подогрев сидений',
    example: false
  })
  @Expose()
  public seatHeating: boolean;

  @ApiProperty({
    description: 'Стеклоочистители',
    example: false
  })
  @Expose()
  public windscreenWipers: boolean;

  @ApiProperty({
    description: 'Стеклоподъемники',
    example: false
  })
  @Expose()
  public windowLifters: boolean;

  @ApiProperty({
    description: 'Электрический люк',
    example: false
  })
  @Expose()
  public electricSunroof: boolean;

  @ApiProperty({
    description: 'Электропривод руля',
    example: false
  })
  @Expose()
  public electricSteeringWheel: boolean;

  @ApiProperty({
    description: 'Электропривод сидений',
    example: false
  })
  @Expose()
  public electricSeats: boolean;

  @ApiProperty({
    description: 'Электрическая панорама',
    example: false
  })
  @Expose()
  public electricPanorama: boolean;

  @ApiProperty({
    description: 'Подогрев лобового стекла',
    example: false
  })
  @Expose()
  public heatedWindshield: boolean;

  @ApiProperty({
    description: 'Электропривод багажника',
    example: false
  })
  @Expose()
  public electricTrunkDrive: boolean;

  @ApiProperty({
    description: 'Комментарий эл систем',
    example: 'string'
  })
  @Expose()
  public electricSystemComment: string;

  @ApiProperty({
    description: 'Переключение КПП',
    example: false
  })
  @Expose()
  public gearboxSwitching: boolean;

  @ApiProperty({
    description: 'Работа двигателя',
    example: false
  })
  @Expose()
  public engineOperation: boolean;

  @ApiProperty({
    description: 'Отопитель салона',
    example: false
  })
  @Expose()
  public interiorHeater: boolean;

  @ApiProperty({
    description: 'Усилитель руля',
    example: false
  })
  @Expose()
  public powerSteering: boolean;

  @ApiProperty({
    description: 'Кондиционер',
    example: false
  })
  @Expose()
  public airConditioner: boolean;

  @ApiProperty({
    description: 'Комментарий мех систем',
    example: 'string'
  })
  @Expose()
  public mechanicalSystemComment: string;
}