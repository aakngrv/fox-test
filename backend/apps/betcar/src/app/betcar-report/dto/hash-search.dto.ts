import { ApiProperty } from "@nestjs/swagger";


export class HashSearchDto {

  @ApiProperty({
    description: 'Уникальный хэш',
    example: ''
  })
  public uniqueLink: string;

}