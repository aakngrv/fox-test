import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post} from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service';


@ApiTags('authentication')
@Controller('auth')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService
  ) {}

  // @ApiResponse({
  //   status: HttpStatus.CREATED,
  //   description: 'The new pay has been successfully created.'
  // })
  // @Post('register-payment')
  // public async createPayment(@Body() dto: CreateUserDto) {
  //   const newUser = await this.authService.register(dto);
  //   return fillObject(UserRdo, newUser);
  // }
}