import { ApiProperty } from '@nestjs/swagger';

export class CreateSellerDetailsDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  public reportId: number;

  @ApiProperty({
    description: 'Отказа от осмотра',
    example: false
  })
  public refusalOfInspection: boolean;

  @ApiProperty({
    description: 'Ссылка на объявление',
    example: ["string"]
  })
  public linkToAd: string[];

  @ApiProperty({
    description: 'Имя продавца',
    example: 'Иван'
  })
  public name: string;
  
  @ApiProperty({
    description: 'Номер телефона',
    example: '+79195674839'
  })
  public phone: string;
  
  @ApiProperty({
    description: 'Стоимость автомобиля',
    example: '100000'
  })
  public carCost: string;

  @ApiProperty({
    description: 'Торг',
    example: false
  })
  public isBargain: boolean;
  
  @ApiProperty({
    description: 'Собственник или дилер',
    example: "string"
  })
  public role: string;
  
  @ApiProperty({
    description: 'Общий комментнарий',
    example: 'Тачка огонь!!!'
  })
  public comment: string;
}