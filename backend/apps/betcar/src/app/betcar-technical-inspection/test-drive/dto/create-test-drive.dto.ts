import { ApiProperty } from '@nestjs/swagger';

export class CreateTestDriveDto {

  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  public reportId: number;

  @ApiProperty({
    description: 'Все системы работают исправно',
    example: false
  })
  public allSystemOk: boolean;
  
  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  public addElementTest: number[];
}