import { ApiProperty } from '@nestjs/swagger';

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
    description: 'Массив объектов с данными об автомобиле',
    example: ''
  })
  public carData: number[];

  @ApiProperty({
    description: 'Массив объектов с дополнительными документами',
    example: ''
  })
  public additionalDocuments: number[];

  @ApiProperty({
    description: 'Массив объектов с ПТС',
    example: ''
  })
  public tcp: number[];

  
  @ApiProperty({
    description: 'Массив объектов с СТС',
    example: ''
  })
  public sts: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о местоположении',
    example: ''
  })
  public location: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о кузове',
    example: ''
  })
  public complectationBody: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о шинах',
    example: ''
  })
  public complectationWheels: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о салоне',
    example: ''
  })
  public complectationSalon: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о фарах',
    example: ''
  })
  public complectationHeadlights: number[];

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