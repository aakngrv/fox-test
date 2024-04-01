import { ApiProperty } from '@nestjs/swagger';

export class UpdateDiscDamageDto {
  
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
    description: 'Левое переднее',
    example: ['string']
  })
  public leftFrontDisc: string[];

  @ApiProperty({
    description: 'Левое заднее',
    example: ['string']
  })
  public leftRearDisc: string[];

  @ApiProperty({
    description: 'Правое переднее',
    example: ['string']
  })
  public rightFrontDisc: string[];

  @ApiProperty({
    description: 'Правое заднее',
    example: ['string']
  })
  public rightRearDisc: string[];

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  public addElementDisc: number[];
}