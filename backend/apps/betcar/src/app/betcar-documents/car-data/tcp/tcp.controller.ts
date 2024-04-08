import { TCPService} from "./tcp.service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { TCPRdo} from "./rdo/tcp.rdo";
import { CreateTCPDto} from "./dto/create-tcp.dto";
import { UpdateTCPDto} from "./dto/update-tcp.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('ПТС')
@Controller('tcp')
export class TCPController {

  constructor(
    private readonly tCPService: TCPService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'ПТС создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateTCPDto) {
    const newTCP = await this.tCPService.createTCP(dto);
    return fillObject(TCPRdo, newTCP);
  }

  @ApiResponse({
    type: TCPRdo,
    status: HttpStatus.OK,
    description: 'ПТС найден'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const tCPId = parseInt(id, 10);
    const existTCP = await this.tCPService.getTCP(tCPId);
    return fillObject(TCPRdo, existTCP);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'ПТС удален'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const tCPId = parseInt(id, 10);
    await this.tCPService.deleteTCP(tCPId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'ПТС обновлен'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateTCPDto) {
    const tCPId = parseInt(id, 10);
    const updatedTCP = this.tCPService.updateTCP(tCPId, dto)
    return fillObject(TCPRdo, updatedTCP);
  }
}