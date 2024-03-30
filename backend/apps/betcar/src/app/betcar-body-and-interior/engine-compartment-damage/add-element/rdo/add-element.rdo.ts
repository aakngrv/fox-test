import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AddElementRdo {
  
  @ApiProperty({
    description: 'ID дополнительно элемента',
    example: '1'
  })
  @Expose()
  public addElementId: number;

  @ApiProperty({
    description: 'ID повреждений двигателя',
    example: '1'
  })
  @Expose()
  public engineCompartmentDamageId: number;
  
  @ApiProperty({
    description: 'Название элемента',
    example: 'string'
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: 'Информация',
    example: ['string']
  })
  @Expose()
  public info: string[];
}