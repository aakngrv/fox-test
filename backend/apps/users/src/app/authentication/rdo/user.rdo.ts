import { Expose, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserRdo {

  @ApiProperty({
    description: 'ID пользователя',
    example: '25'
  })
  @Expose({ name: '_id'})
  @Transform(({obj}) => obj._id.toString())
  public id: string;

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
    example: '89094445599'
  })
  @Expose()
  public city: string;
}
