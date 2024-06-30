import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddElementDashDto {
  
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