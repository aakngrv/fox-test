import { ApiProperty } from '@nestjs/swagger';

export class CreateInteriorDamageDto {

  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  public reportId: number;

  @ApiProperty({
    description: 'Без повреждений',
    example: false
  })
  public withoutDamage: boolean;

  @ApiProperty({
    description: 'Передняя левая карта двери',
    example: ['string']
  })
  public frontLeftDoorCard: string[];

  @ApiProperty({
    description: 'Водительское сиденье',
    example: ['string']
  })
  public driversSeat: string[];

  @ApiProperty({
    description: 'Ковер салона',
    example: ['string']
  })
  public salonCarpet: string[];

  @ApiProperty({
    description: 'Торпеда',
    example: ['string']
  })
  public torpedo: string[];

  @ApiProperty({
    description: 'Потолок',
    example: ['string']
  })
  public ceiling: string[];

  @ApiProperty({
    description: 'Задняя левая карта двери',
    example: ['string']
  })
  public backLeftDoorCard: string[];

  @ApiProperty({
    description: 'Заднее сиденье',
    example: ['string']
  })
  public backSeat: string[];

  @ApiProperty({
    description: 'Задняя правая карта двери',
    example: ['string']
  })
  public backRightDoorCard: string[];

  @ApiProperty({
    description: 'Передняя правая карта двери',
    example: ['string']
  })
  public frontRightDoorCard: string[];

  @ApiProperty({
    description: 'Пассажирское сиденье',
    example: ['string']
  })
  public passengerSeat: string[];

  @ApiProperty({
    description: 'Спальное отделение',
    example: ['string']
  })
  public sleepingCompartment: string[];

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  public addElementInterior: number[];
}