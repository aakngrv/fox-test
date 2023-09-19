import { ApiProperty } from '@nestjs/swagger';
import { SellerDetails } from '@backend/shared/shared-types';

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
    description: 'Массив объектов с данными о продавце',
    example: '[]'
  })
  public sellerDetails: number[];

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