import { StoppedEngineService} from "./stopped-engine.service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { StoppedEngineRdo} from "./rdo/stopped-engine.rdo";
import { CreateStoppedEngineDto} from "./dto/create-stopped-engine.dto";
import { UpdateStoppedEngineDto} from "./dto/update-stopped-engine.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Технический осмотр - Заглушенный двигатель')
@Controller('stopped-engine')
export class StoppedEngineController {

  constructor(
    private readonly stoppedEngineService: StoppedEngineService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Осмотр на заглушенном двигателе создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateStoppedEngineDto) {
    const newStoppedEngine = await this.stoppedEngineService.createStoppedEngine(dto);
    return fillObject(StoppedEngineRdo, newStoppedEngine);
  }

  @ApiResponse({
    type: StoppedEngineRdo,
    status: HttpStatus.OK,
    description: 'Осмотр на заглушенном двигателе найден'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const stoppedEngineId = parseInt(id, 10);
    const existStoppedEngine = await this.stoppedEngineService.getStoppedEngine(stoppedEngineId);
    return fillObject(StoppedEngineRdo, existStoppedEngine);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Осмотр на заглушенном двигателе удален'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const stoppedEngineId = parseInt(id, 10);
    this.stoppedEngineService.deleteStoppedEngine(stoppedEngineId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Осмотр на заглушенном двигателе обновлен'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateStoppedEngineDto) {
    const stoppedEngineId = parseInt(id, 10);
    const updatedStoppedEngine = this.stoppedEngineService.updateStoppedEngine(stoppedEngineId, dto)
    return fillObject(StoppedEngineRdo, updatedStoppedEngine);
  }
}