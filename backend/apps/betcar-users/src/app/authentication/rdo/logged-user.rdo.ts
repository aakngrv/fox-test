import { Expose, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LoggedUserRdo {

  @ApiProperty({
    description: 'ID пользователя',
    example: 1
  })
  @Expose()
  public userId: number;

  @ApiProperty({
    description: 'Электронная почта пользователя',
    example: 'executor@mail.ru'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Access token',
    example: ''
  })
  @Expose()
  public accessToken: string;
}