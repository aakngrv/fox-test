import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LocationRdo {
  
  @ApiProperty({
    description: 'ID местоположения',
    example: '1'
  })
  @Expose()
  public locationId?: number;

  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  @Expose()
  public reportId?: number;
  
  @ApiProperty({
    description: 'Страна',
    example: 'string'
  })
  @Expose()
  public country: string;

  @ApiProperty({
    description: 'Область',
    example: 'string'
  })
  @Expose()
  public region: string;

  @ApiProperty({
    description: 'Город',
    example: 'string'
  })
  @Expose()
  public city: string;

  @ApiProperty({
    description: 'Адрес',
    example: 'string'
  })
  @Expose()
  public address: string;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  @Expose()
  public comment: string;
}