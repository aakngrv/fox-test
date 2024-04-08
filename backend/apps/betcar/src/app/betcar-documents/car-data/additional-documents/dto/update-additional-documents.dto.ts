import { ApiProperty } from '@nestjs/swagger';

export class UpdateAdditionalDocumentsDto {

  @ApiProperty({
    description: 'ID данных автомобиля',
    example: 1
  })
  public carDataId: number;

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  public comment: string;

  @ApiProperty({
    description: 'Фото',
    example: ["string"]
  })
  public photo: string[];
}