import { ApiProperty } from "@nestjs/swagger";


export class LinkSearchDto {

  @ApiProperty({
    description: 'Ссылка на объявление',
    example: ''
  })
  public sellerDetailsLinkToAd: string;

}