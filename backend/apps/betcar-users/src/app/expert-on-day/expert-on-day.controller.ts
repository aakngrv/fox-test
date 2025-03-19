import { ExpertOnDay } from './../../../../../libs/shared/shared-types/src/lib/bid.interface';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ExpertOnDayService } from './expert-on-day.service';
import { fillObject } from '@backend/util/util-core';
import { ExpertOnDayRdo } from './rdo/expert-on-day.rdo';
import { CreateExpertOnDayDto } from './dto/create-expert-on-day.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';



@ApiTags('Эксперт на весь день')
@Controller('expert-on-day')
export class ExpertOnDayController {
  constructor(
    private readonly expertOnDayService: ExpertOnDayService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Заявка успешно создана.'
  })
  @Post('/')
  async create(@Body() dto: CreateExpertOnDayDto) {
    const newExpertOnDay = await this.expertOnDayService.createExpertOnDay(dto);
    return fillObject(ExpertOnDayRdo, newExpertOnDay);
  }
  
  @ApiResponse({
    type: ExpertOnDayRdo,
    status: HttpStatus.OK,
    description: 'Заявка найдена'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const newExpertOnDayId = parseInt(id, 10);
    const existExpertOnDay = await this.expertOnDayService.getExpertOnday(newExpertOnDayId);
    return fillObject(ExpertOnDayRdo, existExpertOnDay);
  }

  
  @ApiResponse({
    type: ExpertOnDayRdo,
    status: HttpStatus.OK,
    description: 'Заявки найдены'
  })
  @Get('/')
  async index() {
    const expertsOnDay = await this.expertOnDayService.getExpertsOnDay();
    return fillObject(ExpertOnDayRdo, expertsOnDay);
  }
  
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Заявка удалена.'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const expertsOnDayId = parseInt(id, 10);
    await this.expertOnDayService.deleteExpertOnDay(expertsOnDayId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Заявка обновлена.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: CreateExpertOnDayDto) {
    const expertsOnDayId = parseInt(id, 10);
    const updatedExpertOnDay = await this.expertOnDayService.updateExpertOnDay(expertsOnDayId, dto)
    return fillObject(ExpertOnDayRdo, updatedExpertOnDay)
  }
}