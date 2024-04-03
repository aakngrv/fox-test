import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddElementLeftDto {
  
  @ApiProperty({
    description: 'ID доп элемента',
    example: 1
  })
  public leftSideDamageId: number;
  
  @ApiProperty({
    description: 'Название элемента',
    example: 'string'
  })
  public name: string;

  @ApiProperty({
    description: 'Информация',
    example: ['string']
  })
  public info: string[];
}
