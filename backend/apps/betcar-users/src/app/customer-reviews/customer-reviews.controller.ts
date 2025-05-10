import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CustomerReviewsService } from './customer-reviews.service';
import { fillObject } from '@backend/util/util-core';
import { CustomerReviewsRdo } from './rdo/customer-reviews.rdo';
import { CreateCustomerReviewsDto } from './dto/create-customer-reviews.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Отзывы и предложения')
@Controller('customer-reviews')
export class CustomerReviewsController {
  constructor(
    private readonly customerReviewsService: CustomerReviewsService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Отзыв успешно опубликован.'
  })
  @Post('/')
  async create(@Body() dto: CreateCustomerReviewsDto) {
    const newReview = await this.customerReviewsService.createReview(dto);
    return fillObject(CustomerReviewsRdo, newReview);
  }
  
  @ApiResponse({
    type: CustomerReviewsRdo,
    status: HttpStatus.OK,
    description: 'Отзыв найден'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const reviewId = parseInt(id, 10);
    const existReview = await this.customerReviewsService.getReview(reviewId);
    return fillObject(CustomerReviewsRdo, existReview);
  }
  
  @ApiResponse({
    type: CustomerReviewsRdo,
    status: HttpStatus.OK,
    description: 'Отзыв найдены'
  })
  @Get('/')
  async index() {
    const reviews = await this.customerReviewsService.getReviews();
    return fillObject(CustomerReviewsRdo, reviews);
  }
  
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Отзыв удален.'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const reviewId = parseInt(id, 10);
    await this.customerReviewsService.deleteReview(reviewId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Отзыв обновлен.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: CreateCustomerReviewsDto) {
    const reviewId = parseInt(id, 10);
    const updatedReview = await this.customerReviewsService.updateReview(reviewId, dto)
    return fillObject(CustomerReviewsRdo, updatedReview)
  }
}