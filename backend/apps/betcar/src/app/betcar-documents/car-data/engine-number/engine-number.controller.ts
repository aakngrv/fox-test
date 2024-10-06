import { EngineNumberService } from "./engine-number.service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { EngineNumberRdo} from "./rdo/engine-number.rdo";
import { CreateEngineNumberDto } from "./dto/create-engine-number.dto";
import { UpdateEngineNumberDto } from "./dto/update-engine-number.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Номер двигателя')
@Controller('engine-number')
export class EngineNumberController {

  constructor(
    private readonly engineNumberService: EngineNumberService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Двигателя номер создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateEngineNumberDto) {
    const newEngineNumber = await this.engineNumberService.createEngineNumber(dto);
    return fillObject(EngineNumberRdo, newEngineNumber);
  }

  @ApiResponse({
    type: EngineNumberRdo,
    status: HttpStatus.OK,
    description: 'Двигателя номер найден'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const engineNumberId = parseInt(id, 10);
    const existEngineNumber = await this.engineNumberService.getEngineNumber(engineNumberId);
    return fillObject(EngineNumberRdo, existEngineNumber);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Двигателя номер удален'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const engineNumberId = parseInt(id, 10);
    await this.engineNumberService.deleteEngineNumber(engineNumberId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Двигателя номер обновлен'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateEngineNumberDto) {
    const engineNumberId = parseInt(id, 10);
    const updatedEngineNumber= this.engineNumberService.updateEngineNumber(engineNumberId, dto)
    return fillObject(EngineNumberRdo, updatedEngineNumber);
  }
}