import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { AddElementFront } from '@backend/shared/shared-types';

export class FrontSideDamageRdo {
  
  @ApiProperty({
    description: 'ID повреждений передней части',
    example: 1
  })
  @Expose()
  public frontSideDamageId: number;

  @ApiProperty({
    description: 'ID отчета',
    example: '1'
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
    description: 'Противотуманные фары',
    example: ["string"]
  })
  @Expose()
  public fogLights: string[]; 

  @ApiProperty({
    description: 'Решетка радиатора',
    example: ["string"]
  })
  @Expose()
  public radiatorGrille: string[]; 

  @ApiProperty({
    description: 'Бампер',
    example: ["string"]
  })
  @Expose()
  public frontBumper: string[]; 

  @ApiProperty({
    description: 'Правая фара',
    example: ["string"]
  })
  @Expose()
  public rightHeadlight: string[]; 

  @ApiProperty({
    description: 'Левая фара',
    example: ["string"]
  })
  @Expose()
  public leftHeadlight: string[]; 

  @ApiProperty({
    description: 'Капот',
    example: ["string"]
  })
  @Expose()
  public hood: string[]; 

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  public addElementFront: AddElementFront[];
}