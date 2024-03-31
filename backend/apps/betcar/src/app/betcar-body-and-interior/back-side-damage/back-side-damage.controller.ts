import { BackSideDamageService } from './back-side-damage.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { BackSideDamageRdo } from './rdo/back-side-damage.rdo';
import { CreateBackSideDamageDto } from './dto/create-back-side-damage.dto';
import { UpdateBackSideDamageDto } from './dto/update-back-side-damage.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Повреждения задней части')
@Controller('back-side-damage')
export class BackSideDamageController {
  
  constructor(
    private readonly backSideDamageService: BackSideDamageService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о повреждении задней части успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateBackSideDamageDto) {
    const newCreateBackSideDamage = await this.backSideDamageService.createBackSideDamage(dto);
    return fillObject(BackSideDamageRdo, newCreateBackSideDamage);
  }

  @ApiResponse({
    type: BackSideDamageRdo,
    status: HttpStatus.OK,
    description: 'Данные о повреждении задней части успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const backSideDamageId = parseInt(id, 10);
    const existBackSideDamage = await this.backSideDamageService.getBackSideDamage(backSideDamageId);
    return fillObject(BackSideDamageRdo, existBackSideDamage);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о повреждении задней части успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const backSideDamageId = parseInt(id, 10);
    this.backSideDamageService.deleteBackSideDamage(backSideDamageId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о повреждении задней части успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateBackSideDamageDto) {
    const backSideamageId = parseInt(id, 10);
    const updatedBackSideDamage = this.backSideDamageService.updateBackSideDamage(backSideamageId, dto)
    return fillObject(BackSideDamageRdo, updatedBackSideDamage);
  }
}