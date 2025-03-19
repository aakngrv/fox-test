import { ApiProperty } from '@nestjs/swagger';

export class CreateExpertOnDayDto {

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public firstname: string;

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
    description: 'Дата для осмотра',
    example: ''
  })
  public provisionDate: string;

  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  public createdAt: Date;
}