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
    example: [0]
  })
  public sellerDetails: number[];

  @ApiProperty({
    description: 'Массив объектов с данными об автомобиле',
    example: [0]
  })
  public carData: number[];

  @ApiProperty({
    description: 'Массив объектов с дополнительными документами',
    example: [0]
  })
  public additionalDocuments: number[];
  
  @ApiProperty({
    description: 'Массив объектов с СТС',
    example: [0]
  })
  public sts: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о местоположении',
    example: [0]
  })
  public location: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о кузове',
    example: [0]
  })
  public complectationBody: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о шинах',
    example: [0]
  })
  public complectationWheels: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о салоне',
    example: [0]
  })
  public complectationSalon: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о фарах',
    example: [0]
  })
  public complectationHeadlights: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о мультимедиа',
    example: [0]
  })
  public complectationMultimedia: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о комфорте',
    example: [0]
  })
  public complectationComfort: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о безопасности',
    example: [0]
  })
  public complectationSafety: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о защите',
    example: [0]
  })
  public complectationProtection: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о разном',
    example: [0]
  })
  public complectationOther: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о проверке ЛКП',
    example: [0]
  })
  public paintworkInspection: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях мотора',
    example: [0]
  })
  public engineCompartmentDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях передней части',
    example: [0]
  })
  public frontSideDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях левой части',
    example: [0]
  })
  public leftSideDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях задней части',
    example: [0]
  })
  public backSideDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях багажника',
    example: [0]
  })
  public trunkDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях правой части',
    example: [0]
  })
  public rightSideDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях крыши',
    example: [0]
  })
  public roofDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях стекол',
    example: [0]
  })
  public glassDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях колес',
    example: [0]
  })
  public discDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях салона',
    example: [0]
  })
  public interiorDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c фото кузова',
    example: [0]
  })
  public exteriorPhoto: number[];

  @ApiProperty({
    description: 'Массив объектов c фото салона',
    example: [0]
  })
  public interiorPhoto: number[];

  @ApiProperty({
    description: 'Массив объектов c круговым обзором',
    example: [0]
  })
  public roundViewVideo: number[];

  @ApiProperty({
    description: 'Массив объектов c заглушенным двигателем',
    example: [0]
  })
  public stoppedEngine: number[];

  @ApiProperty({
    description: 'Массив объектов c запущенным двигателем',
    example: [0]
  })
  public runningEngine: number[];

  @ApiProperty({
    description: 'Массив объектов c приборной панелью',
    example: [0]
  })
  public dashboard: number[];

  @ApiProperty({
    description: 'Массив объектов c тест драйвом',
    example: [0]
  })
  public testDrive: number[];

  @ApiProperty({
    description: 'Массив объектов c заключением эксперта',
    example: [0]
  })
  public expertOpinion: number[];

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