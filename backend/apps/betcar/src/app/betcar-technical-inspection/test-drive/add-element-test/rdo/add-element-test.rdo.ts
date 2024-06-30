import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AddElementTestRdo {
  
  @ApiProperty({
    description: 'ID дополнительно элемента',
    example: 1
  })
  @Expose()
  public addElementTestId: number;

  @ApiProperty({
    description: 'ID тест драйва',
    example: 1
  })
  @Expose()
  public testDriveId: number;

  @ApiProperty({
    description: 'Название элемента',
    example: 'string'
  })
  @Expose()
  public name: string;
}
