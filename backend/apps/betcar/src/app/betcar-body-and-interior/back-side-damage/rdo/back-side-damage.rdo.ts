import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { AddElementBack } from '@backend/shared/shared-types';


export class BackSideDamageRdo {
  
  @ApiProperty({
    description: 'ID повреждений левой части',
    example: 1
  })
  @Expose()
  public backSideDamageId: number;

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
    description: 'Крышка багажника',
    example: ['string']
  })
  @Expose()
  public tailgate: string[]; 

  @ApiProperty({
    description: 'Задний бампер',
    example: ['string']
  })
  @Expose()
  public rearBumper: string[]; 

  @ApiProperty({
    description: 'Левый фонарь',
    example: ['string']
  })
  @Expose()
  public leftLamp: string[]; 

  @ApiProperty({
    description: 'Правый фонарь',
    example: ['string']
  })
  @Expose()
  public rightLamp: string[]; 

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  @Expose()
  public addElementBack: AddElementBack[];
}