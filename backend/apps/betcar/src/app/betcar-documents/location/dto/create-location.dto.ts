import { ApiProperty } from '@nestjs/swagger';

export class CreateLocationDto {

  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  public reportId: number;
  

  @ApiProperty({
    description: 'Страна',
    example: 'Россия'
  })
  public country: string;

  @ApiProperty({
    description: 'Область',
    example: 'Саратовская'
  })
  public region: string;

  @ApiProperty({
    description: 'Город',
    example: 'Саратов'
  })
  public city: string;

  @ApiProperty({
    description: 'Адрес',
    example: 'Ленина, 20'
  })
  public address: string;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public comment: string;
}