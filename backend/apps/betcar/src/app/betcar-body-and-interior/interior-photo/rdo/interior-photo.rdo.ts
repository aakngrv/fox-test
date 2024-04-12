import { ApiProperty } from '@nestjs/swagger';
import {Expose} from "class-transformer";

export class InteriorPhotoRdo {

  @ApiProperty({
    description: 'ID фото салона',
    example: 1
  })
  @Expose()
  public interiorPhotoId: number;
  
  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  @Expose()
  public reportId: number;

  @ApiProperty({
    description: 'Левая передняя дверь',
    example: 'string'
  })
  @Expose()
  public leftFrontDoor: string;

  @ApiProperty({
    description: 'Сиденье водителя',
    example: 'string'
  })
  @Expose()
  public driverSeatPhoto: string;

  @ApiProperty({
    description: 'Фото руля',
    example: 'string'
  })
  @Expose()
  public steeringWheelPhoto: string;

  @ApiProperty({
    description: 'Приборная панель',
    example: 'string'
  })
  @Expose()
  public dashboardPhoto: string;

  @ApiProperty({
    description: 'Левая задняя дверь',
    example: 'string'
  })
  @Expose()
  public leftBackDoor: string;

  @ApiProperty({
    description: 'Заднее сидень слева',
    example: 'string'
  })
  @Expose()
  public backLeftSeatsPhoto: string;

  @ApiProperty({
    description: 'Передние сиденья',
    example: 'string'
  })
  @Expose()
  public frontSeatsPhoto: string;

  @ApiProperty({
    description: 'Правая задняя дверь',
    example: 'string'
  })
  @Expose()
  public rightBackDoor: string;

  @ApiProperty({
    description: 'Заднее сидень справа',
    example: 'string'
  })
  @Expose()
  public backRightSeatsPhoto: string;

  @ApiProperty({
    description: 'Правая передняя дверь',
    example: 'string'
  })
  @Expose()
  public rightFrontDoor: string;

  @ApiProperty({
    description: 'Пассажирское сиденье',
    example: 'string'
  })
  @Expose()
  public passengerSeatPhoto: string;

  @ApiProperty({
    description: 'Дополнительное фото',
    example: ['string']
  })
  @Expose()
  public addPhoto: string[];
}