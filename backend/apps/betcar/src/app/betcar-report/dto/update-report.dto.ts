import { ApiProperty } from '@nestjs/swagger';

export class UpdateReportDto {
  
  @ApiProperty({
    description: 'Заголовок отчета',
    example: 'Осмтор автомобиля BMW X6'
  })
  public title: string;
}