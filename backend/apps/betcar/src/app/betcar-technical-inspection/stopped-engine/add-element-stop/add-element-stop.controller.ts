import { AddElementStopService } from './add-element-stop.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { AddElementStopRdo } from './rdo/add-element-stop.rdo';
import { CreateAddElementStopDto } from './dto/create-add-element-stop.dto';
import { UpdateAddElementStopDto } from './dto/update-add-element-stop.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Технический осмотр - Доп элемент к заглушенному двигателю')
@Controller('add-element-stop')
export class AddElementStopController {
  
  constructor(
    private readonly addElementStopService: AddElementStopService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Доп элемент успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateAddElementStopDto) {
    const newAddElementStop = await this.addElementStopService.createAddElementStop(dto);
    return fillObject(AddElementStopRdo, newAddElementStop);
  }

  @ApiResponse({
    type: AddElementStopRdo,
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const addElementStopId = parseInt(id, 10);
    const existAddElementStop = await this.addElementStopService.getAddElementStop(addElementStopId);
    return fillObject(AddElementStopRdo, existAddElementStop);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о доп элементе успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const addElementStopId = parseInt(id, 10);
    this.addElementStopService.deleteAddElementStop(addElementStopId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateAddElementStopDto) {
    const addElementStopId = parseInt(id, 10);
    const updatedAddElementStop = this.addElementStopService.updateAddElementStop(addElementStopId, dto)
    return fillObject(AddElementStopRdo, updatedAddElementStop);
  }
}
