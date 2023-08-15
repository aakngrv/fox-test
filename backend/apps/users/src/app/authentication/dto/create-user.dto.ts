import { ApiProperty } from '@nestjs/swagger';


export class CreateUserDto {

  @ApiProperty({
    description: 'Executor unique address',
    example: 'executor@mail.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'Executor phone number',
    example: '89094445599'
  })
  public phone: string;

  @ApiProperty({
    description: 'Executor first name',
    example: 'Max',
  })
  public firstname: string;

  @ApiProperty({
    description: 'Executor last name',
    example: 'Ivanov'
  })
  public lastname: string;

  @ApiProperty({
    description: 'Executor password',
    example: 'Password123456'
  })
  public password: string;
}
