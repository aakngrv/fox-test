import { AddElementTest } from '@backend/shared/shared-types';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from "class-transformer";

export class TestDriveRdo {

  @ApiProperty({
    description: 'ID тест драйва',
    example: 1
  })
  @Expose()
  public testDriveId: number;
  
  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  @Expose()
  public reportId: number;

  @ApiProperty({
    description: 'Все системы работают исправно',
    example: false
  })
  @Expose()
  public allSystemOk: boolean;

  @ApiProperty({
    description: 'Неисправности',
    example: ["string"]
  })
  @Expose()
  public malfunctions: string[];

  @ApiProperty({
    description: 'Новый элемент',
    example: [1]
  })
  @Expose()
  public addElementTest: AddElementTest[];
}