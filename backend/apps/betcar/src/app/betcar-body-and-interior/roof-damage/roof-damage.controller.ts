import { RoofDamageService } from './roof-damage.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { RoofDamageRdo } from './rdo/roof-damage.rdo';
import { CreateRoofDamageDto } from './dto/create-roof-damage.dto';
import { UpdateRoofDamageDto } from './dto/update-roof-damage.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Повреждения крыши')
@Controller('roof-damage')
export class RoofDamageController {
  
  constructor(
    private readonly roofDamageService: RoofDamageService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о повреждениях крыши успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateRoofDamageDto) {
    const newCreateRoofDamage = await this.roofDamageService.createRoofDamage(dto);
    return fillObject(RoofDamageRdo, newCreateRoofDamage);
  }

  @ApiResponse({
    type: RoofDamageRdo,
    status: HttpStatus.OK,
    description: 'Данные о повреждениях крыши успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const roofDamageId = parseInt(id, 10);
    const existRoofDamage = await this.roofDamageService.getRoofDamage(roofDamageId);
    return fillObject(RoofDamageRdo, existRoofDamage);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о повреждениях крыши успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const roofDamageId = parseInt(id, 10);
    this.roofDamageService.deleteRoofDamage(roofDamageId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о повреждениях крыши успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateRoofDamageDto) {
    const roofDamageId = parseInt(id, 10);
    const updatedRoofDamage = this.roofDamageService.updateRoofDamage(roofDamageId, dto)
    return fillObject(RoofDamageRdo, updatedRoofDamage);
  }
}