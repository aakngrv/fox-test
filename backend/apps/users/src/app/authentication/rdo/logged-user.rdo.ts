import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LoggedUserRdo {

  @ApiProperty({
    description: 'The uniq executor ID',
    example: '13'
  })
  @Expose({name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'Executor email',
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
