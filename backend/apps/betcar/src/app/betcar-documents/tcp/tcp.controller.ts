import { TcpService } from './tcp.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { TcpRdo } from './rdo/tcp.rdo';
import { CreateTcpDto } from './dto/create-tcp.dto';
import { UpdateTcpDto } from './dto/update-tcp.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('ПТС')
@Controller('tcp')
export class TcpController {
  
  constructor(
    private readonly tcpService: TcpService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'ПТС успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateTcpDto) {
    const newTcp = await this.tcpService.createTcp(dto);
    return fillObject(TcpRdo, newTcp);
  }

  @ApiResponse({
    type: TcpRdo,
    status: HttpStatus.OK,
    description: 'ПТС найден'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const tcpId = parseInt(id, 10);
    const existTcp = await this.tcpService.getTcp(tcpId);
    return fillObject(TcpRdo, existTcp);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'ПТС успешно удален.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const tcpId = parseInt(id, 10);
    this.tcpService.deleteTcp(tcpId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'ПТС успешно обновлен.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateTcpDto) {
    const tcpId = parseInt(id, 10);
    const updatedTcp = this.tcpService.updateTcp(tcpId, dto)
    return fillObject(TcpRdo, updatedTcp);
  }
}