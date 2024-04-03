import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { AddElementTrunk } from '@backend/shared/shared-types';

export class TrunkDamageRdo {
  
  @ApiProperty({
    description: 'ID повреждений багажника',
    example: 1
  })
  @Expose()
  public trunkDamageId: number;

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
    description: 'Обшивка крышки',
    example: ['string']
  })
  @Expose()
  public coverTrim: string[]; 

  @ApiProperty({
    description: 'Ковролин пола',
    example: ['string']
  })
  @Expose()
  public carpetFloor: string[]; 

  @ApiProperty({
    description: 'Обшивка правая',
    example: ['string']
  })
  @Expose()
  public rightTrim: string[]; 

  @ApiProperty({
    description: 'Правый стакан',
    example: ['string']
  })
  @Expose()
  public rightGlass: string[]; 

  @ApiProperty({
    description: 'Обшивка левая',
    example: ['string']
  })
  @Expose()
  public leftTrim: string[]; 

  @ApiProperty({
    description: 'Левый стакан',
    example: ['string']
  })
  @Expose()
  public leftGlass: string[]; 

  @ApiProperty({
    description: 'Обшивка спинки сиденья',
    example: ['string']
  })
  @Expose()
  public seatBackTrim: string[]; 

  @ApiProperty({
    description: 'Ниша запасного колеса',
    example: ['string']
  })
  @Expose()
  public spareWheelWell: string[]; 

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  @Expose()
  public addElementTrunk: AddElementTrunk[];
}
