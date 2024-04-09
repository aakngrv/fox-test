import { AddElementGlassService } from './add-element-glass.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { AddElementGlassRdo } from './rdo/add-element-glass.rdo';
import { CreateAddElementGlassDto } from './dto/create-add-element-glass.dto';
import { UpdateAddElementGlassDto } from './dto/update-add-element-glass.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Доп элемент к повреждениям стекол')
@Controller('add-element-glass')
export class AddElementGlassController {
  
  constructor(
    private readonly addElementGlassService: AddElementGlassService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Доп элемент успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateAddElementGlassDto) {
    const newAddElementGlass = await this.addElementGlassService.createAddElementGlass(dto);
    return fillObject(AddElementGlassRdo, newAddElementGlass);
  }

  @ApiResponse({
    type: AddElementGlassRdo,
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const addElementGlassId = parseInt(id, 10);
    const existAddElementGlass = await this.addElementGlassService.getAddElementGlass(addElementGlassId);
    return fillObject(AddElementGlassRdo, existAddElementGlass);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о доп элементе успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const addElementGlassId = parseInt(id, 10);
    this.addElementGlassService.deleteAddElementGlass(addElementGlassId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateAddElementGlassDto) {
    const addElementGlassId = parseInt(id, 10);
    const updatedAddElementGlass = this.addElementGlassService.updateAddElementGlass(addElementGlassId, dto)
    return fillObject(AddElementGlassRdo, updatedAddElementGlass);
  }
}
