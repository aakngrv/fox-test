import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ComplectationComfortRdo {
  
  @ApiProperty({
    description: 'ID комфорта автомобиля',
    example: '1'
  })
  @Expose()
  public complectationComfortId: number;

  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  @Expose()
  public reportId: number;
  
  @ApiProperty({
    description: 'Система старт-стоп',
    example: false
  })
  @Expose()
  public startStopSystem: boolean;

  @ApiProperty({
    description: 'Бортовой компьютер',
    example: false
  })
  @Expose()
  public onBoardComputer: boolean;

  @ApiProperty({
    description: 'Электропривод зеркал',
    example: false
  })
  @Expose()
  public electricMirrors: boolean;

  @ApiProperty({
    description: 'Предпусковой отопитель',
    example: false
  })
  @Expose()
  public preheater: boolean;
  
  @ApiProperty({
    description: 'Запуск двигателя с кнопки',
    example: false
  })
  @Expose()
  public engineStartButton: boolean;

  @ApiProperty({
    description: 'Система запуска без ключа',
    example: false
  })
  @Expose()
  public keylessEntrySystem: boolean;

  @ApiProperty({
    description: 'Открытие багажника без рук',
    example: false
  })
  @Expose()
  public handsFreeTrunkOpening: boolean;

  @ApiProperty({
    description: 'Электросладывание зеркал',
    example: false
  })
  @Expose()
  public electrofoldingOfMirrors: boolean;

  @ApiProperty({
    description: 'Мультифункциональный руль',
    example: false
  })
  @Expose()
  public multifunctionSteeringWheel: boolean;

  @ApiProperty({
    description: 'Сенсорная панель управления',
    example: false
  })
  @Expose()
  public touchControlPanel: boolean;

  @ApiProperty({
    description: 'Переключение передач на руле',
    example: false
  })
  @Expose()
  public gearshiftPaddles: boolean;

  @ApiProperty({
    description: 'Регулируемый педальный узел',
    example: false
  })
  @Expose()
  public adjustablePedalAssembly: boolean;

  @ApiProperty({
    description: 'Электронная приборная панель',
    example: false
  })
  @Expose()
  public electronicDashboard: boolean;

  @ApiProperty({
    description: 'Дистанционный запуск двигателя',
    example: false
  })
  @Expose()
  public remoteEngineStart: boolean;

  @ApiProperty({
    description: 'Электропривод крышки багажника',
    example: false
  })
  @Expose()
  public electricTrunkLid: boolean;

  @ApiProperty({
    description: 'Камера',
    example: ["string"]
  })
  @Expose()
  public camera: string[];

  @ApiProperty({
    description: 'Подвеска',
    example: ["string"]
  })
  @Expose()
  public suspension: string[];

  @ApiProperty({
    description: 'Кондиционер',
    example: "string"
  })
  @Expose()
  public airConditioner: string;

  @ApiProperty({
    description: 'Усилитель руля',
    example: "string"
  })
  @Expose()
  public powerSteering: string;

  @ApiProperty({
    description: 'Круиз-контроль',
    example: "string"
  })
  @Expose()
  public cruiseControl: string;

  @ApiProperty({
    description: 'Электроподогрев',
    example: ["string"]
  })
  @Expose()
  public electricHeating: string[];

  @ApiProperty({
    description: 'Регулировка руля',
    example: ["string"]
  })
  @Expose()
  public steeringWheelAdjustment: string[];

  @ApiProperty({
    description: 'Помощь при парковке',
    example: ["string"]
  })
  @Expose()
  public parkingAssistanceSystem: string[];

  @ApiProperty({
    description: 'Электроподъемние стекла',
    example: ["string"]
  })
  @Expose()
  public electricLifts: string[];
}