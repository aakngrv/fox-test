import { STSService} from "./sts.service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { STSRdo} from "./rdo/sts.rdo";
import { CreateSTSDto} from "./dto/create-sts.dto";
import { UpdateSTSDto} from "./dto/update-sts.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('СТС')
@Controller('sts')
export class STSController {

  constructor(
    private readonly sTSService: STSService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'CTC создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateSTSDto) {
    const newSTS = await this.sTSService.createSTS(dto);
    return fillObject(STSRdo, newSTS);
  }

  @ApiResponse({
    type: STSRdo,
    status: HttpStatus.OK,
    description: 'CTC найден'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const sTSId = parseInt(id, 10);
    const existSTS = await this.sTSService.getSTS(sTSId);
    return fillObject(STSRdo, existSTS);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'CTC удален'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const sTSId = parseInt(id, 10);
    await this.sTSService.deleteSTS(sTSId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'CTC обновлен'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateSTSDto) {
    const sTSId = parseInt(id, 10);
    const updatedSTS = this.sTSService.updateSTS(sTSId, dto)
    return fillObject(STSRdo, updatedSTS);
  }
}