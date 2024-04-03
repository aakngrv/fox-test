import { ExteriorPhotoService} from "./exterior-photo.service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { ExteriorPhotoRdo} from "./rdo/exterior-photo.rdo";
import { CreateExteriorPhotoDto} from "./dto/create-exterior-photo.dto";
import { UpdateExteriorPhotoDto} from "./dto/update-exterior-photo.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Фото кузова')
@Controller('exterior-photo')
export class ExteriorPhotoController {

  constructor(
    private readonly exteriorPhotoService: ExteriorPhotoService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Фото кузова успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateExteriorPhotoDto) {
    const newCreateExteriorPhoto = await this.exteriorPhotoService.createExteriorPhoto(dto);
    return fillObject(ExteriorPhotoRdo, newCreateExteriorPhoto);
  }

  @ApiResponse({
    type: ExteriorPhotoRdo,
    status: HttpStatus.OK,
    description: 'Фото кузова успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const exteriorPhotoId = parseInt(id, 10);
    const existExteriorPhoto = await this.exteriorPhotoService.getExteriorPhoto(exteriorPhotoId);
    return fillObject(ExteriorPhotoRdo, existExteriorPhoto);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Фото кузова успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const exteriorPhotoId = parseInt(id, 10);
    this.exteriorPhotoService.deleteExteriorPhoto(exteriorPhotoId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Фото кузова успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateExteriorPhotoDto) {
    const exteriorPhotoId = parseInt(id, 10);
    const updatedExteriorPhoto = this.exteriorPhotoService.updateExteriorPhoto(exteriorPhotoId, dto)
    return fillObject(ExteriorPhotoRdo, updatedExteriorPhoto);
  }
}