import { ExpertOpinionService} from "./expert-opinion.service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { ExpertOpinionRdo} from "./rdo/expert-opinion.rdo";
import { CreateExpertOpinionDto} from "./dto/create-expert-opinion.dto";
import { UpdateExpertOpinionDto} from "./dto/update-expert-opinion.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Заключение эксперта')
@Controller('expert-opinion')
export class ExpertOpinionController {

  constructor(
    private readonly expertOpinionService: ExpertOpinionService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Заключение эксперта создано.'
  })
  @Post('/')
  async create(@Body() dto: CreateExpertOpinionDto) {
    const newExpertOpinion = await this.expertOpinionService.createExpertOpinion(dto);
    return fillObject(ExpertOpinionRdo, newExpertOpinion);
  }

  @ApiResponse({
    type: ExpertOpinionRdo,
    status: HttpStatus.OK,
    description: 'Заключение эксперта успешно найдено'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const expertOpinionId = parseInt(id, 10);
    const existExpertOpinion = await this.expertOpinionService.getExpertOpinion(expertOpinionId);
    return fillObject(ExpertOpinionRdo, existExpertOpinion);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Заключение эксперта удалено'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const expertOpinionId = parseInt(id, 10);
    this.expertOpinionService.deleteExpertOpinion(expertOpinionId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Заключение эксперта обновлено'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateExpertOpinionDto) {
    const expertOpinionId = parseInt(id, 10);
    const updatedExpertOpinion = this.expertOpinionService.updateExpertOpinion(expertOpinionId, dto)
    return fillObject(ExpertOpinionRdo, updatedExpertOpinion);
  }
}