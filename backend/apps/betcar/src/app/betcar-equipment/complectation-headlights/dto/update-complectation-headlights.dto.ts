import { ApiProperty } from '@nestjs/swagger';

export class UpdateComplectationHeadlightsDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  public reportId: number;
  
  @ApiProperty({
    description: 'Датчик света',
    example: false
  })
  public lightSensor: boolean;

  @ApiProperty({
    description: 'Датчик дождя',
    example: false
  })
  public rainSensor: boolean;

  @ApiProperty({
    description: 'Омыватель фар',
    example: false
  })
  public headlightWasher: boolean;

  @ApiProperty({
    description: 'Противотуманные фары',
    example: false
  })
  public fogLights: boolean;

  @ApiProperty({
    description: 'Автоматический корректор фар',
    example: false
  })
  public automaticHeadlightLeveling: boolean;

  @ApiProperty({
    description: 'Система адаптивного освещения',
    example: false
  })
  public adaptivLlightingSystem: boolean;

  @ApiProperty({
    description: 'Система управления дальним светом',
    example: false
  })
  public highBeamControlSystem: boolean;

  @ApiProperty({
    description: 'Фары',
    example: "string"
  })
  public headlights: string;
}