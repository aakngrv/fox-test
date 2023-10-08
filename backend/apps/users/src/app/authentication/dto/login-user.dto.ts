import {ApiProperty} from "@nestjs/swagger";

export class LoginUserDto {

  @ApiProperty({
    description: 'Электронная почта пользователя',
    example: 'executor@mail.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    example: 'Password123456'
  })
  public password: string;
}
