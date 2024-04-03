import { ApiProperty } from '@nestjs/swagger';
import {Expose} from "class-transformer";

export class ExteriorPhotoRdo {

  @ApiProperty({
    description: 'ID фото кузова',
    example: 1
  })
  @Expose()
  public exteriorPhotoId: number;
  
  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  @Expose()
  public reportId: number;

  @ApiProperty({
    description: 'Перед справа',
    example: 'string'
  })
  @Expose()
  public rightFrontPhoto: string;

  @ApiProperty({
    description: 'Перед',
    example: 'string'
  })
  @Expose()
  public frontPhoto: string;

  @ApiProperty({
    description: 'Перед слева',
    example: 'string'
  })
  @Expose()
  public leftFrontPhoto: string;

  @ApiProperty({
    description: 'Справа сзади',
    example: 'string'
  })
  @Expose()
  public rightBackPhoto: string;

  @ApiProperty({
    description: 'Сзади',
    example: 'string'
  })
  @Expose()
  public backPhoto: string;

  @ApiProperty({
    description: 'Слева сзади',
    example: 'string'
  })
  @Expose()
  public leftBackPhoto: string;

  @ApiProperty({
    description: 'Слева',
    example: 'string'
  })
  @Expose()
  public leftPhoto: string;

  @ApiProperty({
    description: 'Справа',
    example: 'string'
  })
  @Expose()
  public rightPhoto: string;

  @ApiProperty({
    description: 'Открытй капот',
    example: 'string'
  })
  @Expose()
  public hoodOpen: string;

  @ApiProperty({
    description: 'Открытый багажник',
    example: 'string'
  })
  @Expose()
  public trunkOpen: string;
}