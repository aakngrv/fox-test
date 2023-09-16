import { ApiProperty } from '@nestjs/swagger';

export class CreateReportDto {
   
  @ApiProperty({
    description: 'ID подборщика',
    example: '13'
  })
  public  executorId: String;

  @ApiProperty({
    description: 'ID подборщика',
    example: '13'
  })
  public  createdAt: Date;

  @ApiProperty({
    description: 'ID подборщика',
    example: '13'
  })
  public  publishAt: Date;

}