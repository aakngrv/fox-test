import { ApiProperty } from '@nestjs/swagger';
import { Expose } from "class-transformer";

export class ExpertOpinionRdo {

  @ApiProperty({
    description: 'ID мнения эксперта',
    example: 1
  })
  @Expose()
  public expertOpinionId: number;
  
  @ApiProperty({
    description: 'ID отчета',
    example: 1
  }) 
  @Expose()
  public reportId: number;

  @ApiProperty({
    description: 'Комментарий плюсов',
    example: 'string'
  })
  @Expose()
  public plusComment: string;

  @ApiProperty({
    description: 'Комментарий минусов',
    example: 'string'
  })
  @Expose()
  public minusComment: string;

  @ApiProperty({
    description: 'Комментарий общий',
    example: 'string'
  })
  @Expose()
  public totalComment: string;
}