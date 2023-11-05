import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class StsRdo {
  
  @ApiProperty({
    description: 'ID СТС',
    example: '1'
  })
  @Expose()
  public stsId?: number;

  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  @Expose()
  public reportId?: number;

  @ApiProperty({
    description: 'Наличие СТС',
    example: false
  })
  @Expose()
  public isAbsent: boolean;

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
    description: 'Кем выдан',
    example: 'string'
  })
  @Expose()
  public issuedBy: string;

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