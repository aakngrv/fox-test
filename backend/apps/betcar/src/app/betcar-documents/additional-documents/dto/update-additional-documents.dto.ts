import { ApiProperty } from '@nestjs/swagger';

export class UpdateAdditionalDocumentsDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  public reportId: number;
  
  @ApiProperty({
    description: 'Общий комментнарий',
    example: 'Тачка огонь!!!'
  })
  public comment: string;

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