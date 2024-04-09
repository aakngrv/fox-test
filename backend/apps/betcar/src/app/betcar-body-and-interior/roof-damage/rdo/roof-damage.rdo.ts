import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { AddElementRoof } from '@backend/shared/shared-types';

export class RoofDamageRdo {
  
  @ApiProperty({
    description: 'ID повреждений крыши',
    example: 1
  })
  @Expose()
  public roofDamageId: number;

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
    description: 'Рейлинги',
    example: ['string']
  })
  @Expose()
  public roofRails: string[];

  @ApiProperty({
    description: 'Крыша',
    example: ['string']
  })
  @Expose()
  public roof: string[];

  @ApiProperty({
    description: 'Люк',
    example: ['string']
  })
  @Expose()
  public luke: string[];

  @ApiProperty({
    description: 'Панорама',
    example: ['string']
  })
  @Expose()
  public panorama: string[];

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  @Expose()
  public addElementRoof: AddElementRoof[];
}