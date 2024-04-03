import { ApiProperty } from '@nestjs/swagger';

export class UpdateRightSideDamageDto {
  
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
  public rightFrontFender: string[]; 

  @ApiProperty({
    description: 'Передняя стойка',
    example: ['string']
  })
  public rightFrontPillar: string[]; 

  @ApiProperty({
    description: 'Передняя дверь',
    example: ['string']
  })
  public rightFrontDoor: string[]; 

  @ApiProperty({
    description: 'Центральная стойка',
    example: ['string']
  })
  public rightCenterPillar: string[];
  
  @ApiProperty({
    description: 'Задняя дверь',
    example: ['string']
  })
  public rightRearDoor: string[]; 

  @ApiProperty({
    description: 'Задняя стойка',
    example: ['string']
  })
  public rightRearPillar: string[]; 

  @ApiProperty({
    description: 'Заднее крыло',
    example: ['string']
  })
  public rightRearFender: string[]; 

  @ApiProperty({
    description: 'Правое зеркало',
    example: ['string']
  })
  public rightMirror: string[]; 

  @ApiProperty({
    description: 'Порог',
    example: ['string']
  })
  public rightThreshold: string[]; 

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  public addElementRight: number[];
}