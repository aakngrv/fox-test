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

  @ApiProperty({
    description: 'Отказа от осмотра',
    example: false
  })
  public sellerDetailsRefusalOfInspection: boolean;

  @ApiProperty({
    description: 'Ссылка на объявление',
    example: ["string"]
  })
  public sellerDetailsLinkToAd: string[];

  @ApiProperty({
    description: 'Имя продавца',
    example: 'Иван'
  })
  public sellerDetailsName: string;
  
  @ApiProperty({
    description: 'Номер телефона',
    example: '+79195674839'
  })
  public sellerDetailsPhone: string;
  
  @ApiProperty({
    description: 'Стоимость автомобиля',
    example: '100000'
  })
  public sellerDetailsCarCost: string;
  
  @ApiProperty({
    description: 'Собственник или дилер',
    example: "string"
  })
  public sellerDetailsRole: string;
  
  @ApiProperty({
    description: 'Общий комментнарий',
    example: 'Тачка огонь!!!'
  })
  public sellerDetailsComment: string;
}

