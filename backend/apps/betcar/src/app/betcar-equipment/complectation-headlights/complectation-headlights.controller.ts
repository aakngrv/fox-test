import { ComplectationHeadlightsService } from './complectation-headlights.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { ComplectationHeadlightsRdo } from './rdo/complectation-headlights.rdo';
import { CreateComplectationHeadlightsDto } from './dto/create-complectation-headlights.dto';
import { UpdateComplectationHeadlightsDto } from './dto/update-complectation-headlights.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Оснащение - Светотехника')
@Controller('complectation-headlights')
export class ComplectationHeadlightsController {
  
  constructor(
    private readonly complectationHeadlightsService: ComplectationHeadlightsService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о фарах успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateComplectationHeadlightsDto) {
    const newComplectationHeadlights = await this.complectationHeadlightsService.createComplectationHeadlights(dto);
    return fillObject(ComplectationHeadlightsRdo, newComplectationHeadlights);
  }

  @ApiResponse({
    type: ComplectationHeadlightsRdo,
    status: HttpStatus.OK,
    description: 'Данные о фарах найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const complectationHeadlightsId = parseInt(id, 10);
    const existComplectationHeadlights = await this.complectationHeadlightsService.getComplectationHeadlights(complectationHeadlightsId);
    return fillObject(ComplectationHeadlightsRdo, existComplectationHeadlights);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о фарах успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const complectationHeadlightsId = parseInt(id, 10);
    this.complectationHeadlightsService.deleteComplectationHeadlights(complectationHeadlightsId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о фарах успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateComplectationHeadlightsDto) {
    const complectationHeadlightsId = parseInt(id, 10);
    const updatedComplecrationHeadlights = this.complectationHeadlightsService.updateComplectationHeadlights(complectationHeadlightsId, dto)
    return fillObject(ComplectationHeadlightsRdo, updatedComplecrationHeadlights);
  }
}