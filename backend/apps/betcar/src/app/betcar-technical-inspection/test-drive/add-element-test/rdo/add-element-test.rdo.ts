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
