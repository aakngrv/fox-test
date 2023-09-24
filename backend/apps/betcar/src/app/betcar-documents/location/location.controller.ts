import { LocationService } from './location.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { LocationRdo } from './rdo/location.rdo';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Местоположение')
@Controller('location')
export class LocationController {
  
  constructor(
    private readonly locationService: LocationService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Информация о местоположении успешно создана.'
  })
  @Post('/')
  async create(@Body() dto: CreateLocationDto) {
    const newLocation = await this.locationService.createLocation(dto);
    return fillObject(LocationRdo, newLocation);
  }

  @ApiResponse({
    type: LocationRdo,
    status: HttpStatus.OK,
    description: 'Информация о местоположении найдена'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const locationId = parseInt(id, 10);
    const existLocation = await this.locationService.getLocation(locationId);
    return fillObject(LocationRdo, existLocation);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Информация о местоположении успешно удалена.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const locationId = parseInt(id, 10);
    this.locationService.deleteLocation(locationId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Информация о местоположении успешно обновлена.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateLocationDto) {
    const locationId = parseInt(id, 10);
    const updatedLocation = this.locationService.updateLocation(locationId, dto)
    return fillObject(LocationRdo, updatedLocation);
  }
}