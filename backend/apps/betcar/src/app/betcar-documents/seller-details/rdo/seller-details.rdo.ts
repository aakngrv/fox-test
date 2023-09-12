import { Expose, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SellerDetailsRdo {
  
  @ApiProperty({
    description: 'ID данных продавца',
    example: '21'
  })
  @Expose()
  public id: string;
  
  @ApiProperty({
    description: 'Имя продавца',
    example: 'Денис'
  })
  @Expose()
  public name: string;
  
  @ApiProperty({
    description: 'Номер телефона',
    example: '25'
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
    example: 'true или false'
  })
  @Expose()
  public role: boolean;
  
  @ApiProperty({
    description: 'Общий комментарий',
    example: 'Нормально, пойдет'
  })
  @Expose()
  public comment: string;
}