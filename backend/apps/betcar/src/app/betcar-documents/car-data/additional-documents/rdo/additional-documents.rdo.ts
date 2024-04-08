import { ApiProperty } from '@nestjs/swagger';
import { Expose } from "class-transformer";

export class AdditionalDocumentsRdo {

  @ApiProperty({
    description: 'ID доп документов',
    example: 1
  })
  @Expose()
  public additionalDocumentsId: number;

  @ApiProperty({
    description: 'ID данных автомобиля',
    example: 1
  })
  @Expose()
  public carDataId: number;

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  @Expose()
  public comment: string;

  @ApiProperty({
    description: 'Фото',
    example: ["string"]
  })
  @Expose()
  public photo: string[];
}