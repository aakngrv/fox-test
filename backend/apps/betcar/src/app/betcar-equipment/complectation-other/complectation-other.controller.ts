import { ComplectationOtherService } from './complectation-other.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { ComplectationOtherRdo } from './rdo/complectation-other.rdo';
import { CreateComplectationOtherDto } from './dto/create-complectation-other.dto';
import { UpdateComplectationOtherDto } from './dto/update-complectation-other.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Оснащение - Разное')
@Controller('complectation-other')
export class ComplectationOtherController {
  
  constructor(
    private readonly complectationOtherService: ComplectationOtherService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о разном успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateComplectationOtherDto) {
    const newComplectationOther = await this.complectationOtherService.createComplectationOther(dto);
    return fillObject(ComplectationOtherRdo, newComplectationOther);
  }

  @ApiResponse({
    type: ComplectationOtherRdo,
    status: HttpStatus.OK,
    description: 'Данные о разном найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const complectationOtherId = parseInt(id, 10);
    const existComplectationOther = await this.complectationOtherService.getComplectationOther(complectationOtherId);
    return fillObject(ComplectationOtherRdo, existComplectationOther);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о разном успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const complectationOtherId = parseInt(id, 10);
    this.complectationOtherService.deleteComplectationOther(complectationOtherId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о разном успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateComplectationOtherDto) {
    const complectationOtherId = parseInt(id, 10);
    const updatedComplecrationOther = this.complectationOtherService.updateComplectationOther(complectationOtherId, dto)
    return fillObject(ComplectationOtherRdo, updatedComplecrationOther);
  }
}