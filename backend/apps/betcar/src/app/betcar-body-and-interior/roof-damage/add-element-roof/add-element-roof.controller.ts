import { AddElementRoofService } from './add-element-roof.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { AddElementRoofRdo } from './rdo/add-element-roof.rdo';
import { CreateAddElementRoofDto } from './dto/create-add-element-roof.dto';
import { UpdateAddElementRoofDto } from './dto/update-add-element-roof.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Доп элемент к повреждениям крыши')
@Controller('add-element-roof')
export class AddElementRoofController {
  
  constructor(
    private readonly addElementRoofService: AddElementRoofService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Доп элемент успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateAddElementRoofDto) {
    const newAddElementRoof = await this.addElementRoofService.createAddElementRoof(dto);
    return fillObject(AddElementRoofRdo, newAddElementRoof);
  }

  @ApiResponse({
    type: AddElementRoofRdo,
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const addElementRoofId = parseInt(id, 10);
    const existAddElementRoof = await this.addElementRoofService.getAddElementRoof(addElementRoofId);
    return fillObject(AddElementRoofRdo, existAddElementRoof);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о доп элементе успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const addElementRoofId = parseInt(id, 10);
    this.addElementRoofService.deleteAddElementRoof(addElementRoofId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateAddElementRoofDto) {
    const addElementRoofId = parseInt(id, 10);
    const updatedAddElementRoof = this.addElementRoofService.updateAddElementRoof(addElementRoofId, dto)
    return fillObject(AddElementRoofRdo, updatedAddElementRoof);
  }
}
