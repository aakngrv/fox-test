import { ApiProperty } from '@nestjs/swagger';

export class CreateExteriorPhotoDto {

  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  public reportId: number;

  @ApiProperty({
    description: 'Перед справа',
    example: 'string'
  })
  public rightFrontPhoto: string;

  @ApiProperty({
    description: 'Перед',
    example: 'string'
  })
  public frontPhoto: string;

  @ApiProperty({
    description: 'Перед слева',
    example: 'string'
  })
  public leftFrontPhoto: string;

  @ApiProperty({
    description: 'Справа сзади',
    example: 'string'
  })
  public rightBackPhoto: string;

  @ApiProperty({
    description: 'Сзади',
    example: 'string'
  })
  public backPhoto: string;

  @ApiProperty({
    description: 'Слева сзади',
    example: 'string'
  })
  public leftBackPhoto: string;

  @ApiProperty({
    description: 'Слева',
    example: 'string'
  })
  public leftPhoto: string;

  @ApiProperty({
    description: 'Справа',
    example: 'string'
  })
  public rightPhoto: string;

  @ApiProperty({
    description: 'Открытй капот',
    example: 'string'
  })
  public hoodOpen: string;

  @ApiProperty({
    description: 'Открытый багажник',
    example: 'string'
  })
  public trunkOpen: string;

  @ApiProperty({
    description: 'Дополнительное фото',
    example: ['string']
  })
  public addPhoto: string[];
}