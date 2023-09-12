import { SellerDetailsService } from './seller-details.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { SellerDetailsRdo } from './rdo/seller-details.rdo';
import { CreateSellerDetailsDto } from './dto/create-seller-details.dto';
import { UpdateSellerDetailsDto } from './dto/update-seller-details.dto';

@Controller('seller-details')
export class SellerDetailsController {
  constructor(
    private readonly sellerDetailsService: SellerDetailsService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: string) {
    const sellerDetailsId = parseInt(id, 10);
    const existSellerDetails = await this.sellerDetailsService.getSellerDetails(sellerDetailsId);
    return fillObject(SellerDetailsRdo, existSellerDetails);
  }

  @Get('/')
  async index() {
    const sellersDetails = await this.sellerDetailsService.getSellersDetails();
    return fillObject(SellerDetailsRdo, sellersDetails);
  }

  @Post('/')
  async create(@Body() dto: CreateSellerDetailsDto) {
    const newSellerDetaisl = await this.sellerDetailsService.createSellerDetails(dto);
    return fillObject(SellerDetailsRdo, newSellerDetaisl);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const sellerDetailsId = parseInt(id, 10);
    this.sellerDetailsService.deleteSellerDetails(sellerDetailsId);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateSellerDetailsDto) {
    const sellerDetailsId = parseInt(id, 10);
    const updatedSellerDetails = await this.sellerDetailsService.updateSellerDetails(sellerDetailsId, dto)
    return fillObject(SellerDetailsRdo, updatedSellerDetails);
  }
}