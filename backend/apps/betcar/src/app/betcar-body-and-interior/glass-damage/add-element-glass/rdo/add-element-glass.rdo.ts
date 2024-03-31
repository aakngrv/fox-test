import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AddElementGlassRdo {
  
  @ApiProperty({
    description: 'ID дополнительно элемента',
    example: 1
  })
  @Expose()
  public addElementGlassId: number;

  @ApiProperty({
    description: 'ID повреждений стекол',
    example: 1
  })
  @Expose()
  public glassDamageId: number;
  
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
