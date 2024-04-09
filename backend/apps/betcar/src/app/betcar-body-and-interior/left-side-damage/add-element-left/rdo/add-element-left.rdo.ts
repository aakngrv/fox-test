import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AddElementLeftRdo {
  
  @ApiProperty({
    description: 'ID дополнительно элемента',
    example: 1
  })
  @Expose()
  public addElementLeftId: number;

  @ApiProperty({
    description: 'ID повреждений передней части',
    example: 1
  })
  @Expose()
  public leftSideDamageId: number;
  
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
