import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service';


@ApiTags('Payments')
@Controller('payment')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new payment has been successfully created.'
  })
  @Post('create-payment')
  public async createPayment() {
    const newPayment = await this.paymentService.getPaymentLink();
    return newPayment;
  }
}