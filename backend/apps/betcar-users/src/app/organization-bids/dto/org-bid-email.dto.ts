import { ApiProperty } from "@nestjs/swagger";

export class OrgBidEmailDto {

  @ApiProperty({
    description: 'Электронная почта компании',
    example: 'executor@mail.ru'
  })
  public email: string;

}