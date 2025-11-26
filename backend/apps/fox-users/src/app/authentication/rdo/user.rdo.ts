import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserRdo {

  @ApiProperty({
    description: 'ID пользователя',
    example: 1
  })
  @Expose()
  public userId: number;


  @ApiProperty({
    description: 'Имя пользователя',
    example: ''
  })
  @Expose()
  public name: string;
  
  @ApiProperty({
    description: 'Почта пользователя',
    example: ''
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Дата регистрации',
    example: ''
  })
  @Expose()
  public  createdAt: Date;
}