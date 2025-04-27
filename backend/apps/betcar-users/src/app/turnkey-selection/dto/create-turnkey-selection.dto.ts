import { ApiProperty } from '@nestjs/swagger';

export class CreateTurnkeySelectionDto {
  
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
    description: 'Модель',
    example: ['']
  })
  public autoModel: string[];

  @ApiProperty({
    description: 'Пробег',
    example: ['']
  })
  public mileage: string[];

  @ApiProperty({
    description: 'Тип КПП',
    example: ['']
  })
  public gearboxType: string[];

  @ApiProperty({
    description: 'Тип привода',
    example: ['']
  })
  public driveType: string[];

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
    description: 'Ссылка на объявление',
    example: ''
  })
  public linkToAd: string;

  @ApiProperty({
    description: 'Тип ДВС',
    example: ['']
  })
  public engineType: string[];

  @ApiProperty({
    description: 'Тип тарифа',
    example: false
  })
  public isPremium: boolean;

  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  public createdAt: Date;
}
