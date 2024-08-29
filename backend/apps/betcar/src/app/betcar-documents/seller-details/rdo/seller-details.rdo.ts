import { Expose, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SellerDetailsRdo {
  
  @ApiProperty({
    description: 'ID данных продавца',
    example: 1
  })
  @Expose()
  public sellerDetailsId: number;

  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  @Expose()
  public reportId: number;

  @ApiProperty({
    description: 'Отказа от осмотра',
    example: false
  })
  @Expose()
  public refusalOfInspection: boolean;

  @ApiProperty({
    description: 'Ссылка на объявление',
    example: ["string"]
  })
  @Expose()
  public linkToAd: string[];
  
  @ApiProperty({
    description: 'Имя продавца',
    example: 'Денис'
  })
  @Expose()
  public name: string;
  
  @ApiProperty({
    description: 'Номер телефона',
    example: '89004561234'
  })
  @Expose()
  public phone: string;
  
  @ApiProperty({
    description: 'Стоимость автомобиля',
    example: '1000000'
  })
  @Expose()
  public carCost: string;

  @ApiProperty({
    description: 'Собственник или дилер',
    example: "string"
  })
  @Expose()
  public role: string;
  
  @ApiProperty({
    description: 'Общий комментарий',
    example: 'Нормально, пойдет'
  })
  @Expose()
  public comment: string;
}