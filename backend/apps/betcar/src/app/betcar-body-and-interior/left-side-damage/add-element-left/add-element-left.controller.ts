import { AddElementLeftService } from './add-element-left.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { AddElementLeftRdo } from './rdo/add-element-left.rdo';
import { CreateAddElementLeftDto } from './dto/create-add-element-left.dto';
import { UpdateAddElementLeftDto } from './dto/update-add-element-left';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Доп элемент к повреждениям левой части')
@Controller('add-element-left')
export class AddElementLeftController {
  
  constructor(
    private readonly addElementLeftService: AddElementLeftService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Доп элемент успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateAddElementLeftDto) {
    const newAddElementLeft = await this.addElementLeftService.createAddElementLeft(dto);
    return fillObject(AddElementLeftRdo, newAddElementLeft);
  }

  @ApiResponse({
    type: AddElementLeftRdo,
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const addElementLeftId = parseInt(id, 10);
    const existAddElementLeft = await this.addElementLeftService.getAddElementLeft(addElementLeftId);
    return fillObject(AddElementLeftRdo, existAddElementLeft);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о доп элементе успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const addElementLeftId = parseInt(id, 10);
    this.addElementLeftService.deleteAddElementLeft(addElementLeftId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateAddElementLeftDto) {
    const addElementLeftId = parseInt(id, 10);
    const updatedAddElementLeft = this.addElementLeftService.updateAddElementLeft(addElementLeftId, dto)
    return fillObject(AddElementLeftRdo, updatedAddElementLeft);
  }
}
