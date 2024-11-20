import { ApiProperty } from "@nestjs/swagger";


export class vinSearchDto {

  @ApiProperty({
    description: 'vin номер',
    example: 'C343CXX43LDXXX'
  })
  public vinNumber: string;

}