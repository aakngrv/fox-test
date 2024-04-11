import { SellerDetailsService } from './seller-details.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { SellerDetailsRdo } from './rdo/seller-details.rdo';
import { CreateSellerDetailsDto } from './dto/create-seller-details.dto';
import { UpdateSellerDetailsDto } from './dto/update-seller-details.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Документы - Данные продавца')
@Controller('seller-details')
export class SellerDetailsController {
  
  constructor(
    private readonly sellerDetailsService: SellerDetailsService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные продавца успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateSellerDetailsDto) {
    const newSellerDetails = await this.sellerDetailsService.createSellerDetails(dto);
    return fillObject(SellerDetailsRdo, newSellerDetails);
  }

  @ApiResponse({
    type: SellerDetailsRdo,
    status: HttpStatus.OK,
    description: 'Данные продавца найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const sellerDetailsId = parseInt(id, 10);
    const existSellerDetails = await this.sellerDetailsService.getSellerDetails(sellerDetailsId);
    return fillObject(SellerDetailsRdo, existSellerDetails);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные продавца успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const sellerDetailsId = parseInt(id, 10);
    await this.sellerDetailsService.deleteSellerDetails(sellerDetailsId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные продавца успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateSellerDetailsDto) {
    const sellerDetailsId = parseInt(id, 10);
    const updatedSellerDetails = this.sellerDetailsService.updateSellerDetails(sellerDetailsId, dto)
    return fillObject(SellerDetailsRdo, updatedSellerDetails);
  }
}