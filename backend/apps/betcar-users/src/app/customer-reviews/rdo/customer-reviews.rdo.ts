import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CustomerReviewsRdo {
  @ApiProperty({
    description: 'ID отзыва',
    example: 1
  })
  @Expose()
  public customerReviewsId: number;
  
  @ApiProperty({
    description: 'ID пользователя',
    example: ''
  })
  @Expose()
  public userId: string;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  @Expose()
  public userName: string;

  @ApiProperty({
    description: 'Отзыв пользоваетля',
    example: ''
  })
  @Expose()
  public userReview: string;

  @ApiProperty({
    description: 'Ответ пользователю',
    example: ''
  })
  @Expose()
  public ourAnswer: string;

  @ApiProperty({
    description: 'Дата создания отзыва',
    example: ''
  })
  @Expose()
  public createdAt: Date;
}