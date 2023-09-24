import { ApiProperty } from '@nestjs/swagger';

export class UpdateStsDto {

  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  public reportId: number;

  @ApiProperty({
    description: 'Наличие СТС',
    example: false
  })
  public isAbsent: boolean;

  @ApiProperty({
    description: 'Серия',
    example: 'string'
  })
  public series: string;
  
  @ApiProperty({
    description: 'Номер',
    example: 'string'
  })
  public number: string;

  
  @ApiProperty({
    description: 'Дата выдачи',
    example: 'string'
  })
  public dateOfIssue: string;

  
  @ApiProperty({
    description: 'Кем выдан',
    example: 'string'
  })
  public issuedBy: string;

  @ApiProperty({
    description: 'Видео',
    example: 'string'
  })
  public video: string;

  @ApiProperty({
    description: 'Фото',
    example: 'string'
  })
  public photo: string;

  @ApiProperty({
    description: 'Файл',
    example: 'string'
  })
  public file: string;
}