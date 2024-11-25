import { ApiProperty } from "@nestjs/swagger";


export class reportNumberDto {

  @ApiProperty({
    description: 'Порядковый номер отчета',
    example: ''
  })
  public reportNumber: number;

}