import { ApiProperty } from '@nestjs/swagger';

export class CreateAddElementDashDto {
  
  @ApiProperty({
    description: 'ID дашборда',
    example: 1
  })
  public dashboardId: number;

  @ApiProperty({
    description: 'Название элемента',
    example: 'string'
  })
  public name: string;
}
