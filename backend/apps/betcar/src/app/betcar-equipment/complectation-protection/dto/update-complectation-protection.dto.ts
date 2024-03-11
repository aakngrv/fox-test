import { ApiProperty } from '@nestjs/swagger';

export class UpdateComplectationProtectionDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  public reportId: number;
  
  @ApiProperty({
    description: 'Метка',
    example: false
  })
  public label: boolean;

  @ApiProperty({
    description: 'Иммобилайзер',
    example: false
  })
  public immobilizer: boolean;

  @ApiProperty({
    description: 'Центральный замок',
    example: false
  })
  public centralLocking: boolean;

  @ApiProperty({
    description: 'Авторская охранная система',
    example: false
  })
  public authorsSecuritySystem: boolean;

  @ApiProperty({
    description: 'Датчик проникновения в салон',
    example: false
  })
  public interiorIntrusionSensor: boolean;

  @ApiProperty({
    description: 'Сигнализация',
    example: "string"
  })
  public signaling: string;
}