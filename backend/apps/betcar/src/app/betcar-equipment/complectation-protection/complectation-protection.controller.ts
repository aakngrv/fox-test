import { ComplectationProtectionService } from './complectation-protection.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { ComplectationProtectionRdo } from './rdo/complectation-protection.rdo';
import { CreateComplectationProtectionDto } from './dto/create-complectation-protection.dto';
import { UpdateComplectationProtectionDto } from './dto/update-complectation-protection.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Оснащение - Защита')
@Controller('complectation-protection')
export class ComplectationProtectionController {
  
  constructor(
    private readonly complectationProtectionService: ComplectationProtectionService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Данные о защите успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateComplectationProtectionDto) {
    const newComplectationProtection = await this.complectationProtectionService.createComplectationProtection(dto);
    return fillObject(ComplectationProtectionRdo, newComplectationProtection);
  }

  @ApiResponse({
    type: ComplectationProtectionRdo,
    status: HttpStatus.OK,
    description: 'Данные о защите найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const complectationProtectionId = parseInt(id, 10);
    const existComplectationProtection = await this.complectationProtectionService.getComplectationProtection(complectationProtectionId);
    return fillObject(ComplectationProtectionRdo, existComplectationProtection);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Данные о защите успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const complectationProtectionId = parseInt(id, 10);
    await this.complectationProtectionService.deleteComplectationProtection(complectationProtectionId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные о защите успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateComplectationProtectionDto) {
    const complectationProtectionId = parseInt(id, 10);
    const updatedComplectationProtection = this.complectationProtectionService.updateComplectationProtection(complectationProtectionId, dto)
    return fillObject(ComplectationProtectionRdo, updatedComplectationProtection);
  }
}