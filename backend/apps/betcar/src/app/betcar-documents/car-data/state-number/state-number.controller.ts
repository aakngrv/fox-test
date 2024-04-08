import { StateNumberService} from "./state-number.service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { StateNumberRdo} from "./rdo/state-number.rdo";
import { CreateStateNumberDto} from "./dto/create-state-number.dto";
import { UpdateStateNumberDto} from "./dto/update-state-number.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Гос номер')
@Controller('state-number')
export class StateNumberController {

  constructor(
    private readonly stateNumberService: StateNumberService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Гос номер создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateStateNumberDto) {
    const newStateNumber = await this.stateNumberService.createStateNumber(dto);
    return fillObject(StateNumberRdo, newStateNumber);
  }

  @ApiResponse({
    type: StateNumberRdo,
    status: HttpStatus.OK,
    description: 'Гос номер найден'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const stateNumberId = parseInt(id, 10);
    const existStateNumber = await this.stateNumberService.getStateNumber(stateNumberId);
    return fillObject(StateNumberRdo, existStateNumber);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Гос номер удален'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const stateNumberId = parseInt(id, 10);
    await this.stateNumberService.deleteStateNumber(stateNumberId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Гос номер обновлен'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateStateNumberDto) {
    const stateNumberId = parseInt(id, 10);
    const updatedStateNumber = this.stateNumberService.updateStateNumber(stateNumberId, dto)
    return fillObject(StateNumberRdo, updatedStateNumber);
  }
}