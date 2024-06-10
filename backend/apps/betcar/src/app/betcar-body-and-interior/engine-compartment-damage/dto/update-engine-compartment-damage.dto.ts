import { ApiProperty } from '@nestjs/swagger';

export class UpdateEngineCompartmentDamageDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  public reportId: number;
  
  @ApiProperty({
    description: 'Без повреждений',
    example: false
  })
  public withoutDamage: boolean;

  @ApiProperty({
    description: 'Левый лонжерон',
    example: ['string']
  })
  public leftSideMember: string[];

  @ApiProperty({
    description: 'Левый стакан',
    example: ['string']
  })
  public leftGlass: string[];

  @ApiProperty({
    description: 'Правый лонжерон',
    example: ['string']
  })
  public rightSideMember: string[];

  @ApiProperty({
    description: 'Правый стакан',
    example: ['string']
  })
  public rightGlass: string[];

  @ApiProperty({
    description: 'Петли капота',
    example: ['string']
  })
  public hoodHinges: string[]; 

  @ApiProperty({
    description: 'Телевизор',
    example: ['string']
  })
  public televisor: string[];

  @ApiProperty({
    description: 'Моторный щит',
    example: ['string']
  })
  public motorShield: string[];

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  public addElement: number[];
}