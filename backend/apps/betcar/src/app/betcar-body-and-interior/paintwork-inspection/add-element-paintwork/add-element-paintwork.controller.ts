import { AddElementPaintworkService } from './add-element-paintwork.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { AddElementPaintworkRdo } from './rdo/add-element-paintwork.rdo';
import { CreateAddElementPaintworkDto } from './dto/create-add-element-paintwork.dto';
import { UpdateAddElementPaintworkDto } from './dto/update-add-element-paintwork.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Доп элемент к ЛКП')
@Controller('add-element-paintwork')
export class AddElementPaintworkController {
  
  constructor(
    private readonly addElementPaintworkService: AddElementPaintworkService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Доп элемент успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateAddElementPaintworkDto) {
    const newAddElementPaintwork = await this.addElementPaintworkService.createAddElementPaintwork(dto);
    return fillObject(AddElementPaintworkRdo, newAddElementPaintwork);
  }

  @ApiResponse({
    type: AddElementPaintworkRdo,
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const addElementPaintworkId = parseInt(id, 10);
    const existAddElementPaintwork = await this.addElementPaintworkService.getAddElementPaintwork(addElementPaintworkId);
    return fillObject(AddElementPaintworkRdo, existAddElementPaintwork);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о доп элементе успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const addElementPaintworkId = parseInt(id, 10);
    this.addElementPaintworkService.deleteAddElementPaintwork(addElementPaintworkId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateAddElementPaintworkDto) {
    const addElementPaintworkId = parseInt(id, 10);
    const updatedAddElementPaintwork = this.addElementPaintworkService.updateAddElementPaintwork(addElementPaintworkId, dto)
    return fillObject(AddElementPaintworkRdo, updatedAddElementPaintwork);
  }
}
