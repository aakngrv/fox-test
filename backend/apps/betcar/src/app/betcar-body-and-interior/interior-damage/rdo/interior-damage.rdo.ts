import { ApiProperty } from '@nestjs/swagger';
import { Expose } from "class-transformer";


import { AddElementInterior } from '@backend/shared/shared-types';
export class InteriorDamageRdo {

  @ApiProperty({
    description: 'ID повреждений салона',
    example: 1
  })
  @Expose()
  public interiorDamageId: number;
  
  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  @Expose()
  public reportId: number;

  @ApiProperty({
    description: 'Без повреждений',
    example: false
  })
  @Expose()
  public withoutDamage: boolean;

  @ApiProperty({
    description: 'Передняя левая карта двери',
    example: ['string']
  })
  @Expose()
  public frontLeftDoorCard: string[];

  @ApiProperty({
    description: 'Водительское сиденье',
    example: ['string']
  })
  @Expose()
  public driversSeat: string[];

  @ApiProperty({
    description: 'Ковер салона',
    example: ['string']
  })
  @Expose()
  public salonCarpet: string[];

  @ApiProperty({
    description: 'Торпеда',
    example: ['string']
  })
  @Expose()
  public torpedo: string[];

  @ApiProperty({
    description: 'Потолок',
    example: ['string']
  })
  @Expose()
  public ceiling: string[];

  @ApiProperty({
    description: 'Задняя левая карта двери',
    example: ['string']
  })
  @Expose()
  public backLeftDoorCard: string[];

  @ApiProperty({
    description: 'Заднее сиденье',
    example: ['string']
  })
  @Expose()
  public backSeat: string[];

  @ApiProperty({
    description: 'Задняя правая карта двери',
    example: ['string']
  })
  @Expose()
  public backRightDoorCard: string[];
  
  @ApiProperty({
    description: 'Передняя правая карта двери',
    example: ['string']
  })
  @Expose()
  public frontRightDoorCard: string[];

  @ApiProperty({
    description: 'Пассажирское сиденье',
    example: ['string']
  })
  @Expose()
  public passengerSeat: string[];

  @ApiProperty({
    description: 'Спальное отделение',
    example: ['string']
  })
  @Expose()
  public sleepingCompartment: string[];

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  @Expose()
  public addElementInterior: AddElementInterior[];
}