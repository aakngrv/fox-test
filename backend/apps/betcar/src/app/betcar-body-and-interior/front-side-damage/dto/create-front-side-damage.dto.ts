import { ApiProperty } from '@nestjs/swagger';

export class CreateFrontSideDamageDto {
  
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
    description: 'Противотуманные фары',
    example: ["string"]
  })
  public fogLights: string[]; 

  @ApiProperty({
    description: 'Решетка радиатора',
    example: ["string"]
  })
  public radiatorGrille: string[]; 

  @ApiProperty({
    description: 'Бампер',
    example: ["string"]
  })
  public frontBumper: string[]; 

  @ApiProperty({
    description: 'Правая фара',
    example: ["string"]
  })
  public rightHeadlight: string[]; 

  @ApiProperty({
    description: 'Левая фара',
    example: ["string"]
  })
  public leftHeadlight: string[]; 

  @ApiProperty({
    description: 'Капот',
    example: ["string"]
  })
  public hood: string[]; 

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  public addElementFront: number[];
}