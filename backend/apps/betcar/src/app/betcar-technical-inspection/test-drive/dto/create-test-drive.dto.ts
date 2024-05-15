import { ApiProperty } from '@nestjs/swagger';

export class CreateTestDriveDto {

  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  public reportId: number;

  @ApiProperty({
    description: 'Все системы работают исправно',
    example: false
  })
  public allSystemOk: boolean;

  @ApiProperty({
    description: 'Подвеска',
    example: false
  })
  public suspension: boolean;

  @ApiProperty({
    description: 'Двигатель',
    example: false
  })
  public engine: boolean;

  @ApiProperty({
    description: 'Коробка передач',
    example: false
  })
  public transmission: boolean;

  @ApiProperty({
    description: 'Рулевое управление',
    example: false
  })
  public steering: boolean;

  @ApiProperty({
    description: 'Тормазная система',
    example: false
  })
  public brakeSystem: boolean;

  @ApiProperty({
    description: 'Стояночный тормоз',
    example: false
  })
  public parkingBrake: boolean;

  @ApiProperty({
    description: 'Выхлопная система',
    example: false
  })
  public exhaustSystem: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public comment: string;
}