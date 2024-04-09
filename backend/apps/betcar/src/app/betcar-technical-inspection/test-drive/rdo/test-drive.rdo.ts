import { ApiProperty } from '@nestjs/swagger';
import { Expose } from "class-transformer";

export class TestDriveRdo {

  @ApiProperty({
    description: 'ID видео обзора',
    example: 1
  })
  @Expose()
  public testDriveId: number;
  
  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  @Expose()
  public reportId: number;

  @ApiProperty({
    description: 'Tест драйв',
    example: false
  })
  @Expose()
  public testDrive: boolean;

  @ApiProperty({
    description: 'Подвеска',
    example: false
  })
  @Expose()
  public suspension: boolean;

  @ApiProperty({
    description: 'Двигатель',
    example: false
  })
  @Expose()
  public engine: boolean;

  @ApiProperty({
    description: 'Коробка передач',
    example: false
  })
  @Expose()
  public transmission: boolean;

  @ApiProperty({
    description: 'Рулевое управление',
    example: false
  })
  @Expose()
  public steering: boolean;

  @ApiProperty({
    description: 'Тормазная система',
    example: false
  })
  @Expose()
  public brakeSystem: boolean;

  @ApiProperty({
    description: 'Стояночный тормоз',
    example: false
  })
  @Expose()
  public parkingBrake: boolean;

  @ApiProperty({
    description: 'Выхлопная система',
    example: false
  })
  @Expose()
  public exhaustSystem: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  @Expose()
  public comment: string;
}