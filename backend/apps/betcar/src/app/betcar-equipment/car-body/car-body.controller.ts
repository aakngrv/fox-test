import { CarBodyService } from './car-body.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { CarBodyRdo } from './rdo/car-body.rdo';
import { CreateCarBodyDto } from './dto/create-car-body.dto';
import { UpdateCarBodyDto } from './dto/update-car-body.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Оснащение - Kузов автомобиля')
@Controller('car-body')
export class CarBodyController {
  
  constructor(
    private readonly carBodyService: CarBodyService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о кузове успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateCarBodyDto) {
    const newCarBody = await this.carBodyService.createCarBody(dto);
    return fillObject(CarBodyRdo, newCarBody);
  }

  @ApiResponse({
    type: CarBodyRdo,
    status: HttpStatus.OK,
    description: 'Данные о кузове найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const complectationBodyId = parseInt(id, 10);
    const existCarBody = await this.carBodyService.getCarBody(complectationBodyId);
    return fillObject(CarBodyRdo, existCarBody);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о кузове успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const complectationBodyId = parseInt(id, 10);
    await this.carBodyService.deleteCarBody(complectationBodyId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о кузове успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateCarBodyDto) {
    const complectationBodyId = parseInt(id, 10);
    const updatedCarBody = this.carBodyService.updateCarBody(complectationBodyId, dto)
    return fillObject(CarBodyRdo, updatedCarBody);
  }
}