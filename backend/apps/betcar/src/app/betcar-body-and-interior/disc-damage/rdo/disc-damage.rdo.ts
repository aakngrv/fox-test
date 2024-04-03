import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { AddElementDisc } from '@backend/shared/shared-types';

export class DiscDamageRdo {
  
  @ApiProperty({
    description: 'ID повреждений колес',
    example: 1
  })
  @Expose()
  public discDamageId: number;

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
    description: 'Левое переднее',
    example: ['string']
  })
  @Expose()
  public leftFrontDisc: string[];

  @ApiProperty({
    description: 'Левое заднее',
    example: ['string']
  })
  @Expose()
  public leftRearDisc: string[];

  @ApiProperty({
    description: 'Правое переднее',
    example: ['string']
  })
  @Expose()
  public rightFrontDisc: string[];

  @ApiProperty({
    description: 'Правое заднее',
    example: ['string']
  })
  @Expose()
  public rightRearDisc: string[];

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  @Expose()
  public addElementDisc: AddElementDisc[];
}