import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { UserFormService } from './user-form.service';
import { fillObject } from '@backend/util/util-core';
import { UserFormRdo } from './rdo/user-form.rdo';
import { CreateUserFormDto } from './dto/create-user-form.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';



@ApiTags('Анкеты подборщиков')
@Controller('user-form')
export class UserFormController {
  constructor(
    private readonly userFormService: UserFormService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Анкета успешно создана.'
  })
  @Post('/')
  async create(@Body() dto: CreateUserFormDto) {
    const newForm = await this.userFormService.createForm(dto);
    return fillObject(UserFormRdo, newForm);
  }
  
  @ApiResponse({
    type: UserFormRdo,
    status: HttpStatus.OK,
    description: 'Анкета найдена'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const formId = parseInt(id, 10);
    const existForm = await this.userFormService.getForm(formId);
    return fillObject(UserFormRdo, existForm);
  }
  
  @ApiResponse({
    type: UserFormRdo,
    status: HttpStatus.OK,
    description: 'Анкеты найдены'
  })
  @Get('/')
  async index() {
    const forms = await this.userFormService.getForms();
    return fillObject(UserFormRdo, forms);
  }
  
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Анкета удалена.'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const formId = parseInt(id, 10);
    await this.userFormService.deleteForm(formId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Анкета обновлена.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: CreateUserFormDto) {
    const formId = parseInt(id, 10);
    const updatedForm = await this.userFormService.updateForm(formId, dto)
    return fillObject(UserFormRdo, updatedForm)
  }
}