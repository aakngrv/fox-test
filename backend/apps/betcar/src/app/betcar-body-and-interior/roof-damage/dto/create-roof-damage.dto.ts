import { ApiProperty } from '@nestjs/swagger';

export class CreateRoofDamageDto {
  
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
    description: 'Рейлинги',
    example: ['string']
  })
  public roofRails: string[];

  @ApiProperty({
    description: 'Крыша',
    example: ['string']
  })
  public roof: string[];

  @ApiProperty({
    description: 'Люк',
    example: ['string']
  })
  public luke: string[];

  @ApiProperty({
    description: 'Панорама',
    example: ['string']
  })
  public panorama: string[];

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  public addElementRoof: number[];
}