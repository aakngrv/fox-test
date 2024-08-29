import { AddElementTestService } from './add-element-test.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { AddElementTestRdo } from './rdo/add-element-test.rdo';
import { CreateAddElementTestDto } from './dto/create-add-element-test.dto';
import { UpdateAddElementTestDto } from './dto/update-add-element-test.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Технический осмотр - Доп элемент к тест драйву')
@Controller('add-element-test')
export class AddElementTestController {
  
  constructor(
    private readonly addElementTestService: AddElementTestService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Доп элемент успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateAddElementTestDto) {
    const newAddElementTest = await this.addElementTestService.createAddElementTest(dto);
    return fillObject(AddElementTestRdo, newAddElementTest);
  }

  @ApiResponse({
    type: AddElementTestRdo,
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const addElementTestId = parseInt(id, 10);
    const existAddElementTest = await this.addElementTestService.getAddElementTest(addElementTestId);
    return fillObject(AddElementTestRdo, existAddElementTest);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о доп элементе успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const addElementTestId = parseInt(id, 10);
    this.addElementTestService.deleteAddElementTest(addElementTestId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateAddElementTestDto) {
    const addElementTestId = parseInt(id, 10);
    const updatedAddElementTest = this.addElementTestService.updateAddElementTest(addElementTestId, dto)
    return fillObject(AddElementTestRdo, updatedAddElementTest);
  }
}
