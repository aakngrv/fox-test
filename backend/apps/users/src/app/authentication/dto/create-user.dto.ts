import { ApiProperty } from '@nestjs/swagger';


export class CreateUserDto {

  @ApiProperty({
    description: 'Почта пользователя',
    example: 'executor@mail.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'Номер телефона пользователя',
    example: '89094445599'
  })
  public phone: string;

  @ApiProperty({
    description: 'Город пользователя',
    example: '89094445599'
  })
  public city: string;

  @ApiProperty({
    description: 'Имя пользователя',
    example: 'Max',
  })
  public firstname: string;

  @ApiProperty({
    description: 'Фамилия пользователя',
    example: 'Ivanov'
  })
  public lastname: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    example: 'Password123456'
  })
  public password: string;
}
