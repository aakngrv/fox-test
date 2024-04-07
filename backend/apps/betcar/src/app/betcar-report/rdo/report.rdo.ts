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
  RoundViewVideo,
  StoppedEngine,
  RunningEngine,
  Dashboard,
  TestDrive,
  ExpertOpinion,
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
    example: 1
  })
  @Expose()
  public reportId: number;
  
  @ApiProperty({
    description: 'Название отчета',
    example: 'Осмотр автомобиля BMW X6'
  })
  @Expose()
  public title: string;
  
  @ApiProperty({
    description: 'Данные продавца',
    example: [0]
  })
  @Expose()
  public sellerDetails: SellerDetails[];

  @ApiProperty({
    description: 'Данные автомобиля',
    example: [0]
  })
  @Expose()
  public carData: CarData[];

  @ApiProperty({
    description: 'Дополнительные документы',
    example: [0]
  })
  @Expose()
  public additionalDocuments: AdditionalDocuments[];

  @ApiProperty({
    description: 'ПТС',
    example: [0]
  })
  @Expose()
  public tcp: TCP[];

  @ApiProperty({
    description: 'СТС',
    example: [0]
  })
  @Expose()
  public sts: STS[];

  @ApiProperty({
    description: 'Массив объектов c информацией о местоположении',
    example: [0]
  })
  @Expose()
  public location: Location[];

  @ApiProperty({
    description: 'Массив объектов c информацией о кузове',
    example: [0]
  })
  @Expose()
  public complectationBody: ComplectationBody[];

  @ApiProperty({
    description: 'Массив объектов c информацией о шинах',
    example: [0]
  })
  @Expose()
  public complectationWheels: ComplectationWheels[];


  @ApiProperty({
    description: 'Массив объектов c информацией о салоне',
    example: [0]
  })
  @Expose()
  public complectationSalon: ComplectationSalon[];

  @ApiProperty({
    description: 'Массив объектов c информацией о фарах',
    example: [0]
  })
  @Expose()
  public complectationHeadlights: ComplectationHeadlights[];

  @ApiProperty({
    description: 'Массив объектов c информацией о мультимедиа',
    example: [0]
  })
  @Expose()
  public complectationMultimedia: ComplectationMultimedia[];

  @ApiProperty({
    description: 'Массив объектов c информацией о комфорте',
    example: [0]
  })
  @Expose()
  public complectationComfort: ComplectationComfort[];

  @ApiProperty({
    description: 'Массив объектов c информацией о безопасности',
    example: [0]
  })
  @Expose()
  public complectationSafety: ComplectationSafety[];

  @ApiProperty({
    description: 'Массив объектов c информацией о защите',
    example: [0]
  })
  @Expose()
  public complectationProtection: ComplectationProtection[];

  @ApiProperty({
    description: 'Массив объектов c информацией о разном',
    example: [0]
  })
  @Expose()
  public complectationOther: ComplectationOther[];

  @ApiProperty({
    description: 'Массив объектов c информацией о проверке ЛКП',
    example: [0]
  })
  @Expose()
  public paintworkInspection: PaintworkInspection[];
  
  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях моторного отсека',
    example: [0]
  })
  @Expose()
  public engineCompartmentDamage: EngineCompartmentDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях передней части',
    example: [0]
  })
  @Expose()
  public frontSideDamage: FrontSideDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях левой части',
    example: [0]
  })
  @Expose()
  public leftSideDamage: LeftSideDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях задней части',
    example: [0]
  })
  @Expose()
  public backSideDamage: BackSideDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях багажника',
    example: [0]
  })
  @Expose()
  public trunkDamage: TrunkDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях правой части',
    example: [0]
  })
  @Expose()
  public rightSideDamage: RightSideDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях крыши',
    example: [0]
  })
  @Expose()
  public roofDamage: RoofDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях стекол',
    example: [0]
  })
  @Expose()
  public glassDamage: GlassDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях колес',
    example: [0]
  })
  @Expose()
  public discDamage: DiscDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях салона',
    example: [0]
  })
  @Expose()
  public interiorDamage: InteriorDamage[];

  @ApiProperty({
    description: 'Массив объектов c фото кузова',
    example: [0]
  })
  @Expose()
  public exteriorPhoto: ExteriorPhoto[];

  @ApiProperty({
    description: 'Массив объектов c фото салона',
    example: [0]
  })
  @Expose()
  public interiorPhoto: InteriorPhoto[];

  @ApiProperty({
    description: 'Массив объектов c круговым обзором',
    example: [0]
  })
  @Expose()
  public roundViewVideo: RoundViewVideo[];

  @ApiProperty({
    description: 'Массив объектов c заглушенным двигателем',
    example: [0]
  })
  @Expose()
  public stoppedEngine: StoppedEngine[];

  @ApiProperty({
    description: 'Массив объектов c запущенным двигателем',
    example: [0]
  })
  @Expose()
  public runningEngine: RunningEngine[];

  @ApiProperty({
    description: 'Массив объектов c приборной панелью',
    example: [0]
  })
  @Expose()
  public dashboard: Dashboard[];

  @ApiProperty({
    description: 'Массив объектов c тест драйвом',
    example: [0]
  })
  @Expose()
  public testDrive: TestDrive[];

  @ApiProperty({
    description: 'Массив объектов c заключением эксперта',
    example: [0]
  })
  @Expose()
  public expertOpinion: ExpertOpinion[];

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



