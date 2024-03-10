import { ComplectationComfortService } from './complectation-comfort.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { ComplectationComfortRdo } from './rdo/complectation-comfort.rdo';
import { CreateComplectationComfortDto } from './dto/create-complectation-comfort.dto';
import { UpdateComplectationComfortDto } from './dto/update-complectation-comfort.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Оснащение - Комфорт')
@Controller('complectation-comfort')
export class ComplectationComfortController {
  
  constructor(
    private readonly complectationComfortService: ComplectationComfortService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о комфорте успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateComplectationComfortDto) {
    const newComplectationComfort = await this.complectationComfortService.createComplectationComfort(dto);
    return fillObject(ComplectationComfortRdo, newComplectationComfort);
  }

  @ApiResponse({
    type: ComplectationComfortRdo,
    status: HttpStatus.OK,
    description: 'Данные о комфорте найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const complectationComfortId = parseInt(id, 10);
    const existComplectationComfort = await this.complectationComfortService.getComplectationComfort(complectationComfortId);
    return fillObject(ComplectationComfortRdo, existComplectationComfort);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о комфорте успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const complectationComfortId = parseInt(id, 10);
    this.complectationComfortService.deleteComplectationComfort(complectationComfortId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о комфорте успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateComplectationComfortDto) {
    const complectationComfortId = parseInt(id, 10);
    const updatedComplecrationComfort = this.complectationComfortService.updateComplectationComfort(complectationComfortId, dto)
    return fillObject(ComplectationComfortRdo, updatedComplecrationComfort);
  }
}