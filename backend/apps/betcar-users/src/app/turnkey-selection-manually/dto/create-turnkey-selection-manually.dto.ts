import { ApiProperty } from '@nestjs/swagger';

export class CreateTurnkeySelectionManuallyDto {
  
  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public firstname: string;

  @ApiProperty({
    description: 'Номер телефона',
    example: ''
  })
  public phone: string;
  
  @ApiProperty({
    description: 'Марка',
    example: ''
  })
  public autoMark: string;
  
  @ApiProperty({
    description: 'Модель',
    example: ''
  })
  public autoModel: string;

  @ApiProperty({
    description: 'Год выпуска',
    example: ['']
  })
  public yearOfIssue: string[];

  @ApiProperty({
    description: 'Цвета',
    example: ['']
  })
  public colors: string[];
  
  @ApiProperty({
    description: 'Регион осмотра',
    example: ''
  })
  public inspectionRegion: string;

  @ApiProperty({
    description: 'Контактный номер продавца',
    example: ''
  })
  public sellerPhone: string;

  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  public createdAt: Date;
}
