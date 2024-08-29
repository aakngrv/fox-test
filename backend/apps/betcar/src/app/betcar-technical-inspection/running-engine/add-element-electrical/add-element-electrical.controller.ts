import { AddElementElectricalService } from './add-element-electrical.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { AddElementElectricalRdo } from './rdo/add-element-electrical.rdo';
import { CreateAddElementElectricalDto } from './dto/create-add-element-electrical.dto';
import { UpdateAddElementElectricalDto } from './dto/update-add-element-electrical.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Технический осмотр - Доп элемент к запущенному двигателю эл')
@Controller('add-element-electrical')
export class AddElementElectricalController {
  
  constructor(
    private readonly addElementElectricalService: AddElementElectricalService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Доп элемент успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateAddElementElectricalDto) {
    const newAddElementElectrical = await this.addElementElectricalService.createAddElementElectrical(dto);
    return fillObject(AddElementElectricalRdo, newAddElementElectrical);
  }

  @ApiResponse({
    type: AddElementElectricalRdo,
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const addElementElectricalId = parseInt(id, 10);
    const existAddElementElectrical = await this.addElementElectricalService.getAddElementElectrical(addElementElectricalId);
    return fillObject(AddElementElectricalRdo, existAddElementElectrical);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о доп элементе успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const addElementElectricalId = parseInt(id, 10);
    this.addElementElectricalService.deleteAddElementElectrical(addElementElectricalId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о доп элементе успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateAddElementElectricalDto) {
    const addElementElectricalId = parseInt(id, 10);
    const updatedAddElementElectrical = this.addElementElectricalService.updateAddElementElectrical(addElementElectricalId, dto)
    return fillObject(AddElementElectricalRdo, updatedAddElementElectrical);
  }
}
