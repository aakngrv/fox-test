import { ApiProperty } from '@nestjs/swagger';

export class CreateInteriorPhotoDto {

  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  public reportId: number;

  @ApiProperty({
    description: 'Левая передняя дверь',
    example: 'string'
  })
  public leftFrontDoor: string;

  @ApiProperty({
    description: 'Сиденье водителя',
    example: 'string'
  })
  public driverSeatPhoto: string;

  @ApiProperty({
    description: 'Фото руля',
    example: 'string'
  })
  public steeringWheelPhoto: string;

  @ApiProperty({
    description: 'Приборная панель',
    example: 'string'
  })
  public dashboardPhoto: string;

  @ApiProperty({
    description: 'Левая задняя дверь',
    example: 'string'
  })
  public leftBackDoor: string;

  @ApiProperty({
    description: 'Заднее сидень слева',
    example: 'string'
  })
  public backLeftSeatsPhoto: string;

  @ApiProperty({
    description: 'Передние сиденья',
    example: 'string'
  })
  public frontSeatsPhoto: string;

  @ApiProperty({
    description: 'Правая задняя дверь',
    example: 'string'
  })
  public rightBackDoor: string;

  @ApiProperty({
    description: 'Заднее сидень справа',
    example: 'string'
  })
  public backRightSeatsPhoto: string;

  @ApiProperty({
    description: 'Правая передняя дверь',
    example: 'string'
  })
  public rightFrontDoor: string;

  @ApiProperty({
    description: 'Пассажирское сиденье',
    example: 'string'
  })
  public passengerSeatPhoto: string;

  @ApiProperty({
    description: 'Дополнительное фото',
    example: ['string']
  })
  public addPhoto: string[];
}