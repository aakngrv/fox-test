import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TurnkeySelectionRdo {
  
  @ApiProperty({
    description: 'ID заявки',
    example: 1
  })
  @Expose()
  public turnkeySelectionId: number;
  
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
    description: 'Модель',
    example: ['']
  })
  @Expose()
  public autoModel: string[];

  @ApiProperty({
    description: 'Пробег',
    example: ['']
  })
  @Expose()
  public mileage: string[];

  @ApiProperty({
    description: 'Тип КПП',
    example: ['']
  })
  @Expose()
  public gearboxType: string[];

  @ApiProperty({
    description: 'Тип привода',
    example: ['']
  })
  @Expose()
  public driveType: string[];

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
    description: 'Тип ДВС',
    example: ['']
  })
  @Expose()
  public engineType: string[];

  @ApiProperty({
    description: 'Ссылка на объявление',
    example: ''
  })
  @Expose()
  public linkToAd: string;

  @ApiProperty({
    description: 'Тип тарифа',
    example: false
  })
  @Expose()
  public isPremium: boolean;

  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  @Expose()
  public createdAt: Date;
}