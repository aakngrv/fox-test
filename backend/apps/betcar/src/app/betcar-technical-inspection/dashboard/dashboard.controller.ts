import { DashboardService} from "./dashboard.service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { DashboardRdo } from "./rdo/dashboard.rdo";
import { CreateDashboardDto } from "./dto/create-dashboard.dto";
import { UpdateDashboardDto } from "./dto/update-dashboard.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Технический осмотр - Приборная панель')
@Controller('dashboard')
export class DashboardController {

  constructor(
    private readonly dashboardService: DashboardService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Обзор приборной панели создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateDashboardDto) {
    const newDashboard = await this.dashboardService.createDashboard(dto);
    return fillObject(DashboardRdo, newDashboard);
  }

  @ApiResponse({
    type: DashboardRdo,
    status: HttpStatus.OK,
    description: 'Обзор приборной панели найден'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const dashboardId = parseInt(id, 10);
    const existDashboard = await this.dashboardService.getDashboard(dashboardId);
    return fillObject(DashboardRdo, existDashboard);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Обзор приборной панели удален'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const dashboardId = parseInt(id, 10);
    this.dashboardService.deleteDashboard(dashboardId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Обзор приборной панели обновлен'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateDashboardDto) {
    const dashboardId = parseInt(id, 10);
    const updatedDashboard = this.dashboardService.updateDashboard(dashboardId, dto)
    return fillObject(DashboardRdo, updatedDashboard);
  }
}