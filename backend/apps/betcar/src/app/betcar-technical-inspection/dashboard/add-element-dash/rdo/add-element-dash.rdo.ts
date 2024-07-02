import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AddElementDashRdo {
  
  @ApiProperty({
    description: 'ID дополнительно элемента',
    example: 1
  })
  @Expose()
  public addElementDashId: number;

  @ApiProperty({
    description: 'ID дашборда',
    example: 1
  })
  @Expose()
  public dashboardId: number;

  @ApiProperty({
    description: 'Название элемента',
    example: 'string'
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  @Expose()
  public isCheck: boolean;

  @ApiProperty({
    description: 'Комментрарий',
    example: 'string'
  })
  @Expose()
  public comment: string;
}
