import { AddElementDashService } from './add-element-dash.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { AddElementDashRdo } from './rdo/add-element-dash.rdo';
import { CreateAddElementDashDto } from './dto/create-add-element-dash.dto';
import { UpdateAddElementDashDto } from './dto/update-add-element-dash.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Технический осмотр - Доп элемент к дашборду')
@Controller('add-element-dash')
export class AddElementDashController {
  
  constructor(
    private readonly addElementDashService: AddElementDashService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Доп элемент успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateAddElementDashDto) {
    const newAddElementDash = await this.addElementDashService.createAddElementDash(dto);
    return fillObject(AddElementDashRdo, newAddElementDash);
  }

  @ApiResponse({
    type: AddElementDashRdo,
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const addElementDashId = parseInt(id, 10);
    const existAddElementDash = await this.addElementDashService.getAddElementDash(addElementDashId);
    return fillObject(AddElementDashRdo, existAddElementDash);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о доп элементе успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const addElementDashId = parseInt(id, 10);
    this.addElementDashService.deleteAddElementDash(addElementDashId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateAddElementDashDto) {
    const addElementDashId = parseInt(id, 10);
    const updatedAddElementDash = this.addElementDashService.updateAddElementDash(addElementDashId, dto)
    return fillObject(AddElementDashRdo, updatedAddElementDash);
  }
}
