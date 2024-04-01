import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AddElementDiscRdo {
  
  @ApiProperty({
    description: 'ID дополнительно элемента',
    example: 1
  })
  @Expose()
  public addElementDiscId: number;

  @ApiProperty({
    description: 'ID повреждений колес',
    example: 1
  })
  @Expose()
  public discDamageId: number;
  
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
