import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class RoundViewVideoRdo {

  @ApiProperty({
    description: 'ID видео обзора',
    example: 1
  })
  @Expose()
  public roundViewVideoId: number;
  
  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  @Expose()
  public reportId: number;

  @ApiProperty({
    description: 'Круговое видео',
    example: 'string'
  })
  @Expose()
  public video: string;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  @Expose()
  public comment: string;
}