import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserRdo {

  @ApiProperty({
    description: 'The uniq executor ID',
    example: '25'
  })
  @Expose({ name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'Executor phone number',
    example: '89222334545'
  })
  @Expose()
  public phone: string;

  @ApiProperty({
    description: 'Executor email',
    example: 'executor@mail.ru'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Executor first name',
    example: 'Max',
  })
  @Expose()
  public firstname: string;

  @ApiProperty({
    description: 'Executor last name',
    example: 'Ivanov'
  })
  @Expose()
  public lastname: string;
}
