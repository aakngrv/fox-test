import { Expose, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SellerDetailsRdo {
  
  @ApiProperty({
    description: 'ID данных продавца',
    example: '1'
  })
  @Expose()
  public sellerDetailsId: string;

  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  @Expose()
  public reportId: string;
  
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
    example: false
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