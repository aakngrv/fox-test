import { ApiProperty } from '@nestjs/swagger';

export class CreateLeftSideDamageDto {
  
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
    description: 'Переднее крыло',
    example: ['string']
  })
  public leftFrontFender: string[]; 

  @ApiProperty({
    description: 'Передняя стойка',
    example: ['string']
  })
  public leftFrontPillar: string[]; 

  @ApiProperty({
    description: 'Передняя дверь',
    example: ['string']
  })
  public leftFrontDoor: string[]; 

  @ApiProperty({
    description: 'Центральная стойка',
    example: ['string']
  })
  public leftCenterPillar: string[];
  
  @ApiProperty({
    description: 'Задняя дверь',
    example: ['string']
  })
  public leftRearDoor: string[]; 

  @ApiProperty({
    description: 'Задняя стойка',
    example: ['string']
  })
  public leftRearPillar: string[]; 

  @ApiProperty({
    description: 'Заднее крыло',
    example: ['string']
  })
  public leftRearFender: string[]; 

  @ApiProperty({
    description: 'Левое зеркало',
    example: ['string']
  })
  public leftMirror: string[]; 

  @ApiProperty({
    description: 'Порог',
    example: ['string']
  })
  public leftThreshold: string[]; 

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  public addElementLeft: number[];
}