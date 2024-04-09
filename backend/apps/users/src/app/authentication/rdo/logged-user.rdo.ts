import { Expose, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LoggedUserRdo {

  @ApiProperty({
    description: 'ID пользователя',
    example: '13'
  })
  @Expose({name: '_id'})
  @Transform(({obj}) => obj._id.toString())
  public id: string;

  @ApiProperty({
    description: 'Электронная почта пользователя',
    example: 'executor@mail.ru'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Access token',
    example: 'executor@mail.ru'
  })
  @Expose()
  public accessToken: string;
}
