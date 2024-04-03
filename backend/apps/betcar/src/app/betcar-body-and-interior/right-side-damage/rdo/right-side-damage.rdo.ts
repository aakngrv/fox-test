import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { AddElementRight } from '@backend/shared/shared-types';

export class RightSideDamageRdo {
  
  @ApiProperty({
    description: 'ID повреждений правой части',
    example: 1
  })
  @Expose()
  public rightSideDamageId: number;

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
  public rightFrontFender: string[]; 

  @ApiProperty({
    description: 'Передняя стойка',
    example: ['string']
  })
  @Expose()
  public rightFrontPillar: string[]; 

  @ApiProperty({
    description: 'Передняя дверь',
    example: ['string']
  })
  @Expose()
  public rightFrontDoor: string[]; 

  @ApiProperty({
    description: 'Центральная стойка',
    example: ['string']
  })
  @Expose()
  public rightCenterPillar: string[];
  
  @ApiProperty({
    description: 'Задняя дверь',
    example: ['string']
  })
  @Expose()
  public rightRearDoor: string[]; 

  @ApiProperty({
    description: 'Задняя стойка',
    example: ['string']
  })
  @Expose()
  public rightRearPillar: string[]; 

  @ApiProperty({
    description: 'Заднее крыло',
    example: ['string']
  })
  @Expose()
  public rightRearFender: string[]; 

  @ApiProperty({
    description: 'Левое зеркало',
    example: ['string']
  })
  @Expose()
  public rightMirror: string[]; 

  @ApiProperty({
    description: 'Порог',
    example: ['string']
  })
  @Expose()
  public rightThreshold: string[]; 

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  @Expose()
  public addElementRight: AddElementRight[];
}