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
    description: 'Массив объектов c информацией о мультимедиа',
    example: ''
  })
  public complectationMultimedia: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о комфорте',
    example: ''
  })
  public complectationComfort: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о безопасности',
    example: ''
  })
  public complectationSafety: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о защите',
    example: ''
  })
  public complectationProtection: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о разном',
    example: ''
  })
  public complectationOther: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о проверке ЛКП',
    example: ''
  })
  public paintworkInspection: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях мотора',
    example: ''
  })
  public engineCompartmentDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях передней части',
    example: ''
  })
  public frontSideDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях левой части',
    example: ''
  })
  public leftSideDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях задней части',
    example: ''
  })
  public backSideDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях багажника',
    example: ''
  })
  public trunkDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях правой части',
    example: ''
  })
  public rightSideDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях крыши',
    example: ''
  })
  public roofDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях стекол',
    example: ''
  })
  public glassDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях колес',
    example: ''
  })
  public discDamage: number[];

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