import { FrameNumberService} from "./frame-number.service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { FrameNumberRdo} from "./rdo/frame-number.rdo";
import { CreateFrameNumberDto} from "./dto/create-frame-number.dto";
import { UpdateFrameNumberDto} from "./dto/update-frame-number.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Номер рамы')
@Controller('frame-number')
export class FrameNumberController {

  constructor(
    private readonly frameNumberService: FrameNumberService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Рамы номер создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateFrameNumberDto) {
    const newFrameNumber = await this.frameNumberService.createFrameNumber(dto);
    return fillObject(FrameNumberRdo, newFrameNumber);
  }

  @ApiResponse({
    type: FrameNumberRdo,
    status: HttpStatus.OK,
    description: 'Рамы номер найден'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const frameNumberId = parseInt(id, 10);
    const existFrameNumber = await this.frameNumberService.getFrameNumber(frameNumberId);
    return fillObject(FrameNumberRdo, existFrameNumber);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Рамы номер удален'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const frameNumberId = parseInt(id, 10);
    await this.frameNumberService.deleteFrameNumber(frameNumberId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Рамы номер обновлен'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateFrameNumberDto) {
    const frameNumberId = parseInt(id, 10);
    const updatedFrameNumber = this.frameNumberService.updateFrameNumber(frameNumberId, dto)
    return fillObject(FrameNumberRdo, updatedFrameNumber);
  }
}