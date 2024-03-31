import { ApiProperty } from '@nestjs/swagger';

export class CreateGlassDamageDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  public reportId: number;
  
  @ApiProperty({
    description: 'Без повреждений',
    example: false
  })
  public withoutDamage: boolean;
  
  @ApiProperty({
    description: 'Лобовое стекло',
    example: ['string']
  })
  public windshield: string[];

  @ApiProperty({
    description: 'Левое переднее',
    example: ['string']
  })
  public leftFrontGlass: string[];

  @ApiProperty({
    description: 'Левое заднее',
    example: ['string']
  })
  public leftRearGlass: string[];

  @ApiProperty({
    description: 'Заднее стекло',
    example: ['string']
  })
  public rearGlass: string[];

  @ApiProperty({
    description: 'Правое переднее',
    example: ['string']
  })
  public rightFrontGlass: string[];

  @ApiProperty({
    description: 'Правое заднее',
    example: ['string']
  })
  public rightRearGlass: string[];

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  public addElementGlass: number[];
}