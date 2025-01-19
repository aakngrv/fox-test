import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PaymentRdo {

  @ApiProperty({
    description: 'Ссылка на оплату',
    example: ''
  })
  @Expose()
  public paymentLink: string;
}
