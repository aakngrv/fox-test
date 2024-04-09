import { InteriorPhotoService} from "./interior-photo.service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { InteriorPhotoRdo} from "./rdo/interior-photo.rdo";
import { CreateInteriorPhotoDto} from "./dto/create-interior-photo.dto";
import { UpdateInteriorPhotoDto} from "./dto/update-interior-photo.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Фото салона')
@Controller('interior-photo')
export class InteriorPhotoController {

  constructor(
    private readonly interiorPhotoService: InteriorPhotoService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Фото салона успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateInteriorPhotoDto) {
    const newCreateInteriorPhoto = await this.interiorPhotoService.createInteriorPhoto(dto);
    return fillObject(InteriorPhotoRdo, newCreateInteriorPhoto);
  }

  @ApiResponse({
    type: InteriorPhotoRdo,
    status: HttpStatus.OK,
    description: 'Фото салона успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const interiorPhotoId = parseInt(id, 10);
    const existInteriorPhoto = await this.interiorPhotoService.getInteriorPhoto(interiorPhotoId);
    return fillObject(InteriorPhotoRdo, existInteriorPhoto);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Фото салона успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const interiorPhotoId = parseInt(id, 10);
    this.interiorPhotoService.deleteInteriorPhoto(interiorPhotoId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Фото салона успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateInteriorPhotoDto) {
    const interiorPhotoId = parseInt(id, 10);
    const updatedInteriorPhoto = this.interiorPhotoService.updateInteriorPhoto(interiorPhotoId, dto)
    return fillObject(InteriorPhotoRdo, updatedInteriorPhoto);
  }
}