import { ComplectationSafetyService } from './complectation-safety.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { ComplectationSafetyRdo } from './rdo/complectation-safety.rdo';
import { CreateComplectationSafetyDto } from './dto/create-complectation-safety.dto';
import { UpdateComplectationSafetyDto } from './dto/update-complectation-safety.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Оснащение - Безопасность')
@Controller('complectation-safety')
export class ComplectationSafetyController {
  
  constructor(
    private readonly complectationSafetyService: ComplectationSafetyService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о безопасности успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateComplectationSafetyDto) {
    const newComplectationSafety = await this.complectationSafetyService.createComplectationSafety(dto);
    return fillObject(ComplectationSafetyRdo, newComplectationSafety);
  }

  @ApiResponse({
    type: ComplectationSafetyRdo,
    status: HttpStatus.OK,
    description: 'Данные о безопасности найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const complectationSafetyId = parseInt(id, 10);
    const existComplectationSafety = await this.complectationSafetyService.getComplectationSafety(complectationSafetyId);
    return fillObject(ComplectationSafetyRdo, existComplectationSafety);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о безопасности успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const complectationSafetyId = parseInt(id, 10);
    this.complectationSafetyService.deleteComplectationSafety(complectationSafetyId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о безопасности успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateComplectationSafetyDto) {
    const complectationSafetyId = parseInt(id, 10);
    const updatedComplecrationSafety = this.complectationSafetyService.updateComplectationSafety(complectationSafetyId, dto)
    return fillObject(ComplectationSafetyRdo, updatedComplecrationSafety);
  }
}