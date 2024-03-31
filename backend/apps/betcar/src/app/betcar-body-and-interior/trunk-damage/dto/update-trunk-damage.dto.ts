import { ApiProperty } from '@nestjs/swagger';

export class UpdateTrunkDamageDto {
  
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
    description: 'Обшивка крышки',
    example: ['string']
  })
  public coverTrim: string[]; 

  @ApiProperty({
    description: 'Ковролин пола',
    example: ['string']
  })
  public carpetFloor: string[]; 

  @ApiProperty({
    description: 'Обшивка правая',
    example: ['string']
  })
  public rightTrim: string[]; 

  @ApiProperty({
    description: 'Правый стакан',
    example: ['string']
  })
  public rightGlass: string[]; 

  @ApiProperty({
    description: 'Обшивка левая',
    example: ['string']
  })
  public leftTrim: string[]; 

  @ApiProperty({
    description: 'Левый стакан',
    example: ['string']
  })
  public leftGlass: string[]; 

  @ApiProperty({
    description: 'Обшивка спинки сиденья',
    example: ['string']
  })
  public seatBackTrim: string[]; 

  @ApiProperty({
    description: 'Ниша запасного колеса',
    example: ['string']
  })
  public spareWheelWell: string[]; 

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  public addElementTrunk: number[];
}