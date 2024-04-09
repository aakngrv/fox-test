import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ComplectationHeadlightsRdo {
  
  @ApiProperty({
    description: 'ID фар автомобиля',
    example: '1'
  })
  @Expose()
  public complectationHeadlightsId: number;

  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  @Expose()
  public reportId: number;
  
  @ApiProperty({
    description: 'Датчик света',
    example: false
  })
  @Expose()
  public lightSensor: boolean;

  @ApiProperty({
    description: 'Датчик дождя',
    example: false
  })
  @Expose()
  public rainSensor: boolean;

  @ApiProperty({
    description: 'Омыватель фар',
    example: false
  })
  @Expose()
  public headlightWasher: boolean;

  @ApiProperty({
    description: 'Противотуманные фары',
    example: false
  })
  @Expose()
  public fogLights: boolean;

  @ApiProperty({
    description: 'Автоматический корректор фар',
    example: false
  })
  @Expose()
  public automaticHeadlightLeveling: boolean;

  @ApiProperty({
    description: 'Система адаптивного освещения',
    example: false
  })
  @Expose()
  public adaptivLlightingSystem: boolean;

  @ApiProperty({
    description: 'Система управления дальним светом',
    example: false
  })
  @Expose()
  public highBeamControlSystem: boolean;

  @ApiProperty({
    description: 'Фары',
    example: "string"
  })
  @Expose()
  public headlights: string;
}