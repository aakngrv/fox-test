import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AddElementRoofRdo {
  
  @ApiProperty({
    description: 'ID дополнительно элемента',
    example: 1
  })
  @Expose()
  public addElementRoofId: number;

  @ApiProperty({
    description: 'ID повреждений крыши',
    example: 1
  })
  @Expose()
  public roofDamageId: number;
  
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
