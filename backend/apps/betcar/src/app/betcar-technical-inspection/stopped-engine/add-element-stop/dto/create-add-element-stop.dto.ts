import { ApiProperty } from '@nestjs/swagger';

export class CreateAddElementStopDto {
  
  @ApiProperty({
    description: 'ID остановленного двигателя',
    example: 1
  })
  public stoppedEngineId: number;

  @ApiProperty({
    description: 'Название элемента',
    example: 'string'
  })
  public name: string;

  @ApiProperty({
    description: 'Запотевание',
    example: ['string']
  })
  public fogging: string[];

  @ApiProperty({
    description: 'Фото',
    example: ['string']
  })
  public photo: string[];

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public comment: string;
}
