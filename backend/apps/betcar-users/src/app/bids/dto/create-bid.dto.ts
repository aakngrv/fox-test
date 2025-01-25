import { ApiProperty } from '@nestjs/swagger';

export class CreateUserBidDto {

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public firstname: string;

  @ApiProperty({
    description: 'Email',
    example: ''
  })
  public email: string;

  @ApiProperty({
    description: 'Город',
    example: ''
  })
  public city: string;

  @ApiProperty({
    description: 'Номер телефона',
    example: ''
  })
  public phone: string;

  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  public createdAt: Date;
}

