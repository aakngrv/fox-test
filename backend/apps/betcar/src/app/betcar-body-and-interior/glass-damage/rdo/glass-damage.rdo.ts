import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { AddElementGlass } from '@backend/shared/shared-types';

export class GlassDamageRdo {
  
  @ApiProperty({
    description: 'ID повреждений стекол',
    example: 1
  })
  @Expose()
  public glassDamageId: number;

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
    description: 'Лобовое стекло',
    example: ['string']
  })
  @Expose()
  public windshield: string[];

  @ApiProperty({
    description: 'Левое переднее',
    example: ['string']
  })
  @Expose()
  public leftFrontGlass: string[];

  @ApiProperty({
    description: 'Левое заднее',
    example: ['string']
  })
  @Expose()
  public leftRearGlass: string[];

  @ApiProperty({
    description: 'Заднее стекло',
    example: ['string']
  })
  @Expose()
  public rearGlass: string[];

  @ApiProperty({
    description: 'Правое переднее',
    example: ['string']
  })
  @Expose()
  public rightFrontGlass: string[];

  @ApiProperty({
    description: 'Правое заднее',
    example: ['string']
  })
  @Expose()
  public rightRearGlass: string[];

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  @Expose()
  public addElementGlass: AddElementGlass[];
}