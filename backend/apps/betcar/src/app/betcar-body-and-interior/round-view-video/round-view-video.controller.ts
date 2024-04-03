import { RoundViewVideoService} from "./round-view-video.service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { RoundViewVideoRdo} from "./rdo/round-view-video.rdo";
import { CreateRoundViewVideoDto} from "./dto/create-round-view-video.dto";
import { UpdateRoundViewVideoDto} from "./dto/update-round-view-video.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Кузов и салон - Круговой обзор')
@Controller('round-view-video')
export class RoundViewVideoController {

  constructor(
    private readonly roundViewVideoService: RoundViewVideoService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Круговой обзор создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateRoundViewVideoDto) {
    const newRoundViewVideo = await this.roundViewVideoService.createRoundViewVideo(dto);
    return fillObject(RoundViewVideoRdo, newRoundViewVideo);
  }

  @ApiResponse({
    type: RoundViewVideoRdo,
    status: HttpStatus.OK,
    description: 'Круговой обзор успешно найден'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const roundViewVideoId = parseInt(id, 10);
    const existRoundViewVideo = await this.roundViewVideoService.getRoundViewVideo(roundViewVideoId);
    return fillObject(RoundViewVideoRdo, existRoundViewVideo);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Круговой обзор удален'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const roundViewVideoId = parseInt(id, 10);
    this.roundViewVideoService.deleteRoundViewVideo(roundViewVideoId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Круговой обзор обновлен'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateRoundViewVideoDto) {
    const roundViewVideoId = parseInt(id, 10);
    const updatedRoundViewVideo = this.roundViewVideoService.updateRoundViewVideo(roundViewVideoId, dto)
    return fillObject(RoundViewVideoRdo, updatedRoundViewVideo);
  }
}