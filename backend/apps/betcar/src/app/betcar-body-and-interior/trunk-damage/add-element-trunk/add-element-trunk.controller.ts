import { AddElementTrunkService } from './add-element-trunk.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { AddElementTrunkRdo } from './rdo/add-element-trunk.rdo';
import { CreateAddElementTrunkDto } from './dto/create-add-element-trunk.dto';
import { UpdateAddElementTrunkDto } from './dto/update-add-element-trunk.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Доп элемент к повреждениям багажника')
@Controller('add-element-trunk')
export class AddElementTrunkController {
  
  constructor(
    private readonly addElementTrunkService: AddElementTrunkService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Доп элемент успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateAddElementTrunkDto) {
    const newAddElementTrunk = await this.addElementTrunkService.createAddElementTrunk(dto);
    return fillObject(AddElementTrunkRdo, newAddElementTrunk);
  }

  @ApiResponse({
    type: AddElementTrunkRdo,
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const addElementTrunkId = parseInt(id, 10);
    const existAddElementTrunk = await this.addElementTrunkService.getAddElementTrunk(addElementTrunkId);
    return fillObject(AddElementTrunkRdo, existAddElementTrunk);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о доп элементе успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const addElementTrunkId = parseInt(id, 10);
    this.addElementTrunkService.deleteAddElementTrunk(addElementTrunkId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateAddElementTrunkDto) {
    const addElementTrunkId = parseInt(id, 10);
    const updatedAddElementTrunk = this.addElementTrunkService.updateAddElementTrunk(addElementTrunkId, dto)
    return fillObject(AddElementTrunkRdo, updatedAddElementTrunk);
  }
}
