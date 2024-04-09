import { RunningEngineService} from "./running-engine.service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { RunningEngineRdo} from "./rdo/running-engine.rdo";
import { CreateRunningEngineDto } from "./dto/create-running-engine.dto";
import { UpdateRunningEngineDto } from "./dto/update-running-engine.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Технический осмотр - Запущенный двигатель')
@Controller('running-engine')
export class RunningEngineController {

  constructor(
    private readonly runningEngineService: RunningEngineService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Осмотр на запущенном двигателе создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateRunningEngineDto) {
    const newRunningEngine = await this.runningEngineService.createRunningEngine(dto);
    return fillObject(RunningEngineRdo, newRunningEngine);
  }

  @ApiResponse({
    type: RunningEngineRdo,
    status: HttpStatus.OK,
    description: 'Осмотр на запущенном двигателе найден'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const runningEngineId = parseInt(id, 10);
    const existRunningEngine = await this.runningEngineService.getRunningEngine(runningEngineId);
    return fillObject(RunningEngineRdo, existRunningEngine);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Осмотр на запущенном двигателе удален'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const runningEngineId = parseInt(id, 10);
    this.runningEngineService.deleteRunningEngine(runningEngineId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Осмотр на запущенном двигателе обновлен'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateRunningEngineDto) {
    const runningEngineId = parseInt(id, 10);
    const updatedRunningEngine = this.runningEngineService.updateRunningEngine(runningEngineId, dto)
    return fillObject(RunningEngineRdo, updatedRunningEngine);
  }
}