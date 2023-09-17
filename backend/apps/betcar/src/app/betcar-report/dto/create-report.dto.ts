import { ApiProperty } from '@nestjs/swagger';

export class CreateReportDto {
   
  @ApiProperty({
    description: 'ID подборщика',
    example: '13'
  })
  public  executorId: string;
  
  @ApiProperty({
    description: 'Заголовок отчета',
    example: 'Осмтор автомобиля BMW X6'
  })
  public title: string;

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