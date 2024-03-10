import { ComplectationMultimediaService } from './complectation-multimedia.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { ComplectationMultimediaRdo } from './rdo/complectation-multimedia.rdo';
import { CreateComplectationMultimediaDto } from './dto/create-complectation-multimedia.dto';
import { UpdateComplectationMultimediaDto } from './dto/update-complectation-multimedia.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Оснащение - Мультимедиа')
@Controller('complectation-multimedia')
export class ComplectationMultimediaController {
  
  constructor(
    private readonly complectationMultimediaService: ComplectationMultimediaService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о мультимедиа успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateComplectationMultimediaDto) {
    const newComplectationMultimedia = await this.complectationMultimediaService.createComplectationMultimedia(dto);
    return fillObject(ComplectationMultimediaRdo, newComplectationMultimedia);
  }

  @ApiResponse({
    type: ComplectationMultimediaRdo,
    status: HttpStatus.OK,
    description: 'Данные о мультимедиа найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const complectationMultimediaId = parseInt(id, 10);
    const existComplectationMultimedia = await this.complectationMultimediaService.getComplectationMultimedia(complectationMultimediaId);
    return fillObject(ComplectationMultimediaRdo, existComplectationMultimedia);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о мультимедиа успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const complectationMultimediaId = parseInt(id, 10);
    this.complectationMultimediaService.deleteComplectationMultimedia(complectationMultimediaId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о мультимедиа успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateComplectationMultimediaDto) {
    const complectationMultimediaId = parseInt(id, 10);
    const updatedComplecrationMultimedia = this.complectationMultimediaService.updateComplectationMultimedia(complectationMultimediaId, dto)
    return fillObject(ComplectationMultimediaRdo, updatedComplecrationMultimedia);
  }
}