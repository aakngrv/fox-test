import { ApiProperty } from '@nestjs/swagger';

export class CreateComplectationOtherDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  public reportId: number;
  
  @ApiProperty({
    description: 'Фаркоп',
    example: false
  })
  public towBar: boolean;

  @ApiProperty({
    description: 'Лебедка',
    example: false
  })
  public winch: boolean;

  @ApiProperty({
    description: 'Аэробокс',
    example: false
  })
  public airbox: boolean;

  @ApiProperty({
    description: 'Защита картера',
    example: false
  })
  public crankcaseProtection: boolean;

  @ApiProperty({
    description: 'Поперечные дуги',
    example: false
  })
  public transverseArches: boolean;

  @ApiProperty({
    description: 'Газобалонное оборудование',
    example: false
  })
  public gasEquipment: boolean;

  @ApiProperty({
    description: 'Количество ключей',
    example: "string"
  })
  public numberOfKeys: string;

  @ApiProperty({
    description: 'Запасное колесо',
    example: "string"
  })
  public spareWheel: string;
}