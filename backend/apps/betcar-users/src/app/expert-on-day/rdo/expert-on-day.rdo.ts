import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ExpertOnDayRdo {

  @ApiProperty({
    description: 'ID заявки',
    example: 1
  })
  @Expose()
  public expertOnDayId: number;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  @Expose()
  public firstname: string;

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
    description: 'Дата для осмотра',
    example: ''
  })
  @Expose()
  public provisionDate: string;

  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  @Expose()
  public createdAt: Date;
}