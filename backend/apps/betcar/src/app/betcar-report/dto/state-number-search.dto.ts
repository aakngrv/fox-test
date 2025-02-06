import { ApiProperty } from "@nestjs/swagger";


export class StateNumberSearchDto {

  @ApiProperty({
    description: 'Гос номер',
    example: 'т00тт'
  })
  public stateNumber: string;

}