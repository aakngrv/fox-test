import { AddElementBackService } from './add-element-back.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { AddElementBackRdo } from './rdo/add-element-back.rdo';
import { CreateAddElementBackDto } from './dto/create-add-element-back.dto';
import { UpdateAddElementBackDto } from './dto/update-add-element-back.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Доп элемент к повреждениям задней части')
@Controller('add-element-back')
export class AddElementBackController {
  
  constructor(
    private readonly addElementBackService: AddElementBackService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Доп элемент успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateAddElementBackDto) {
    const newAddElementBack = await this.addElementBackService.createAddElementBack(dto);
    return fillObject(AddElementBackRdo, newAddElementBack);
  }

  @ApiResponse({
    type: AddElementBackRdo,
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const addElementBackId = parseInt(id, 10);
    const existAddElementBack = await this.addElementBackService.getAddElementBack(addElementBackId);
    return fillObject(AddElementBackRdo, existAddElementBack);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о доп элементе успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const addElementBackId = parseInt(id, 10);
    this.addElementBackService.deleteAddElementBack(addElementBackId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateAddElementBackDto) {
    const addElementBackId = parseInt(id, 10);
    const updatedAddElementBack = this.addElementBackService.updateAddElementBack(addElementBackId, dto)
    return fillObject(AddElementBackRdo, updatedAddElementBack);
  }
}
