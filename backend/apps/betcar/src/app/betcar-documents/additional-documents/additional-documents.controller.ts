import { AdditionalDocumentsService } from './additional-documents.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { AdditionalDocumentsRdo } from './rdo/addiltional-documents.rdo';
import { CreateAdditionalDocumentsDto } from './dto/create-additional-documents.dto';
import { UpdateAdditionalDocumentsDto } from './dto/update-additional-documents.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Дополнительные документы')
@Controller('additional-documents')
export class AdditionalDocumentsController {
  
  constructor(
    private readonly additionalDocumentsService: AdditionalDocumentsService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Дополнительные документы успешно созданы.'
  })
  @Post('/')
  async create(@Body() dto: CreateAdditionalDocumentsDto) {
    const newAdditionalDocuments = await this.additionalDocumentsService.createAdditionalDocuments(dto);
    return fillObject(AdditionalDocumentsRdo, newAdditionalDocuments);
  }

  @ApiResponse({
    type: AdditionalDocumentsRdo,
    status: HttpStatus.OK,
    description: 'Дополнительные документы найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const additionalDocumentsId = parseInt(id, 10);
    const existAdditionalDocuments = await this.additionalDocumentsService.getAdditionalDocuments(additionalDocumentsId);
    return fillObject(AdditionalDocumentsRdo, existAdditionalDocuments);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Дополнительные документы успешно удалены.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const additionalDocumentsId = parseInt(id, 10);
    this.additionalDocumentsService.deleteAdditionalDocuments(additionalDocumentsId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Дополнительные документы успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateAdditionalDocumentsDto) {
    const additionalDocumentsId = parseInt(id, 10);
    const updatedAdditionalDocuments = this.additionalDocumentsService.updateAdditionalDocuments(additionalDocumentsId, dto)
    return fillObject(AdditionalDocumentsRdo, updatedAdditionalDocuments);
  }
}