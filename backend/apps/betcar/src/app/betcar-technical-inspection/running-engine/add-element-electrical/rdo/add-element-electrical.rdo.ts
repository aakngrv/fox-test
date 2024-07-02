import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AddElementElectricalRdo {
  
  @ApiProperty({
    description: 'ID дополнительно элемента',
    example: 1
  })
  @Expose()
  public addElementElectricalId: number;

  @ApiProperty({
    description: 'ID запущенного двигателя',
    example: 1
  })
  @Expose()
  public runningEngineId: number;

  @ApiProperty({
    description: 'Название элемента',
    example: 'string'
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  @Expose()
  public isCheck: boolean;

  @ApiProperty({
    description: 'Комментрарий',
    example: 'string'
  })
  @Expose()
  public comment: string;
}
