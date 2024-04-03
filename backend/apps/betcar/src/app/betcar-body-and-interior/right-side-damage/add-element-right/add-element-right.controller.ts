import { AddElementRightService } from './add-element-right.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { AddElementRightRdo } from './rdo/add-element-right.rdo';
import { CreateAddElementRightDto } from './dto/create-add-element-right.dto';
import { UpdateAddElementRightDto } from './dto/update-add-element-right.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Доп элемент к повреждениям правой части')
@Controller('add-element-right')
export class AddElementRightController {
  
  constructor(
    private readonly addElementRightService: AddElementRightService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Доп элемент успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateAddElementRightDto) {
    const newAddElementRight = await this.addElementRightService.createAddElementRight(dto);
    return fillObject(AddElementRightRdo, newAddElementRight);
  }

  @ApiResponse({
    type: AddElementRightRdo,
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const addElementRightId = parseInt(id, 10);
    const existAddElementRight = await this.addElementRightService.getAddElementRight(addElementRightId);
    return fillObject(AddElementRightRdo, existAddElementRight);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о доп элементе успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const addElementRightId = parseInt(id, 10);
    this.addElementRightService.deleteAddElementRight(addElementRightId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateAddElementRightDto) {
    const addElementRightId = parseInt(id, 10);
    const updatedAddElementRight = this.addElementRightService.updateAddElementRight(addElementRightId, dto)
    return fillObject(AddElementRightRdo, updatedAddElementRight);
  }
}
