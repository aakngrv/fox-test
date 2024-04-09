import { ApiProperty } from '@nestjs/swagger';

export class CreateRunningEngineDto {

  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  public reportId: number;

  @ApiProperty({
    description: 'Двигатель не запускается',
    example: false
  })
  public engineNotStart: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public comment: string;

  @ApiProperty({
    description: 'Видео запуска двигателя',
    example: 'string'
  })
  public engineVideo: string;

  @ApiProperty({
    description: 'Аккумулятор',
    example: false
  })
  public battery: boolean;

  @ApiProperty({
    description: 'Светотехника',
    example: false
  })
  public lightingEngineering: boolean;

  @ApiProperty({
    description: 'Аудиосистема',
    example: false
  })
  public audioSystem: boolean;

  @ApiProperty({
    description: 'Подогрев руля',
    example: false
  })
  public heatedSteeringWheel: boolean;

  @ApiProperty({
    description: 'Звуковой сигнал',
    example: false
  })
  public soundSignal: boolean;

  @ApiProperty({
    description: 'Массаж сидений',
    example: false
  })
  public seatMassage: boolean;

  @ApiProperty({
    description: 'Стеклоомыватели',
    example: false
  })
  public windshieldWashers: boolean;

  @ApiProperty({
    description: 'Подогрев сидений',
    example: false
  })
  public seatHeating: boolean;

  @ApiProperty({
    description: 'Стеклоочистители',
    example: false
  })
  public windscreenWipers: boolean;

  @ApiProperty({
    description: 'Стеклоподъемники',
    example: false
  })
  public windowLifters: boolean;

  @ApiProperty({
    description: 'Электрический люк',
    example: false
  })
  public electricSunroof: boolean;

  @ApiProperty({
    description: 'Электропривод руля',
    example: false
  })
  public electricSteeringWheel: boolean;

  @ApiProperty({
    description: 'Электропривод сидений',
    example: false
  })
  public electricSeats: boolean;

  @ApiProperty({
    description: 'Электрическая панорама',
    example: false
  })
  public electricPanorama: boolean;

  @ApiProperty({
    description: 'Подогрев лобового стекла',
    example: false
  })
  public heatedWindshield: boolean;

  @ApiProperty({
    description: 'Электропривод багажника',
    example: false
  })
  public electricTrunkDrive: boolean;

  @ApiProperty({
    description: 'Комментарий эл систем',
    example: 'string'
  })
  public electricSystemComment: string;

  @ApiProperty({
    description: 'Переключение КПП',
    example: false
  })
  public gearboxSwitching: boolean;

  @ApiProperty({
    description: 'Работа двигателя',
    example: false
  })
  public engineOperation: boolean;

  @ApiProperty({
    description: 'Отопитель салона',
    example: false
  })
  public interiorHeater: boolean;

  @ApiProperty({
    description: 'Усилитель руля',
    example: false
  })
  public powerSteering: boolean;

  @ApiProperty({
    description: 'Кондиционер',
    example: false
  })
  public airConditioner: boolean;

  @ApiProperty({
    description: 'Комментарий мех систем',
    example: 'string'
  })
  public mechanicalSystemComment: string;
}