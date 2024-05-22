import { ApiProperty } from '@nestjs/swagger';

export class UpdatePaintworkInspectionDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  public reportId: number;
  
  @ApiProperty({
    description: 'Заводской окрас',
    example: false
  })
  public factoryColor: boolean;

  @ApiProperty({
    description: 'Кузов оклее пленкой',
    example: false
  })
  public bodyInFilm: boolean;

  @ApiProperty({
    description: 'Крыша',
    example: ["string"]
  })
  public roof: string[];

  @ApiProperty({
    description: 'Крышка багажника',
    example: ["string"]
  })
  public trunkLid: string[];

  @ApiProperty({
    description: 'Правое заднее крыло',
    example: ["string"]
  })
  public rightRearFender: string[];

  @ApiProperty({
    description: 'Правая задняя стойка',
    example: ["string"]
  })
  public rightRearPillar: string[];

  @ApiProperty({
    description: 'Правая задняя дверь',
    example: ["string"]
  })
  public rightRearDoor: string[];

  @ApiProperty({
    description: 'Правый проем задней двери',
    example: ["string"]
  })
  public rightRearDoorOpening: string[];

  @ApiProperty({
    description: 'Правая центральная стойка',
    example: ["string"]
  })
  public rightCenterPillar: string[];

  @ApiProperty({
    description: 'Правый порог',
    example: ["string"]
  })
  public rightThreshold: string[];

  @ApiProperty({
    description: 'Правая передняя дверь',
    example: ["string"]
  })
  public rightFrontDoor: string[];

  @ApiProperty({
    description: 'Правый проем передней двери',
    example: ["string"]
  })
  public rightFrontDoorOpening: string[];

  @ApiProperty({
    description: 'Правая передняя стойка',
    example: ["string"]
  })
  public rightFrontPillar: string[];

  @ApiProperty({
    description: 'Правое переднее крыло',
    example: ["string"]
  })
  public rightFrontFender: string[];

  @ApiProperty({
    description: 'Капот',
    example: ["string"]
  })
  public hood: string[];

  @ApiProperty({
    description: 'Левое переднее крыло',
    example: ["string"]
  })
  public leftFrontFender: string[];

  @ApiProperty({
    description: 'Левая передняя стойка',
    example: ["string"]
  })
  public leftFrontPillar: string[];

  @ApiProperty({
    description: 'Левая передняя дверь',
    example: ["string"]
  })
  public leftFrontDoor: string[];

  @ApiProperty({
    description: 'Левый проем передней двери',
    example: ["string"]
  })
  public leftFrontDoorOpening: string[];

  @ApiProperty({
    description: 'Левая центральная стойка',
    example: ["string"]
  })
  public leftCenterPillar: string[];

  @ApiProperty({
    description: 'Левый порог',
    example: ["string"]
  })
  public leftThreshold: string[];

  @ApiProperty({
    description: 'Левая задняя дверь',
    example: ["string"]
  })
  public leftRearDoor: string[];

  @ApiProperty({
    description: 'Левый проем задней двери',
    example: ["string"]
  })
  public leftRearDoorOpening: string[];

  @ApiProperty({
    description: 'Левая задняя стойка',
    example: ["string"]
  })
  public leftRearPillar: string[];

  @ApiProperty({
    description: 'Левое заднее крыло',
    example: ["string"]
  })
  public leftRearFender: string[];
}