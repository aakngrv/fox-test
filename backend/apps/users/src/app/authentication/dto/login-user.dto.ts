import {ApiProperty} from "@nestjs/swagger";
import { IsEmail, IsString } from 'class-validator';
import { AUTH_USER_EMAIL_NOT_VALID } from '../authentication.constant';

export class LoginUserDto {

  @ApiProperty({
    description: 'Электронная почта пользователя',
    example: 'executor@mail.ru'
  })
  @IsEmail({}, { message: AUTH_USER_EMAIL_NOT_VALID })
  public email: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    example: 'Password123456'
  })
  @IsString()
  public password: string;
}
