import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';


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
  public async createPayment(@Body() dto: CreatePaymentDto) {
    const newPayment = await this.paymentService.getPaymentLink(dto);
    return newPayment;
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Payment status has been successfully received.'
  })
  @Get(':id')
  public async getPaymentStatus(@Param('id') id: string) {
    const newPaymentStatus = await this.paymentService.getPaymentStatus(id);
    return newPaymentStatus;
  }
}