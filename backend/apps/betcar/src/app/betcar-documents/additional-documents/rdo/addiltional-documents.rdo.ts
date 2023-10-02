import { Expose, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class AdditionalDocumentsRdo {
  
  @ApiProperty({
    description: 'ID доп документов',
    example: '1'
  })
  @Expose()
  public additionalDocumentsId?: number;

  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  @Expose()
  public reportId: string;
  
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
  
  @ApiProperty({
    description: 'Общий комментарий',
    example: 'Нормально, пойдет'
  })
  @Expose()
  public comment: string;
}