import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserFormRdo {
  
  @ApiProperty({
    description: 'ID анкеты подборщика',
    example: 1
  })
  @Expose()
  public userProfileId: number;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  @Expose()
  public firstname: string;
  
  @ApiProperty({
    description: 'Возраст',
    example: ''
  })
  @Expose()
  public age: string;

  @ApiProperty({
    description: 'Email',
    example: ''
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Город',
    example: ''
  })
  @Expose()
  public city: string;

  @ApiProperty({
    description: 'Номер телефона',
    example: ''
  })
  @Expose()
  public phone: string;
  
  @ApiProperty({
    description: 'Категория водительских прав',
    example: ['']
  })
  @Expose()
  public driverLicense: string[];
  
  @ApiProperty({
    description: 'Опыт работы с техникой',
    example: ['']
  })
  @Expose()
  public experienceWithTransport: string[];
  
  @ApiProperty({
    description: 'Опыт работы',
    example: ''
  })
  @Expose()
  public workExperience: string;

  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  @Expose()
  public createdAt: Date;
}