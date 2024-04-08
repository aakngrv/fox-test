import { CarDataService } from './car-data.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { CarDataRdo } from './rdo/car-data.rdo';
import { CreateCarDataDto } from './dto/create-car-data.dto';
import { UpdateCarDataDto } from './dto/update-car-data.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Документы - Данные автомобиля')
@Controller('car-data')
export class CarDataController {
  
  constructor(
    private readonly carDataService: CarDataService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные автомобиля успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateCarDataDto) {
    const newCarData = await this.carDataService.createCarData(dto);
    return fillObject(CarDataRdo, newCarData);
  }

  @ApiResponse({
    type: CarDataRdo,
    status: HttpStatus.OK,
    description: 'Данные автомобиля найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const carDataId = parseInt(id, 10);
    const existCarData = await this.carDataService.getCarData(carDataId);
    return fillObject(CarDataRdo, existCarData);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные автомобиля успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const carDataId = parseInt(id, 10);
    await this.carDataService.deleteCarData(carDataId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные автомобиля успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateCarDataDto) {
    const carDataId = parseInt(id, 10);
    const updatedCarData = this.carDataService.updateCarData(carDataId, dto)
    return fillObject(CarDataRdo, updatedCarData);
  }
}