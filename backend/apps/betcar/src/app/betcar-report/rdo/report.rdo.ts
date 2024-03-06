import { ApiProperty } from '@nestjs/swagger';
import { 
  AdditionalDocuments, 
  CarData, 
  STS, 
  SellerDetails,
  TCP,
  Location,
  ComplectationBody,
} from '@prisma/client';

import { Expose } from 'class-transformer';

export class ReportRdo {

  @ApiProperty({
    description: 'ID подборщика',
    example: '1'
  })
  @Expose()
  public  executorId: string;
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  @Expose()
  public reportId: string
  
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
    description: 'Данные автомобиля',
    example: ''
  })
  @Expose()
  public carData: CarData[];

  @ApiProperty({
    description: 'Дополнительные документы',
    example: ''
  })
  @Expose()
  public additionalDocuments: AdditionalDocuments[];

  @ApiProperty({
    description: 'ПТС',
    example: ''
  })
  @Expose()
  public tcp: TCP[];

  @ApiProperty({
    description: 'СТС',
    example: ''
  })
  @Expose()
  public sts: STS[];

  @ApiProperty({
    description: 'Массив объектов c информацией о местоположении',
    example: ''
  })
  @Expose()
  public location: Location[];


  @ApiProperty({
    description: 'Массив объектов c информацией о кузове',
    example: ''
  })
  @Expose()
  public complectationBody: ComplectationBody[];

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



