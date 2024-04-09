import { ComplectationSalonService } from './complectation-salon.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { ComplectationSalonRdo } from './rdo/complectation-salon.rdo';
import { CreateComplectationSalonDto } from './dto/create-complectation-salon.dto';
import { UpdateComplectationSalonDto } from './dto/update-complectation-salon.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Оснащение - Салон')
@Controller('complectation-salon')
export class ComplectationSalonController {
  
  constructor(
    private readonly complectationSalonService: ComplectationSalonService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о салоне успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateComplectationSalonDto) {
    const newComplectationSalon = await this.complectationSalonService.createComplectationSalon(dto);
    return fillObject(ComplectationSalonRdo, newComplectationSalon);
  }

  @ApiResponse({
    type: ComplectationSalonRdo,
    status: HttpStatus.OK,
    description: 'Данные о салоне найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const complectationSalonId = parseInt(id, 10);
    const existComplectationSalon = await this.complectationSalonService.getComplectationSalon(complectationSalonId);
    return fillObject(ComplectationSalonRdo, existComplectationSalon);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о салоне успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const complectationSalonId = parseInt(id, 10);
    this.complectationSalonService.deleteComplectationSalon(complectationSalonId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о салоне успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateComplectationSalonDto) {
    const complectationSalonId = parseInt(id, 10);
    const updatedComplecrationSalon = this.complectationSalonService.updateComplectationSalon(complectationSalonId, dto)
    return fillObject(ComplectationSalonRdo, updatedComplecrationSalon);
  }
}