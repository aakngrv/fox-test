import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerReviewsDto {
  
  @ApiProperty({
    description: 'ID пользователя',
    example: ''
  })
  public userId: string;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public userName: string;

  @ApiProperty({
    description: 'Отзыв пользоваетля',
    example: ''
  })
  public userReview: string;

  @ApiProperty({
    description: 'Ответ пользователю',
    example: ''
  })
  public ourAnswer: string;

  @ApiProperty({
    description: 'Дата создания отзыва',
    example: ''
  })
  public createdAt: Date;
}