import { GlassDamageService } from './glass-damage.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { GlassDamageRdo } from './rdo/glass-damage.rdo';
import { CreateGlassDamageDto } from './dto/create-glass-damage.dto';
import { UpdateGlassDamageDto } from './dto/update-glass-damage.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Повреждения стекол')
@Controller('glass-damage')
export class GlassDamageController {
  
  constructor(
    private readonly glassDamageService: GlassDamageService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о повреждениях стекол успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateGlassDamageDto) {
    const newCreateGlassDamage = await this.glassDamageService.createGlassDamage(dto);
    return fillObject(GlassDamageRdo, newCreateGlassDamage);
  }

  @ApiResponse({
    type: GlassDamageRdo,
    status: HttpStatus.OK,
    description: 'Данные о повреждениях стекол успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const glassDamageId = parseInt(id, 10);
    const existGlassDamage = await this.glassDamageService.getGlassDamage(glassDamageId);
    return fillObject(GlassDamageRdo, existGlassDamage);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о повреждениях стекол успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const glassDamageId = parseInt(id, 10);
    this.glassDamageService.deleteGlassDamage(glassDamageId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о повреждениях стекол успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateGlassDamageDto) {
    const glassDamageId = parseInt(id, 10);
    const updatedGlassDamage = this.glassDamageService.updateGlassDamage(glassDamageId, dto)
    return fillObject(GlassDamageRdo, updatedGlassDamage);
  }
}