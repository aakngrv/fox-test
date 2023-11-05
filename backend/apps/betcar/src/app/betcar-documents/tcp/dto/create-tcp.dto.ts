import { ApiProperty } from '@nestjs/swagger';

export class CreateTcpDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  public reportId: number;

  
  @ApiProperty({
    description: 'Наличие ПТС',
    example: 'string'
  })
  public availabilityTCP: string;

  
  @ApiProperty({
    description: 'Шасси (номер рамы)',
    example: 'string'
  })
  public chassis: string;
  
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
    description: 'Количество владельцев',
    example: 'string'
  })
  public numberOfOwners: string;

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

