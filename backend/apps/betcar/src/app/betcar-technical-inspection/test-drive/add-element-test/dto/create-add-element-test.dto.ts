import { ApiProperty } from '@nestjs/swagger';

export class CreateAddElementTestDto {
  
  @ApiProperty({
    description: 'ID тест драйва',
    example: 1
  })
  public testDriveId: number;

  @ApiProperty({
    description: 'Название элемента',
    example: 'string'
  })
  public name: string;
}
