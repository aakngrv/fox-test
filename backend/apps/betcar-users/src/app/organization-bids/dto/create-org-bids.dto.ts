import { ApiProperty } from '@nestjs/swagger';

export class CreateOrgBidDto {

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
    description: 'Название организации',
    example: ''
  })
  public organizationName: string;

  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  public createdAt: Date;
}