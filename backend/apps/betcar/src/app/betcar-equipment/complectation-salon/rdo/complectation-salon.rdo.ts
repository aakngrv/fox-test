import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ComplectationSalonRdo {
  
  @ApiProperty({
    description: 'ID салона автомобиля',
    example: '1'
  })
  @Expose()
  complectationSalonId: number;
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  @Expose()
  public reportId: number;
  
  @ApiProperty({
    description: 'Люк',
    example: false
  })
  @Expose()
  public luke: boolean;

  @ApiProperty({
    description: 'Чехлы на сиденьях',
    example: false
  })
  @Expose()
  public seatCovers: boolean;

  @ApiProperty({
    description: 'Панорамная крыша',
    example: false
  })
  @Expose()
  public panoramicView: boolean;

  @ApiProperty({
    description: 'Третий ряд сидений',
    example: false
  })
  @Expose()
  public thirdRowOfSeats: boolean;

  @ApiProperty({
    description: 'Тонированные стекла',
    example: false
  })
  @Expose()
  public tintedGlass: boolean;

  @ApiProperty({
    description: 'Подогрев руля',
    example: false
  })
  @Expose()
  public steeringWheelHeating: boolean;

  @ApiProperty({
    description: 'Отделка кожей рычага КПП',
    example: false
  })
  @Expose()
  public leatherTrimmedGearshiftLever: boolean;

  @ApiProperty({
    description: 'Спортивные передние сиденья',
    example: false
  })
  @Expose()
  public sportsFrontSeats: boolean;

  @ApiProperty({
    description: 'Отделка кожей рулевого колеса',
    example: false
  })
  @Expose()
  public steeringWheelLeatherTrim: boolean;

  @ApiProperty({
    description: 'Складывающеется заднее сиденье',
    example: false
  })
  @Expose()
  public foldingRearSeat: boolean;

  @ApiProperty({
    description: 'Передний центральный подлокотник',
    example: false
  })
  @Expose()
  public frontCenterArmrest: boolean;

  @ApiProperty({
    description: 'Материал салона',
    example: "string"
  })
  @Expose()
  public interiorMaterial: string;

  @ApiProperty({
    description: 'Подогрев сидений',
    example: ["string"]
  })
  @Expose()
  public heatedSeats: string[];

  @ApiProperty({
    description: 'Регулировка сидений по высоте',
    example: "string"
  })
  @Expose()
  public seatHeightAdjustment: string;

  @ApiProperty({
    description: 'Электрорегулировка сидений',
    example: ["string"]
  })
  @Expose()
  public electricallyAdjustableSeats: string[];

  @ApiProperty({
    description: 'Память положения сидений',
    example: "string"
  })
  @Expose()
  public seatPositionMemory: string;

  @ApiProperty({
    description: 'Вентиляция сидений',
    example: ["string"]
  })
  @Expose()
  public seatVentilation: string[];

  @ApiProperty({
    description: 'Сиденья с массажем',
    example: ["string"]
  })
  @Expose()
  public seatMassage: string[];
}