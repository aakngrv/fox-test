import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class TcpRdo {
  
  @ApiProperty({
    description: 'ID ПТС',
    example: '1'
  })
  @Expose()
  public tcpId?: number;

  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  @Expose()
  public reportId?: number;

  @ApiProperty({
    description: 'Наличие ПТС',
    example: 'string'
  })
  @Expose()
  public availabilityTCP: string;

  
  @ApiProperty({
    description: 'Шасси (номер рамы)',
    example: 'string'
  })
  @Expose()
  public chassis: string;

  
  @ApiProperty({
    description: 'Серия',
    example: 'string'
  })
  @Expose()
  public series: string;

  
  @ApiProperty({
    description: 'Номер',
    example: 'string'
  })
  @Expose()
  public number: string;

  
  @ApiProperty({
    description: 'Дата выдачи',
    example: 'string'
  })
  @Expose()
  public dateOfIssue: string;

  
  @ApiProperty({
    description: 'Количество владельцев',
    example: 'string'
  })
  @Expose()
  public numberOfOwners: string;

  
  @ApiProperty({
    description: 'Видео',
    example: 'string'
  })
  @Expose()
  public video: string;

  @ApiProperty({
    description: 'Фото',
    example: 'string'
  })
  @Expose()
  public photo: string;

  
  @ApiProperty({
    description: 'Файл',
    example: 'string'
  })
  @Expose()
  public file: string;
}
