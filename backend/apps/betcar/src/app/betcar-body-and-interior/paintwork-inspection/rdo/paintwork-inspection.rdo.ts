import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class PaintworkInspectionRdo {
  
  @ApiProperty({
    description: 'ID "Проверка ЛКП" ',
    example: '1'
  })
  @Expose()
  public paintworkInspectionId: number;
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  @Expose()
  public reportId: number;
  
  @ApiProperty({
    description: 'Заводской окрас',
    example: false
  })
  @Expose()
  public factoryColor: boolean;

  @ApiProperty({
    description: 'Кузов оклее пленкой',
    example: false
  })
  @Expose()
  public bodyInFilm: boolean;

  @ApiProperty({
    description: 'Крыша',
    example: ["string"]
  })
  @Expose()
  public roof: string[];

  @ApiProperty({
    description: 'Крышка багажника',
    example: ["string"]
  })
  @Expose()
  public trunkLid: string[];

  @ApiProperty({
    description: 'Правое заднее крыло',
    example: ["string"]
  })
  @Expose()
  public rightRearFender: string[];

  @ApiProperty({
    description: 'Правая задняя стойка',
    example: ["string"]
  })
  @Expose()
  public rightRearPillar: string[];

  @ApiProperty({
    description: 'Правая задняя дверь',
    example: ["string"]
  })
  @Expose()
  public rightRearDoor: string[];

  @ApiProperty({
    description: 'Правый проем задней двери',
    example: ["string"]
  })
  @Expose()
  public rightRearDoorOpening: string[];

  @ApiProperty({
    description: 'Правая центральная стойка',
    example: ["string"]
  })
  @Expose()
  public rightCenterPillar: string[];

  @ApiProperty({
    description: 'Правый порог',
    example: ["string"]
  })
  @Expose()
  public rightThreshold: string[];

  @ApiProperty({
    description: 'Правая передняя дверь',
    example: ["string"]
  })
  @Expose()
  public rightFrontDoor: string[];

  @ApiProperty({
    description: 'Правый проем передней двери',
    example: ["string"]
  })
  @Expose()
  public rightFrontDoorOpening: string[];

  @ApiProperty({
    description: 'Правая передняя стойка',
    example: ["string"]
  })
  @Expose()
  public rightFrontPillar: string[];

  @ApiProperty({
    description: 'Правое переднее крыло',
    example: ["string"]
  })
  @Expose()
  public rightFrontFender: string[];

  @ApiProperty({
    description: 'Капот',
    example: ["string"]
  })
  @Expose()
  public hood: string[];

  @ApiProperty({
    description: 'Левое переднее крыло',
    example: ["string"]
  })
  @Expose()
  public leftFrontFender: string[];

  @ApiProperty({
    description: 'Левая передняя стойка',
    example: ["string"]
  })
  @Expose()
  public leftFrontPillar: string[];

  @ApiProperty({
    description: 'Левая передняя дверь',
    example: ["string"]
  })
  @Expose()
  public leftFrontDoor: string[];

  @ApiProperty({
    description: 'Левый проем передней двери',
    example: ["string"]
  })
  @Expose()
  public leftFrontDoorOpening: string[];

  @ApiProperty({
    description: 'Левая центральная стойка',
    example: ["string"]
  })
  @Expose()
  public leftCenterPillar: string[];

  @ApiProperty({
    description: 'Левый порог',
    example: ["string"]
  })
  @Expose()
  public leftThreshold: string[];

  @ApiProperty({
    description: 'Левая задняя дверь',
    example: ["string"]
  })
  @Expose()
  public leftRearDoor: string[];

  @ApiProperty({
    description: 'Левый проем задней двери',
    example: ["string"]
  })
  @Expose()
  public leftRearDoorOpening: string[];

  @ApiProperty({
    description: 'Левая задняя стойка',
    example: ["string"]
  })
  @Expose()
  public leftRearPillar: string[];

  @ApiProperty({
    description: 'Левое заднее крыло',
    example: ["string"]
  })
  @Expose()
  public leftRearFender: string[];
}