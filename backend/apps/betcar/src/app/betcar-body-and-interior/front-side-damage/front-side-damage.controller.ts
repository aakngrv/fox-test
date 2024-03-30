import { FrontSideDamageService } from './front-side-damage.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { FrontSideDamageRdo } from './rdo/front-side-damage.rdo';
import { CreateFrontSideDamageDto } from './dto/create-front-side-damage.dto';
import { UpdateFrontSideDamageDto } from './dto/update-front-side-damage.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Повреждения передней части')
@Controller('front-side-damage')
export class FrontSideDamageController {
  
  constructor(
    private readonly frontSideDamageService: FrontSideDamageService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о повреждении передней части успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateFrontSideDamageDto) {
    const newCreateFrontSideDamage = await this.frontSideDamageService.createFrontSideDamage(dto);
    return fillObject(FrontSideDamageRdo, newCreateFrontSideDamage);
  }

  @ApiResponse({
    type: FrontSideDamageRdo,
    status: HttpStatus.OK,
    description: 'Данные о повреждении передней части успешно найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const frontSideDamageId = parseInt(id, 10);
    const existFrontSideDamage = await this.frontSideDamageService.getFrontSideDamage(frontSideDamageId);
    return fillObject(FrontSideDamageRdo, existFrontSideDamage);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о повреждении передней части успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const frontSideDamageId = parseInt(id, 10);
    this.frontSideDamageService.deleteFrontSideDamage(frontSideDamageId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о повреждении передней части успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateFrontSideDamageDto) {
    const frontSideamageId = parseInt(id, 10);
    const updatedFrontSideDamage = this.frontSideDamageService.updateFrontSideDamage(frontSideamageId, dto)
    return fillObject(FrontSideDamageRdo, updatedFrontSideDamage);
  }
}
