import { ApiProperty } from '@nestjs/swagger';

export class UpdateComplectationComfortDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  public reportId: number;
  
  @ApiProperty({
    description: 'Система старт-стоп',
    example: false
  })
  public startStopSystem: boolean;

  @ApiProperty({
    description: 'Бортовой компьютер',
    example: false
  })
  public onBoardComputer: boolean;

  @ApiProperty({
    description: 'Электропривод зеркал',
    example: false
  })
  public electricMirrors: boolean;

  @ApiProperty({
    description: 'Предпусковой отопитель',
    example: false
  })
  public preheater: boolean;
  
  @ApiProperty({
    description: 'Запуск двигателя с кнопки',
    example: false
  })
  public engineStartButton: boolean;

  @ApiProperty({
    description: 'Система запуска без ключа',
    example: false
  })
  public keylessEntrySystem: boolean;

  @ApiProperty({
    description: 'Открытие багажника без рук',
    example: false
  })
  public handsFreeTrunkOpening: boolean;

  @ApiProperty({
    description: 'Электросладывание зеркал',
    example: false
  })
  public electrofoldingOfMirrors: boolean;

  @ApiProperty({
    description: 'Мультифункциональный руль',
    example: false
  })
  public multifunctionSteeringWheel: boolean;

  @ApiProperty({
    description: 'Сенсорная панель управления',
    example: false
  })
  public touchControlPanel: boolean;

  @ApiProperty({
    description: 'Переключение передач на руле',
    example: false
  })
  public gearshiftPaddles: boolean;

  @ApiProperty({
    description: 'Регулируемый педальный узел',
    example: false
  })
  public adjustablePedalAssembly: boolean;

  @ApiProperty({
    description: 'Электронная приборная панель',
    example: false
  })
  public electronicDashboard: boolean;

  @ApiProperty({
    description: 'Дистанционный запуск двигателя',
    example: false
  })
  public remoteEngineStart: boolean;

  @ApiProperty({
    description: 'Электропривод крышки багажника',
    example: false
  })
  public electricTrunkLid: boolean;

  @ApiProperty({
    description: 'Камера',
    example: "string"
  })
  public camera: string[];

  @ApiProperty({
    description: 'Подвеска',
    example: ["string"]
  })
  public suspension: string[];

  @ApiProperty({
    description: 'Кондиционер',
    example: "string"
  })
  public airConditioner: string;

  @ApiProperty({
    description: 'Усилитель руля',
    example: "string"
  })
  public powerSteering: string;

  @ApiProperty({
    description: 'Круиз-контроль',
    example: "string"
  })
  public cruiseControl: string;

  @ApiProperty({
    description: 'Электроподогрев',
    example: ["string"]
  })
  public electricHeating: string[];

  @ApiProperty({
    description: 'Регулировка руля',
    example: ["string"]
  })
  public steeringWheelAdjustment: string[];

  @ApiProperty({
    description: 'Помощь при парковке',
    example: ["string"]
  })
  public parkingAssistanceSystem: string[];

  @ApiProperty({
    description: 'Электроподъемние стекла',
    example: ["string"]
  })
  public electricLifts: string[];
}