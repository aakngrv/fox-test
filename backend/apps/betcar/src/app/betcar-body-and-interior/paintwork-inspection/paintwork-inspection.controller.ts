import { PaintworkInspectionService } from './paintwork-inspection.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { PaintworkInspectionRdo } from './rdo/paintwork-inspection.rdo';
import { CreatePaintworkInspectionDto } from './dto/create-paintwork-inspection.dto';
import { UpdatePaintworkInspectionDto } from './dto/update-paintwork-inspection.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Проверка ЛКП')
@Controller('paintwork-inspection')
export class PaintworkInspectionController {
  
  constructor(
    private readonly paintworkInspectionService: PaintworkInspectionService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о проверке ЛКП успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreatePaintworkInspectionDto) {
    const newPaintworkInspection = await this.paintworkInspectionService.createPaintworkInspection(dto);
    return fillObject(PaintworkInspectionRdo, newPaintworkInspection);
  }

  @ApiResponse({
    type: PaintworkInspectionRdo,
    status: HttpStatus.OK,
    description: 'Данные о проверке ЛКП найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const paintworkInspectionId = parseInt(id, 10);
    const existPaintowrkInspection = await this.paintworkInspectionService.getPaintworkInspection(paintworkInspectionId);
    return fillObject(PaintworkInspectionRdo, existPaintowrkInspection);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о проверке ЛКП успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const paintworkInspectionId = parseInt(id, 10);
    this.paintworkInspectionService.deletePaintworkInspection(paintworkInspectionId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о проверке ЛКП спешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdatePaintworkInspectionDto) {
    const paintworkInspectionId = parseInt(id, 10);
    const updatedPaintworkInspection = this.paintworkInspectionService.updatePaintworkInspection(paintworkInspectionId, dto)
    return fillObject(PaintworkInspectionRdo, updatedPaintworkInspection);
  }
}