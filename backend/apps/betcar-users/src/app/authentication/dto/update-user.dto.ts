import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsString } from 'class-validator';
import { AUTH_USER_EMAIL_NOT_VALID } from '../authentication.constants';


export class UpdateUserDto {

  @ApiProperty({
    description: 'Почта пользователя',
    example: 'executor@mail.ru'
  })
  @IsEmail({}, { message: AUTH_USER_EMAIL_NOT_VALID })
  public email: string;

  @ApiProperty({
    description: 'Номер телефона пользователя',
    example: '89094445599'
  })
  public phone: string;

  @ApiProperty({
    description: 'Город пользователя',
    example: 'Москва'
  })
  public city: string;

  @ApiProperty({
    description: 'Имя пользователя',
    example: 'Max',
  })
  @IsString()
  public firstname: string;

  @ApiProperty({
    description: 'Фамилия пользователя',
    example: 'Ivanov'
  })
  @IsString()
  public lastname: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    example: 'Password123456'
  })
  @IsString()
  public passwordHash: string;

  @ApiProperty({
    description: 'Роль - осмотрщик',
    example: false
  })
  @IsBoolean()
  public executor: boolean;

  @ApiProperty({
    description: 'Роль - пользователь',
    example: false
  })
  @IsBoolean()
  public customer: boolean;

  @ApiProperty({
    description: 'Роль - админ',
    example: false
  })
  @IsBoolean()
  public admin: boolean;

  @ApiProperty({
    description: 'Баланс пользователя',
    example: ''
  })
  @IsString()
  public userBalance: string;

  @ApiProperty({
    description: 'Дата регистрации',
    example: ''
  })
  public  createdAt: Date;
}