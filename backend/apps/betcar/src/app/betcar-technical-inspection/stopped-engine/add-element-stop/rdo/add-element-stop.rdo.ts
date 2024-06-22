import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AddElementStopRdo {
  
  @ApiProperty({
    description: 'ID дополнительно элемента',
    example: 1
  })
  @Expose()
  public addElementStopId: number;

  @ApiProperty({
    description: 'ID остановленного двигателя',
    example: 1
  })
  @Expose()
  public stoppedEngineId: number;

  @ApiProperty({
    description: 'Название элемента',
    example: 'string'
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: 'Запотевание',
    example: ['string']
  })
  @Expose()
  public fogging: string[];

  @ApiProperty({
    description: 'Фото',
    example: ['string']
  })
  @Expose()
  public photo: string[];

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  @Expose()
  public comment: string;
}
