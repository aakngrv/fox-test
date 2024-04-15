import { Expose, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from "class-validator";

export class UserRdo {

  @ApiProperty({
    description: 'ID пользователя',
    example: 1
  })
  @Expose()
  public id: number;

  @ApiProperty({
    description: 'Номер телефона пользователя',
    example: '89222334545'
  })
  @Expose()
  public phone: string;

  @ApiProperty({
    description: 'Электронная почта пользователя',
    example: 'executor@mail.ru'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Имя пользователя',
    example: 'Max',
  })
  @Expose()
  public firstname: string;

  @ApiProperty({
    description: 'Фамилия пользователя',
    example: 'Ivanov'
  })
  @Expose()
  public lastname: string;

  @ApiProperty({
    description: 'Город пользователя',
    example: 'Москва',
  })
  @Expose()
  public city: string;

  @ApiProperty({
    description: 'Роль - осмотрщик',
    example: false
  })
  @Expose()
  public executor: boolean;

  @ApiProperty({
    description: 'Роль - пользователь',
    example: false
  })
  @Expose()
  public customer: boolean;

  @ApiProperty({
    description: 'Роль - админ',
    example: false
  })
  @Expose()
  public admin: boolean;

  @ApiProperty({
    description: 'Дата регистрации',
    example: ''
  })
  @Expose()
  public  createdAt: Date;
}