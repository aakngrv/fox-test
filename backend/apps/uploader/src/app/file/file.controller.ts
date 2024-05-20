import { Controller, Get, Param, Post, UploadedFile, UseInterceptors, HttpCode, HttpStatus, } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import 'multer';
import { FileService } from './file.service';
import { fillObject } from '@backend/util/util-core';
import { UploadedFileRdo } from './rdo/uploaded-file.rdo';
import { ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Загрузчик файлов')
@Controller('files')
export class FileController {

  constructor(
    private readonly fileService: FileService
  ) {}
  

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Файл успешно загружен'
  })
  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  public async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const newFile = await this.fileService.saveFile(file);
    return fillObject(UploadedFileRdo, newFile);
  }
  

  @ApiResponse({
    type: UploadedFileRdo,
    status: HttpStatus.OK,
    description: 'Файл найден'
  })
  @Get('/:id')
  public async show(@Param('id') id: string) {
    const fileId = parseInt(id, 10);
    const existFile = await this.fileService.getFile(fileId);
    return fillObject(UploadedFileRdo, existFile);
  }
}
