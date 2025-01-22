import { ApiProperty } from '@nestjs/swagger';


export class CreatePaymentDto {

  @ApiProperty({
    description: 'Сумма платежа',
    example: ''
  })
  public paymentAmount: string;

  @ApiProperty({
    description: 'Email пользователя',
    example: ''
  })
  public userEmail: string;

}