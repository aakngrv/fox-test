import { AddElementDiscService } from './add-element-disc.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { AddElementDiscRdo } from './rdo/add-element-disc.rdo';
import { CreateAddElementDiscDto } from './dto/create-add-element-disc.dto';
import { UpdateAddElementDiscDto } from './dto/update-add-element-disc.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Доп элемент к повреждениям колес')
@Controller('add-element-disc')
export class AddElementDiscController {
  
  constructor(
    private readonly addElementDiscService: AddElementDiscService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Доп элемент успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateAddElementDiscDto) {
    const newAddElementDisc = await this.addElementDiscService.createAddElementDisc(dto);
    return fillObject(AddElementDiscRdo, newAddElementDisc);
  }

  @ApiResponse({
    type: AddElementDiscRdo,
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const addElementDiscId = parseInt(id, 10);
    const existAddElementDisc = await this.addElementDiscService.getAddElementDisc(addElementDiscId);
    return fillObject(AddElementDiscRdo, existAddElementDisc);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о доп элементе успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const addElementDiscId = parseInt(id, 10);
    this.addElementDiscService.deleteAddElementDisc(addElementDiscId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateAddElementDiscDto) {
    const addElementDiscId = parseInt(id, 10);
    const updatedAddElementDisc = this.addElementDiscService.updateAddElementDisc(addElementDiscId, dto)
    return fillObject(AddElementDiscRdo, updatedAddElementDisc);
  }
}
