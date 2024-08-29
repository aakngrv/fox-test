import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddElementMechanicalDto {
  
  @ApiProperty({
    description: 'ID запущенного двигателя',
    example: 1
  })
  public runningEngineId: number;

  @ApiProperty({
    description: 'Название элемента',
    example: 'string'
  })
  public name: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public isCheck: boolean;

  @ApiProperty({
    description: 'Комментрарий',
    example: 'string'
  })
  public comment: string;
}