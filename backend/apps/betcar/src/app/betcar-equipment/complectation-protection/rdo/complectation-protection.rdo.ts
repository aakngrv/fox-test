import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ComplectationProtectionRdo {
  
  @ApiProperty({
    description: 'ID защиты автомобиля',
    example: '1'
  })
  @Expose()
  public complectationProtectionId: number;

  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  @Expose()
  public reportId: number;
  
  @ApiProperty({
    description: 'Метка',
    example: false
  })
  @Expose()
  public label: boolean;

  @ApiProperty({
    description: 'Иммобилайзер',
    example: false
  })
  @Expose()
  public immobilizer: boolean;

  @ApiProperty({
    description: 'Центральный замок',
    example: false
  })
  @Expose()
  public centralLocking: boolean;

  @ApiProperty({
    description: 'Авторская охранная система',
    example: false
  })
  @Expose()
  public authorsSecuritySystem: boolean;

  @ApiProperty({
    description: 'Датчик проникновения в салон',
    example: false
  })
  @Expose()
  public interiorIntrusionSensor: boolean;

  @ApiProperty({
    description: 'Сигнализация',
    example: "string"
  })
  @Expose()
  public signaling: string;
}