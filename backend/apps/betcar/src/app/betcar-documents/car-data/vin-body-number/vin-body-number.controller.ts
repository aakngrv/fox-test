import { VinBodyNumberService} from "./vin-body-number.service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { VinBodyNumberRdo} from "./rdo/vin-body-number.rdo";
import { CreateVinBodyNumberDto} from "./dto/create-vin-body-number.dto";
import { UpdateVinBodyNumberDto} from "./dto/update-vin-body-number.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('VIN номер')
@Controller('vin-body-number')
export class VinBodyNumberController {

  constructor(
    private readonly vinBodyNumberService: VinBodyNumberService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'VIN номер создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateVinBodyNumberDto) {
    const newVinBodyNumber = await this.vinBodyNumberService.createVinBodyNumber(dto);
    return fillObject(VinBodyNumberRdo, newVinBodyNumber);
  }

  @ApiResponse({
    type: VinBodyNumberRdo,
    status: HttpStatus.OK,
    description: 'VIN номер найден'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const vinBodyNumberId = parseInt(id, 10);
    const existVinBodyNumber = await this.vinBodyNumberService.getVinBodyNumber(vinBodyNumberId);
    return fillObject(VinBodyNumberRdo, existVinBodyNumber);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'VIN номер удален'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const vinBodyNumberId = parseInt(id, 10);
    await this.vinBodyNumberService.deleteVinBodyNumber(vinBodyNumberId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'VIN номер обновлен'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateVinBodyNumberDto) {
    const vinBodyNumberId = parseInt(id, 10);
    const updatedVinBodyNumber = this.vinBodyNumberService.updateVinBodyNumber(vinBodyNumberId, dto)
    return fillObject(VinBodyNumberRdo, updatedVinBodyNumber);
  }
}