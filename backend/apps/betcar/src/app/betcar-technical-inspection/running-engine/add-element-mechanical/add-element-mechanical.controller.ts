import { AddElementMechanicalService } from './add-element-mechanical.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { AddElementMechanicalRdo } from './rdo/add-element-mechanical.rdo';
import { CreateAddElementMechanicalDto } from './dto/create-add-element-mechanical.dto';
import { UpdateAddElementMechanicalDto } from './dto/update-add-element-mechanical.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Технический осмотр - Доп элемент к запущенному двигателю мех')
@Controller('add-element-mechanical')
export class AddElementMechanicalController {
  
  constructor(
    private readonly addElementMechanicalService: AddElementMechanicalService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Доп элемент успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateAddElementMechanicalDto) {
    const newAddElementMechanical = await this.addElementMechanicalService.createAddElementMechanical(dto);
    return fillObject(AddElementMechanicalRdo, newAddElementMechanical);
  }

  @ApiResponse({
    type: AddElementMechanicalRdo,
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const addElementMechanicalId = parseInt(id, 10);
    const existAddElementMechanical = await this.addElementMechanicalService.getAddElementMechanical(addElementMechanicalId);
    return fillObject(AddElementMechanicalRdo, existAddElementMechanical);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о доп элементе успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const addElementMechanicalId = parseInt(id, 10);
    this.addElementMechanicalService.deleteAddElementMechanical(addElementMechanicalId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateAddElementMechanicalDto) {
    const addElementMechanicalId = parseInt(id, 10);
    const updatedAddElementMechanical = this.addElementMechanicalService.updateAddElementMechanical(addElementMechanicalId, dto)
    return fillObject(AddElementMechanicalRdo, updatedAddElementMechanical);
  }
}
