import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsString } from 'class-validator';
import { AUTH_USER_EMAIL_NOT_VALID } from '../authentication.constants';


export class CreateUserDto {

  @ApiProperty({
    description: 'Имя пользователя',
    example: ''
  })
  @IsString()
  public name: string;

  @ApiProperty({
    description: 'Почта пользователя',
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


  @ApiProperty({
    description: 'Дата регистрации',
    example: ''
  })
  public  createdAt: Date;
}