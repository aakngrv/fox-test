import { TrunkDamageService } from './trunk-damage.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { TrunkDamageRdo } from './rdo/trunk-damage.rdo';
import { CreateTrunkDamageDto } from './dto/create-trunk-damage.dto';
import { UpdateTrunkDamageDto } from './dto/update-trunk-damage.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Повреждения крышки багажника')
@Controller('trunk-damage')
export class TrunkDamageController {
  
  constructor(
    private readonly trunkDamageService: TrunkDamageService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о повреждении крышки багажника успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateTrunkDamageDto) {
    const newCreateTrunkDamage = await this.trunkDamageService.createTrunkDamage(dto);
    return fillObject(TrunkDamageRdo, newCreateTrunkDamage);
  }

  @ApiResponse({
    type: TrunkDamageRdo,
    status: HttpStatus.OK,
    description: 'Данные о повреждении крышки багажника успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const trunkDamageId = parseInt(id, 10);
    const existTrunkDamage = await this.trunkDamageService.getTrunkDamage(trunkDamageId);
    return fillObject(TrunkDamageRdo, existTrunkDamage);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о повреждении крышки багажника успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const trunkDamageId = parseInt(id, 10);
    this.trunkDamageService.deleteTrunkamage(trunkDamageId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о повреждении крышки багажника успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateTrunkDamageDto) {
    const trunkDamageId = parseInt(id, 10);
    const updatedTrunkDamage = this.trunkDamageService.updateTrunkDamage(trunkDamageId, dto)
    return fillObject(TrunkDamageRdo, updatedTrunkDamage);
  }
}