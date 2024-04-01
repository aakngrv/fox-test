import { DiscDamageService } from './disc-damage.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { DiscDamageRdo } from './rdo/disc-damage.rdo';
import { CreateDiscDamageDto } from './dto/create-disc-damage.dto';
import { UpdateDiscDamageDto } from './dto/update-disc-damage.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Повреждения колес')
@Controller('disc-damage')
export class DiscDamageController {
  
  constructor(
    private readonly discDamageService: DiscDamageService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о повреждениях колес успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateDiscDamageDto) {
    const newCreateDiscDamage = await this.discDamageService.createDiscDamage(dto);
    return fillObject(DiscDamageRdo, newCreateDiscDamage);
  }

  @ApiResponse({
    type: DiscDamageRdo,
    status: HttpStatus.OK,
    description: 'Данные о повреждениях колес успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const discDamageId = parseInt(id, 10);
    const existDiscDamage = await this.discDamageService.getDiscDamage(discDamageId);
    return fillObject(DiscDamageRdo, existDiscDamage);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о повреждениях колес успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const discDamageId = parseInt(id, 10);
    this.discDamageService.deleteDiscDamage(discDamageId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о повреждениях колес успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateDiscDamageDto) {
    const discDamageId = parseInt(id, 10);
    const updatedDiscDamage = this.discDamageService.updateDiscDamage(discDamageId, dto)
    return fillObject(DiscDamageRdo, updatedDiscDamage);
  }
}