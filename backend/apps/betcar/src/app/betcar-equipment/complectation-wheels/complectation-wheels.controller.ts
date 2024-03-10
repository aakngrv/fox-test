import { ComplectationWheelsService } from './complectation-wheels.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { ComplectationWheelsRdo } from './rdo/complectation-wheels.rdo';
import { CreateComplectationWheelsDto } from './dto/create-complectation-wheels.dto';
import { UpdateComplectationWheelsDto } from './dto/update-complectation-wheels.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Оснащение - колеса')
@Controller('complectation-wheels')
export class ComplectationWheelsController {
  
  constructor(
    private readonly complectationWheelsService: ComplectationWheelsService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о шинах успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateComplectationWheelsDto) {
    const newComplectationWheels = await this.complectationWheelsService.createComplectationWheels(dto);
    return fillObject(ComplectationWheelsRdo, newComplectationWheels);
  }

  @ApiResponse({
    type: ComplectationWheelsRdo,
    status: HttpStatus.OK,
    description: 'Данные о шинах найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const complectationWheelsId = parseInt(id, 10);
    const existComplectationWheels = await this.complectationWheelsService.getComplectationWheels(complectationWheelsId);
    return fillObject(ComplectationWheelsRdo, existComplectationWheels);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о шинах успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const complectationWheelsId = parseInt(id, 10);
    this.complectationWheelsService.deleteComplectationWheels(complectationWheelsId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о шинах успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateComplectationWheelsDto) {
    const complectationWheelsId = parseInt(id, 10);
    const updatedComplecrationWheels = this.complectationWheelsService.updateComplectationWheels(complectationWheelsId, dto)
    return fillObject(ComplectationWheelsRdo, updatedComplecrationWheels);
  }
}