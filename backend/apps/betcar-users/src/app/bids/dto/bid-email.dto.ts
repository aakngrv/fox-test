import { ApiProperty } from "@nestjs/swagger";

export class BidEmailDto {

  @ApiProperty({
    description: 'Электронная почта пользователя',
    example: 'executor@mail.ru'
  })
  public email: string;

}