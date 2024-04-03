import { ApiProperty } from '@nestjs/swagger';
import { 
  AdditionalDocuments, 
  CarData, 
  STS, 
  SellerDetails,
  TCP,
  Location,
  ComplectationBody,
  ComplectationWheels,
  ComplectationSalon,
  ComplectationHeadlights,
  ComplectationMultimedia,
  ComplectationComfort,
  ComplectationSafety,
  ComplectationProtection,
  ComplectationOther,
  PaintworkInspection,
  EngineCompartmentDamage,
  FrontSideDamage,
  LeftSideDamage,
  BackSideDamage,
  TrunkDamage,
  RightSideDamage,
  RoofDamage,
  GlassDamage,
  DiscDamage,
  InteriorDamage,
  ExteriorPhoto,
  InteriorPhoto,
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
    description: 'Массив объектов c информацией о шинах',
    example: ''
  })
  @Expose()
  public complectationWheels: ComplectationWheels[];


  @ApiProperty({
    description: 'Массив объектов c информацией о салоне',
    example: ''
  })
  @Expose()
  public complectationSalon: ComplectationSalon[];

  @ApiProperty({
    description: 'Массив объектов c информацией о фарах',
    example: ''
  })
  @Expose()
  public complectationHeadlights: ComplectationHeadlights[];

  @ApiProperty({
    description: 'Массив объектов c информацией о мультимедиа',
    example: ''
  })
  @Expose()
  public complectationMultimedia: ComplectationMultimedia[];

  @ApiProperty({
    description: 'Массив объектов c информацией о комфорте',
    example: ''
  })
  @Expose()
  public complectationComfort: ComplectationComfort[];

  @ApiProperty({
    description: 'Массив объектов c информацией о безопасности',
    example: ''
  })
  @Expose()
  public complectationSafety: ComplectationSafety[];

  @ApiProperty({
    description: 'Массив объектов c информацией о защите',
    example: ''
  })
  @Expose()
  public complectationProtection: ComplectationProtection[];

  @ApiProperty({
    description: 'Массив объектов c информацией о разном',
    example: ''
  })
  @Expose()
  public complectationOther: ComplectationOther[];

  @ApiProperty({
    description: 'Массив объектов c информацией о проверке ЛКП',
    example: ''
  })
  @Expose()
  public paintworkInspection: PaintworkInspection[];
  
  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях моторного отсека',
    example: ''
  })
  @Expose()
  public engineCompartmentDamage: EngineCompartmentDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях передней части',
    example: ''
  })
  @Expose()
  public frontSideDamage: FrontSideDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях левой части',
    example: ''
  })
  @Expose()
  public leftSideDamage: LeftSideDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях задней части',
    example: ''
  })
  @Expose()
  public backSideDamage: BackSideDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях багажника',
    example: ''
  })
  @Expose()
  public trunkDamage: TrunkDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях правой части',
    example: ''
  })
  @Expose()
  public rightSideDamage: RightSideDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях крыши',
    example: ''
  })
  @Expose()
  public roofDamage: RoofDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях стекол',
    example: ''
  })
  @Expose()
  public glassDamage: GlassDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях колес',
    example: ''
  })
  @Expose()
  public discDamage: DiscDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях салона',
    example: ''
  })
  @Expose()
  public interiorDamage: InteriorDamage[];

  @ApiProperty({
    description: 'Массив объектов c фото кузова',
    example: ''
  })
  @Expose()
  public exteriorPhoto: ExteriorPhoto[];

  @ApiProperty({
    description: 'Массив объектов c фото салона',
    example: ''
  })
  @Expose()
  public interiorPhoto: InteriorPhoto[];

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



