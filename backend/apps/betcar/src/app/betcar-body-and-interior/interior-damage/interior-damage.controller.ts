import { InteriorDamageService} from "./interior-damage.service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { InteriorDamageRdo} from "./rdo/interior-damage.rdo";
import { CreateInteriorDamageDto} from "./dto/create-interior-damage.dto";
import { UpdateInteriorDamageDto} from "./dto/update-interior-damage.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Повреждения салона')
@Controller('interior-damage')
export class InteriorDamageController {

  constructor(
    private readonly interiorDamageService: InteriorDamageService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о повреждениях салона успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateInteriorDamageDto) {
    const newCreateInteriorDamage = await this.interiorDamageService.createInteriorDamage(dto);
    return fillObject(InteriorDamageRdo, newCreateInteriorDamage);
  }

  @ApiResponse({
    type: InteriorDamageRdo,
    status: HttpStatus.OK,
    description: 'Данные о повреждениях салона успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const interiorDamageId = parseInt(id, 10);
    const existInteriorDamage = await this.interiorDamageService.getInteriorDamage(interiorDamageId);
    return fillObject(InteriorDamageRdo, existInteriorDamage);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о повреждениях салона успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const interiorDamageId = parseInt(id, 10);
    this.interiorDamageService.deleteInteriorDamage(interiorDamageId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о повреждениях салона успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateInteriorDamageDto) {
    const interiorDamageId = parseInt(id, 10);
    const updatedInteriorDamage = this.interiorDamageService.updateInteriorDamage(interiorDamageId, dto)
    return fillObject(InteriorDamageRdo, updatedInteriorDamage);
  }
}