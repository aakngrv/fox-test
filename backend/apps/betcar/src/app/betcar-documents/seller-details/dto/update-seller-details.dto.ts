import { ApiProperty } from '@nestjs/swagger';

export class UpdateSellerDetailsDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: '2'
  })
  public reportId: number;
  
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
    description: 'Собственник или дилер',
    example: false
  })
  public role: boolean;
  
  @ApiProperty({
    description: 'Общий комментнарий',
    example: 'Тачка огонь!!!'
  })
  public comment: string;
}