import { AddElementInteriorService } from './add-element-interior.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { AddElementInteriorRdo } from './rdo/add-element-interior.rdo';
import { CreateAddElementInteriorDto } from './dto/create-add-element-interior.dto';
import { UpdateAddElementInteriorDto } from './dto/update-add-element-interior.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Доп элемент к повреждениям салона')
@Controller('add-element-interior')
export class AddElementInteriorController {
  
  constructor(
    private readonly addElementInteriorService: AddElementInteriorService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Доп элемент успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateAddElementInteriorDto) {
    const newAddElementInterior = await this.addElementInteriorService.createAddElementInterior(dto);
    return fillObject(AddElementInteriorRdo, newAddElementInterior);
  }

  @ApiResponse({
    type: AddElementInteriorRdo,
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const addElementInteriorId = parseInt(id, 10);
    const existAddElementInterior = await this.addElementInteriorService.getAddElementInterior(addElementInteriorId);
    return fillObject(AddElementInteriorRdo, existAddElementInterior);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о доп элементе успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const addElementInteriorId = parseInt(id, 10);
    this.addElementInteriorService.deleteAddElementInterior(addElementInteriorId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateAddElementInteriorDto) {
    const addElementInteriorId = parseInt(id, 10);
    const updatedAddElementInterior = this.addElementInteriorService.updateAddElementInterior(addElementInteriorId, dto)
    return fillObject(AddElementInteriorRdo, updatedAddElementInterior);
  }
}
