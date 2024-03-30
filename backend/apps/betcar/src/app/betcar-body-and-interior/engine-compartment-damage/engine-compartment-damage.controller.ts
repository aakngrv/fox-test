import { EngineCompartmentDamageService } from './engine-compartment-damage.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { EngineCompartmentDamageRdo } from './rdo/engine-compartment-damage.rdo';
import { CreateEngineCompartmentDamageDto } from './dto/create-engine-compartment-damage.dto';
import { UpdateEngineCompartmentDamageDto } from './dto/update-engine-compartment-damage.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Повреждения моторного отсека')
@Controller('engine-compartment-damage')
export class EngineCompartmentDamageController {
  
  constructor(
    private readonly engineCompartmentDamageService: EngineCompartmentDamageService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Повреждения мотора успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateEngineCompartmentDamageDto) {
    const newCreateEngineCompartmentDamage = await this.engineCompartmentDamageService.createEngineCompartmentDamage(dto);
    return fillObject(EngineCompartmentDamageRdo, newCreateEngineCompartmentDamage);
  }

  @ApiResponse({
    type: EngineCompartmentDamageRdo,
    status: HttpStatus.OK,
    description: 'Данные о повреждении мотора успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const engineCompartmentDamageId = parseInt(id, 10);
    const existEngineCompartmentDamage = await this.engineCompartmentDamageService.getEngineCompartmentDamage(engineCompartmentDamageId);
    return fillObject(EngineCompartmentDamageRdo, existEngineCompartmentDamage);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о повреждении мотора успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const engineCompartmentDamageId = parseInt(id, 10);
    this.engineCompartmentDamageService.deleteEngineCompartmentDamage(engineCompartmentDamageId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о повреждении мотора успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateEngineCompartmentDamageDto) {
    const engineCompartmentDamageId = parseInt(id, 10);
    const updatedEngineComparmentDamage = this.engineCompartmentDamageService.updateEngineCompartmentDamage(engineCompartmentDamageId, dto)
    return fillObject(EngineCompartmentDamageRdo, updatedEngineComparmentDamage);
  }
}