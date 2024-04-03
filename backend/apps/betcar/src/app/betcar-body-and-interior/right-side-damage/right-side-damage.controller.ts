import { RightSideDamageService } from './right-side-damage.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { RightSideDamageRdo } from './rdo/right-side-damage.rdo';
import { CreateRightSideDamageDto } from './dto/create-right-side-damage.dto';
import { UpdateRightSideDamageDto } from './dto/update-right-side-damage.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Повреждения правой части')
@Controller('right-side-damage')
export class RightSideDamageController {
  
  constructor(
    private readonly rightSideDamageService: RightSideDamageService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о повреждении правой части успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateRightSideDamageDto) {
    const newCreateRightSideDamage = await this.rightSideDamageService.createRightSideDamage(dto);
    return fillObject(RightSideDamageRdo, newCreateRightSideDamage);
  }

  @ApiResponse({
    type: RightSideDamageRdo,
    status: HttpStatus.OK,
    description: 'Данные о повреждении правой части успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const rightSideDamageId = parseInt(id, 10);
    const existRightSideDamage = await this.rightSideDamageService.getRightSideDamage(rightSideDamageId);
    return fillObject(RightSideDamageRdo, existRightSideDamage);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о повреждении правой части успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const rightSideDamageId = parseInt(id, 10);
    this.rightSideDamageService.deleteRightSideDamage(rightSideDamageId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о повреждении правой части успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateRightSideDamageDto) {
    const rightSideamageId = parseInt(id, 10);
    const updatedRightSideDamage = this.rightSideDamageService.updateRightSideDamage(rightSideamageId, dto)
    return fillObject(RightSideDamageRdo, updatedRightSideDamage);
  }
}