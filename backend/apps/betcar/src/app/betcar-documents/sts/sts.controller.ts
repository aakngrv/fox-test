import { StsService } from './sts.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { StsRdo } from './rdo/sts.rdo';
import { CreateStsDto } from './dto/create-sts.dto';
import { UpdateStsDto } from './dto/update-sts.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Документы - СТС')
@Controller('sts')
export class StsController {
  
  constructor(
    private readonly stsService: StsService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'СТС успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateStsDto) {
    const newSts = await this.stsService.createSts(dto);
    return fillObject(StsRdo, newSts);
  }

  @ApiResponse({
    type: StsRdo,
    status: HttpStatus.OK,
    description: 'СТС найден'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const stsId = parseInt(id, 10);
    const existSts = await this.stsService.getSts(stsId);
    return fillObject(StsRdo, existSts);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'СТС успешно удален.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const stsId = parseInt(id, 10);
    this.stsService.deleteSts(stsId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'СТС успешно обновлен.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateStsDto) {
    const stsId = parseInt(id, 10);
    const updatedSts = this.stsService.updateSts(stsId, dto)
    return fillObject(StsRdo, updatedSts);
  }
}