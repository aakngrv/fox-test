import { ApiProperty } from '@nestjs/swagger';
import { SellerDetails } from '@prisma/client';
import { Expose } from 'class-transformer';

export class ReportRdo {
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  @Expose()
  public reportId: string
  
  @ApiProperty({
    description: 'ID подборщика',
    example: '1'
  })
  @Expose()
  public  executorId: string;
  
  @ApiProperty({
    description: 'Название отчета',
    example: 'Осмотр автомобиля BMW X6'
  })
  @Expose()
  public title: string
  
  @ApiProperty({
    description: 'Данные продавца',
    example: ''
  })
  @Expose()
  public sellerDetails: SellerDetails[];
  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  @Expose()
  public  createdAt: string;
  @ApiProperty({
    description: 'Дата публикации отчета',
    example: '1'
  })
  @Expose()
  public publishAt: string;
}



