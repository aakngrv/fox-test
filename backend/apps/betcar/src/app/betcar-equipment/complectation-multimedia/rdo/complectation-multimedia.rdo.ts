import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ComplectationMultimediaRdo {

  @ApiProperty({
    description: 'ID мультимедиа автомобиля',
    example: '1'
  })
  @Expose()
  complectationMultimediaId: number;
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  @Expose()
  public reportId: number;
  
  @ApiProperty({
    description: 'cd',
    example: false
  })
  @Expose()
  public cd: boolean;

  @ApiProperty({
    description: 'tv',
    example: false
  })
  @Expose()
  public tv: boolean;

  @ApiProperty({
    description: 'usb',
    example: false
  })
  @Expose()
  public usb: boolean;

  @ApiProperty({
    description: 'aux',
    example: false
  })
  @Expose()
  public aux: boolean;

  @ApiProperty({
    description: 'dvd',
    example: false
  })
  @Expose()
  public dvd: boolean;

  @ApiProperty({
    description: 'Кассета',
    example: false
  })
  @Expose()
  public cassette: boolean;

  @ApiProperty({
    description: 'CarPlay',
    example: false
  })
  @Expose()
  public carPlay: boolean;

  @ApiProperty({
    description: 'bluetooth',
    example: false
  })
  @Expose()
  public bluetooth: boolean;

  @ApiProperty({
    description: 'Сабвуфер',
    example: false
  })
  @Expose()
  public subwoofer: boolean;

  @ApiProperty({
    description: 'Голосовое управление',
    example: false
  })
  @Expose()
  public voiceControl: boolean;

  @ApiProperty({
    description: 'Навигационная система',
    example: false
  })
  @Expose()
  public navigationSystem: boolean;

  @ApiProperty({
    description: 'Мультимедиа для пассажиров',
    example: false
  })
  @Expose()
  public multimediaSystemForRearPassengers: boolean;
}