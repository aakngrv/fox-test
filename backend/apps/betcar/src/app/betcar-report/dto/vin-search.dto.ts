import { ApiProperty } from "@nestjs/swagger";


export class vinSearchDto {

  @ApiProperty({
    description: 'Электронная почта пользователя',
    example: 'executor@mail.ru'
  })
  public vinNumber: string;

}