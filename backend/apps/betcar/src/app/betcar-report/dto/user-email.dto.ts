import { ApiProperty } from "@nestjs/swagger";


export class userEmailDto {

  @ApiProperty({
    description: 'Электронная почта пользователя',
    example: 'executor@mail.ru'
  })
  public userEmail: string;

}