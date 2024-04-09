import { ApiProperty } from '@nestjs/swagger';

export class UpdateBackSideDamageDto {
  
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
    description: 'Крышка багажника',
    example: ['string']
  })
  public tailgate: string[]; 

  @ApiProperty({
    description: 'Задний бампер',
    example: ['string']
  })
  public rearBumper: string[]; 

  @ApiProperty({
    description: 'Левый фонарь',
    example: ['string']
  })
  public leftLamp: string[]; 

  @ApiProperty({
    description: 'Правый фонарь',
    example: ['string']
  })
  public rightLamp: string[]; 

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  public addElementBack: number[];
}