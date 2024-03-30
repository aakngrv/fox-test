import { AddElementFrontService } from './add-element-front.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { AddElementFrontRdo } from './rdo/add-element-front.rdo';
import { CreateAddElementFrontDto } from './dto/create-add-element-front.dto';
import { UpdateAddElementFrontDto } from './dto/update-add-element-front';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Доп элемент к повреждениям передней части')
@Controller('add-element-front')
export class AddElementFrontController {
  
  constructor(
    private readonly addElementFrontService: AddElementFrontService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Доп элемент успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateAddElementFrontDto) {
    const newAddElementFront = await this.addElementFrontService.createAddElementFront(dto);
    return fillObject(AddElementFrontRdo, newAddElementFront);
  }

  @ApiResponse({
    type: AddElementFrontRdo,
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const addElementFrontId = parseInt(id, 10);
    const existAddElementFront = await this.addElementFrontService.getAddElementFront(addElementFrontId);
    return fillObject(AddElementFrontRdo, existAddElementFront);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о доп элементе успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const addElementFrontId = parseInt(id, 10);
    this.addElementFrontService.deleteAddElementFront(addElementFrontId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateAddElementFrontDto) {
    const addElementFrontId = parseInt(id, 10);
    const updatedAddElementFront = this.addElementFrontService.updateAddElementFront(addElementFrontId, dto)
    return fillObject(AddElementFrontRdo, updatedAddElementFront);
  }
}
