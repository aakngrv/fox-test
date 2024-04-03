import { ApiProperty } from '@nestjs/swagger';

export class CreateRoundViewVideoDto {

  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  public reportId: number;

  @ApiProperty({
    description: 'Круговое видео',
    example: 'string'
  })
  public video: string;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public comment: string;
}