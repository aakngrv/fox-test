import { ApiProperty } from '@nestjs/swagger';

export class CreateComplectationSalonDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  public reportId: number;
  
  @ApiProperty({
    description: 'Люк',
    example: false
  })
  public luke: boolean;

  @ApiProperty({
    description: 'Чехлы на сиденьях',
    example: false
  })
  public seatCovers: boolean;

  @ApiProperty({
    description: 'Панорамная крыша',
    example: false
  })
  public panoramicView: boolean;

  @ApiProperty({
    description: 'Третий ряд сидений',
    example: false
  })
  public thirdRowOfSeats: boolean;

  @ApiProperty({
    description: 'Тонированные стекла',
    example: false
  })
  public tintedGlass: boolean;

  @ApiProperty({
    description: 'Подогрев руля',
    example: false
  })
  public steeringWheelHeating: boolean;

  @ApiProperty({
    description: 'Отделка кожей рычага КПП',
    example: false
  })
  public leatherTrimmedGearshiftLever: boolean;

  @ApiProperty({
    description: 'Спортивные передние сиденья',
    example: false
  })
  public sportsFrontSeats: boolean;

  @ApiProperty({
    description: 'Отделка кожей рулевого колеса',
    example: false
  })
  public steeringWheelLeatherTrim: boolean;

  @ApiProperty({
    description: 'Складывающеется заднее сиденье',
    example: false
  })
  public foldingRearSeat: boolean;

  @ApiProperty({
    description: 'Передний центральный подлокотник',
    example: false
  })
  public frontCenterArmrest: boolean;

  @ApiProperty({
    description: 'Материал салона',
    example: "string"
  })
  public interiorMaterial: string;

  @ApiProperty({
    description: 'Подогрев сидений',
    example: ["string"]
  })
  public heatedSeats: string[];

  @ApiProperty({
    description: 'Регулировка сидений по высоте',
    example: "string"
  })
  public seatHeightAdjustment: string;

  @ApiProperty({
    description: 'Электрорегулировка сидений',
    example: ["string"]
  })
  public electricallyAdjustableSeats: string[];

  @ApiProperty({
    description: 'Память положения сидений',
    example: "string"
  })
  public seatPositionMemory: string;

  @ApiProperty({
    description: 'Вентиляция сидений',
    example: ["string"]
  })
  public seatVentilation: string[];

  @ApiProperty({
    description: 'Сиденья с массажем',
    example: ["string"]
  })
  public seatMassage: string[];
}