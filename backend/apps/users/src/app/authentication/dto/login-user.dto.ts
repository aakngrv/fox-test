import {ApiProperty} from "@nestjs/swagger";

export class LoginUserDto {

  @ApiProperty({
    description: 'Executor unique address',
    example: 'executor@mail.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'Executor password',
    example: 'Password123456'
  })
  public password: string;
}
