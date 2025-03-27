import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TurnkeySelectionManuallyRdo {
  
    @ApiProperty({
      description: 'ID заявки',
      example: 1
    })
    @Expose()
    public turnkeySelectionManuallyId: number;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  @Expose()
  public firstname: string;

  @ApiProperty({
    description: 'Номер телефона',
    example: ''
  })
  @Expose()
  public phone: string;
  
  @ApiProperty({
    description: 'Марка',
    example: ''
  })
  @Expose()
  public autoMark: string;
  
  @ApiProperty({
    description: 'Модель',
    example: ['']
  })
  @Expose()
  public autoModel: string[];

  @ApiProperty({
    description: 'Год выпуска',
    example: ['']
  })
  @Expose()
  public yearOfIssue: string[];

  @ApiProperty({
    description: 'Цвета',
    example: ['']
  })
  @Expose()
  public colors: string[];
  
  @ApiProperty({
    description: 'Регион осмотра',
    example: ''
  })
  @Expose()
  public inspectionRegion: string;

  @ApiProperty({
    description: 'Контактный номер продавца',
    example: ''
  })
  @Expose()
  public sellerPhone: string;

  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  @Expose()
  public createdAt: Date;
}