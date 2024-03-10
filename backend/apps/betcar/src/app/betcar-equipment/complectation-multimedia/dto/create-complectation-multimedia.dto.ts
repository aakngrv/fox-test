import { ApiProperty } from '@nestjs/swagger';

export class CreateComplectationMultimediaDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  public reportId: number;
  
  @ApiProperty({
    description: 'cd',
    example: false
  })
  public cd: boolean;

  @ApiProperty({
    description: 'tv',
    example: false
  })
  public tv: boolean;

  @ApiProperty({
    description: 'usb',
    example: false
  })
  public usb: boolean;

  @ApiProperty({
    description: 'aux',
    example: false
  })
  public aux: boolean;

  @ApiProperty({
    description: 'dvd',
    example: false
  })
  public dvd: boolean;

  @ApiProperty({
    description: 'Кассета',
    example: false
  })
  public cassette: boolean;

  @ApiProperty({
    description: 'CarPlay',
    example: false
  })
  public carPlay: boolean;

  @ApiProperty({
    description: 'bluetooth',
    example: false
  })
  public bluetooth: boolean;

  @ApiProperty({
    description: 'Сабвуфер',
    example: false
  })
  public subwoofer: boolean;

  @ApiProperty({
    description: 'Голосовое управление',
    example: false
  })
  public voiceControl: boolean;

  @ApiProperty({
    description: 'Навигационная система',
    example: false
  })
  public navigationSystem: boolean;

  @ApiProperty({
    description: 'Мультимедиа для пассажиров',
    example: false
  })
  public multimediaSystemForRearPassengers: boolean;
}