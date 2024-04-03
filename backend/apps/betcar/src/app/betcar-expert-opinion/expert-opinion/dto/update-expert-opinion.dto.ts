import { ApiProperty } from '@nestjs/swagger';

export class UpdateExpertOpinionDto {

  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  public reportId: number;

  @ApiProperty({
    description: 'Комментарий плюсов',
    example: 'string'
  })
  public plusComment: string;

  @ApiProperty({
    description: 'Комментарий минусов',
    example: 'string'
  })
  public minusComment: string;

  @ApiProperty({
    description: 'Комментарий общий',
    example: 'string'
  })
  public totalComment: string;
}