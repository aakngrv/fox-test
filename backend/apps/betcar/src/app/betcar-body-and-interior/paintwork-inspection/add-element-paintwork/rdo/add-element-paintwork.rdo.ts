import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AddElementPaintworkRdo {
  
  @ApiProperty({
    description: 'ID дополнительного элемента',
    example: 1
  })
  @Expose()
  public addElementPainworkId: number;

  @ApiProperty({
    description: 'ID повреждений передней части',
    example: 1
  })
  @Expose()
  public paintworkInspectionId: number;
  
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
