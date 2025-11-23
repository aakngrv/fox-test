import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from 'class-validator';
import { AUTH_USER_EMAIL_NOT_VALID } from '../authentication.constants';

export class LoginUserDto {

  @ApiProperty({
    description: 'Электронная почта пользователя',
    example: ''
  })
  @IsEmail({}, { message: AUTH_USER_EMAIL_NOT_VALID })
  public email: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    example: ''
  })
  @IsString()
  public password: string;
}