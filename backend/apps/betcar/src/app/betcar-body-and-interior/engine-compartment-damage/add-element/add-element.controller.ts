import { AddElementService } from './add-element.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { AddElementRdo } from './rdo/add-element.rdo';
import { CreateAddElementDto } from './dto/create-add-element.dto';
import { UpdateAddElementDto } from './dto/update-add-element';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Доп элемент к повреждениям мотора')
@Controller('add-element')
export class AddElementController {
  
  constructor(
    private readonly addElementService: AddElementService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Доп элемент успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateAddElementDto) {
    const newAddElement = await this.addElementService.createAddElement(dto);
    return fillObject(AddElementRdo, newAddElement);
  }

  @ApiResponse({
    type: AddElementRdo,
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const addElementId = parseInt(id, 10);
    const existAddElement= await this.addElementService.getAddElement(addElementId);
    return fillObject(AddElementRdo, existAddElement);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о доп элементе успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const addElementId = parseInt(id, 10);
    this.addElementService.deleteAddElement(addElementId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateAddElementDto) {
    const addElementId = parseInt(id, 10);
    const updatedAddElement = this.addElementService.updateAddElement(addElementId, dto)
    return fillObject(AddElementRdo, updatedAddElement);
  }
}