import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { AddElement } from '@backend/shared/shared-types';

export class EngineCompartmentDamageRdo {
  
  @ApiProperty({
    description: 'ID повреждений моторного отсека',
    example: 1
  })
  @Expose()
  public engineCompartmentDamageId: number;

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
    description: 'Левый лонжерон',
    example: ['string']
  })
  @Expose()
  public leftSideMember: string[];

  @ApiProperty({
    description: 'Левый стакан',
    example: ['string']
  })
  @Expose()
  public leftGlass: string[];

  @ApiProperty({
    description: 'Правый лонжерон',
    example: ['string']
  })
  @Expose()
  public rightSideMember: string[];

  @ApiProperty({
    description: 'Правый стакан',
    example: ['string']
  })
  @Expose()
  public rightGlass: string[];

  @ApiProperty({
    description: 'Петли капота',
    example: ['string']
  })
  @Expose()
  public hoodHinges: string[]; 

  @ApiProperty({
    description: 'Телевизор',
    example: ['string']
  })
  @Expose()
  public televisor: string[];

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  @Expose()
  public addElement: AddElement[];
}