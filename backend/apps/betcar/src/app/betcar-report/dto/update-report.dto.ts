import { ApiProperty } from '@nestjs/swagger';

export class UpdateReportDto {
  
  @ApiProperty({
    description: 'Заголовок отчета',
    example: 'Осмтор автомобиля BMW X6'
  })
  public title: string;

  @ApiProperty({
    description: 'Email заказчика осмотра',
    example: 'string@email.com'
  })
  public userEmail: string;

  @ApiProperty({
    description: 'VIN автомобиля',
    example: 'VXX33SDFSDFfff10'
  })
  public vinNumber: string;
}

