import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { TurnkeySelectionService } from './turnkey-selection.service';
import { fillObject } from '@backend/util/util-core';
import { TurnkeySelectionRdo } from './rdo/turnkey-selection.rdo';
import { CreateTurnkeySelectionDto } from './dto/create-turnkey-selection.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';



@ApiTags('Подбор под ключ')
@Controller('turnkey-selection')
export class TurnkeySelectionController {
  constructor(
    private readonly turnkeySelectionService: TurnkeySelectionService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Анкета успешно создана.'
  })
  @Post('/')
  async create(@Body() dto: CreateTurnkeySelectionDto) {
    const newTurnkey = await this.turnkeySelectionService.createTurnkey(dto);
    return fillObject(TurnkeySelectionRdo, newTurnkey);
  }
  
  @ApiResponse({
    type: TurnkeySelectionRdo,
    status: HttpStatus.OK,
    description: 'Анкета найдена'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const turnkeyId = parseInt(id, 10);
    const existTurnkey = await this.turnkeySelectionService.getTurnkey(turnkeyId);
    return fillObject(TurnkeySelectionRdo, existTurnkey);
  }
  
  @ApiResponse({
    type: TurnkeySelectionRdo,
    status: HttpStatus.OK,
    description: 'Анкеты найдены'
  })
  @Get('/')
  async index() {
    const turnkeys = await this.turnkeySelectionService.getTurnkeys();
    return fillObject(TurnkeySelectionRdo, turnkeys);
  }
  
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Анкета удалена.'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const turnkeyId = parseInt(id, 10);
    await this.turnkeySelectionService.deleteTurnkey(turnkeyId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Анкета обновлена.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: CreateTurnkeySelectionDto) {
    const turnkeyId = parseInt(id, 10);
    const updatedTurnkey = await this.turnkeySelectionService.updateTurnkey(turnkeyId, dto)
    return fillObject(TurnkeySelectionRdo, updatedTurnkey)
  }
}