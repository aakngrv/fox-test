import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { TurnkeySelectionManuallyService } from './turnkey-selection-manually.service';
import { fillObject } from '@backend/util/util-core';
import { TurnkeySelectionManuallyRdo } from './rdo/turnkey-selection-manually.rdo';
import { CreateTurnkeySelectionManuallyDto } from './dto/create-turnkey-selection-manually.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';



@ApiTags('Заказ осмотра')
@Controller('turnkey-selection-manually')
export class TurnkeySelectionManuallyController {
  constructor(
    private readonly turnkeySelectionManuallyService: TurnkeySelectionManuallyService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Анкета успешно создана.'
  })
  @Post('/')
  async create(@Body() dto: CreateTurnkeySelectionManuallyDto) {
    const newTurnkeyManually = await this.turnkeySelectionManuallyService.createTurnkeyManually(dto);
    return fillObject(TurnkeySelectionManuallyRdo, newTurnkeyManually);
  }
  
  @ApiResponse({
    type: TurnkeySelectionManuallyRdo,
    status: HttpStatus.OK,
    description: 'Анкета найдена'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const turnkeyManuallyId = parseInt(id, 10);
    const existTurnkeyManually = await this.turnkeySelectionManuallyService.getTurnkeyManually(turnkeyManuallyId);
    return fillObject(TurnkeySelectionManuallyRdo, existTurnkeyManually);
  }
  
  @ApiResponse({
    type: TurnkeySelectionManuallyRdo,
    status: HttpStatus.OK,
    description: 'Анкеты найдены'
  })
  @Get('/')
  async index() {
    const turnkeysManually = await this.turnkeySelectionManuallyService.getTurnkeysManually();
    return fillObject(TurnkeySelectionManuallyRdo, turnkeysManually);
  }
  
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Анкета удалена.'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const turnkeyManuallyId = parseInt(id, 10);
    await this.turnkeySelectionManuallyService.deleteTurnkeyManually(turnkeyManuallyId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Анкета обновлена.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: CreateTurnkeySelectionManuallyDto) {
    const turnkeyManuallyId = parseInt(id, 10);
    const updatedTurnkeyManually = await this.turnkeySelectionManuallyService.updateTurnkeyManually(turnkeyManuallyId, dto)
    return fillObject(TurnkeySelectionManuallyRdo, updatedTurnkeyManually)
  }
}