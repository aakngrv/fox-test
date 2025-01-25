import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class OrgBidRdo {
  
  @ApiProperty({
    description: 'ID заявки',
    example: 1
  })
  @Expose()
  public bidId: number;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  @Expose()
  public firstname: string;

  @ApiProperty({
    description: 'Email',
    example: ''
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Город',
    example: ''
  })
  @Expose()
  public city: string;

  @ApiProperty({
    description: 'Номер телефона',
    example: ''
  })
  @Expose()
  public phone: string;

  @ApiProperty({
    description: 'Название организации',
    example: ''
  })
  @Expose()
  public organizationName: string;

  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  @Expose()
  public createdAt: Date;
}