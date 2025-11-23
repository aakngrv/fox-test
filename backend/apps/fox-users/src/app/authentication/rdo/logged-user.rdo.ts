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
    example: ''
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Access token',
    example: ''
  })
  @Expose()
  public accessToken: string;
  
   @ApiProperty({
     description: 'Роль пользователя',
     example: false
   })
   @Expose()
   public author: boolean;
 
   @ApiProperty({
     description: 'Роль пользователя',
     example: false
   })
   @Expose()
   public executor: boolean;

  @ApiProperty({
    description: 'Refresh token',
    example: ''
  })
  @Expose()
  public refreshToken: string;
}