import { LeftSideDamageService } from './left-side-damage.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { LeftSideDamageRdo } from './rdo/left-side-damage.rdo';
import { CreateLeftSideDamageDto } from './dto/create-left-side-damage.dto';
import { UpdateLeftSideDamageDto } from './dto/update-left-side-damage.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Повреждения левой части')
@Controller('left-side-damage')
export class LeftSideDamageController {
  
  constructor(
    private readonly leftSideDamageService: LeftSideDamageService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о повреждении левой части успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateLeftSideDamageDto) {
    const newCreateLeftSideDamage = await this.leftSideDamageService.createLeftSideDamage(dto);
    return fillObject(LeftSideDamageRdo, newCreateLeftSideDamage);
  }

  @ApiResponse({
    type: LeftSideDamageRdo,
    status: HttpStatus.OK,
    description: 'Данные о повреждении левой части успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const leftSideDamageId = parseInt(id, 10);
    const existLeftSideDamage = await this.leftSideDamageService.getLeftSideDamage(leftSideDamageId);
    return fillObject(LeftSideDamageRdo, existLeftSideDamage);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о повреждении левой части успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const leftSideDamageId = parseInt(id, 10);
    this.leftSideDamageService.deleteLeftSideDamage(leftSideDamageId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о повреждении левой части успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateLeftSideDamageDto) {
    const leftSideamageId = parseInt(id, 10);
    const updatedLeftSideDamage = this.leftSideDamageService.updateLeftSideDamage(leftSideamageId, dto)
    return fillObject(LeftSideDamageRdo, updatedLeftSideDamage);
  }
}