import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ComplectationOtherRdo {
  

  @ApiProperty({
    description: 'ID раздела "разное"',
    example: '1'
  })
  @Expose()
  public complectationOtherId: number;
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  @Expose()
  public reportId: number;
  
  @ApiProperty({
    description: 'Фаркоп',
    example: false
  })
  @Expose()
  public towBar: boolean;

  @ApiProperty({
    description: 'Лебедка',
    example: false
  })
  @Expose()
  public winch: boolean;

  @ApiProperty({
    description: 'Аэробокс',
    example: false
  })
  @Expose()
  public airbox: boolean;

  @ApiProperty({
    description: 'Защита картера',
    example: false
  })
  @Expose()
  public crankcaseProtection: boolean;

  @ApiProperty({
    description: 'Поперечные дуги',
    example: false
  })
  @Expose()
  public transverseArches: boolean;

  @ApiProperty({
    description: 'Газобалонное оборудование',
    example: false
  })
  @Expose()
  public gasEquipment: boolean;

  @ApiProperty({
    description: 'Количество ключей',
    example: "string"
  })
  @Expose()
  public numberOfKeys: string;

  @ApiProperty({
    description: 'Запасное колесо',
    example: "string"
  })
  @Expose()
  public spareWheel: string;
}