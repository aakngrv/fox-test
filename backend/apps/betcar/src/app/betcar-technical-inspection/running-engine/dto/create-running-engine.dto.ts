import { ApiProperty } from '@nestjs/swagger';

export class CreateRunningEngineDto {

  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  public reportId: number;

  @ApiProperty({
    description: 'Двигатель не запускается',
    example: false
  })
  public engineNotStart: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public comment: string;

  @ApiProperty({
    description: 'Видео запуска двигателя',
    example: 'string'
  })
  public engineVideo: string;
  
  @ApiProperty({
    description: 'Все системы в порядке',
    example: false
  })
  public allSystemOkElectric: boolean;

  @ApiProperty({
    description: 'Все системы в порядке',
    example: false
  })
  public allSystemOkMechanical: boolean;
  
  @ApiProperty({
    description: 'Новый элемент эл систем',
    example: [1]
  })
  public addElementElectrical: number[];

  @ApiProperty({
    description: 'Новый элемент мех систем',
    example: [1]
  })
  public addElementMechanical: number[];
}