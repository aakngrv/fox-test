import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { AddElementLeft } from '@backend/shared/shared-types';

export class LeftSideDamageRdo {
  
  @ApiProperty({
    description: 'ID повреждений левой части',
    example: 1
  })
  @Expose()
  public leftSideDamageId: number;

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
    description: 'Переднее крыло',
    example: ['string']
  })
  @Expose()
  public leftFrontFender: string[]; 

  @ApiProperty({
    description: 'Передняя стойка',
    example: ['string']
  })
  @Expose()
  public leftFrontPillar: string[]; 

  @ApiProperty({
    description: 'Передняя дверь',
    example: ['string']
  })
  @Expose()
  public leftFrontDoor: string[]; 

  @ApiProperty({
    description: 'Центральная стойка',
    example: ['string']
  })
  @Expose()
  public leftCenterPillar: string[];
  
  @ApiProperty({
    description: 'Задняя дверь',
    example: ['string']
  })
  @Expose()
  public leftRearDoor: string[]; 

  @ApiProperty({
    description: 'Задняя стойка',
    example: ['string']
  })
  @Expose()
  public leftRearPillar: string[]; 

  @ApiProperty({
    description: 'Заднее крыло',
    example: ['string']
  })
  @Expose()
  public leftRearFender: string[]; 

  @ApiProperty({
    description: 'Левое зеркало',
    example: ['string']
  })
  @Expose()
  public leftMirror: string[]; 

  @ApiProperty({
    description: 'Порог',
    example: ['string']
  })
  @Expose()
  public leftThreshold: string[]; 

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  @Expose()
  public addElementLeft: AddElementLeft[];
}