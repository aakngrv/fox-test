import { ApiProperty } from '@nestjs/swagger';

export class CreateUserFormDto {

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public firstname: string;
  
  @ApiProperty({
    description: 'Возраст',
    example: ''
  })
  public age: string;

  @ApiProperty({
    description: 'Email',
    example: ''
  })
  public email: string;

  @ApiProperty({
    description: 'Город',
    example: ''
  })
  public city: string;

  @ApiProperty({
    description: 'Номер телефона',
    example: ''
  })
  public phone: string;
  
  @ApiProperty({
    description: 'Категория водительских прав',
    example: ['']
  })
  public driverLicense: string[];
  
  @ApiProperty({
    description: 'Опыт работы с техникой',
    example: ['']
  })
  public experienceWithTransport: string[];
  
  @ApiProperty({
    description: 'Опыт работы',
    example: ''
  })
  public workExperience: string;

  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  public createdAt: Date;
}