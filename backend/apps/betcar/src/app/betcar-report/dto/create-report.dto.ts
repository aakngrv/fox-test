import { ApiProperty } from '@nestjs/swagger';
import { SellerDetails } from '@backend/shared/shared-types';

export class CreateReportDto {
   
  @ApiProperty({
    description: 'ID подборщика',
    example: '1'
  })
  public  executorId: string;
  
  @ApiProperty({
    description: 'Заголовок отчета',
    example: 'Осмотр автомобиля BMW X6'
  })
  public title: string;
  
  @ApiProperty({
    description: 'Массив объектов с данными о продавце',
    example: ''
  })
  public sellerDetails: number[];

  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  public  createdAt: Date;

  @ApiProperty({
    description: 'Дата публикации',
    example: ''
  })
  public  publishAt: Date;
}