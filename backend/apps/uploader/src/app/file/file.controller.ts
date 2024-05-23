import { Controller, Get, Param, Post, UploadedFile, UseInterceptors, HttpCode, HttpStatus, Inject } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import 'multer';
import { FileService } from './file.service';
import { fillObject } from '@backend/util/util-core';
import { UploadedFileRdo } from './rdo/uploaded-file.rdo';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { uploaderConfig } from '@backend/config/config-uploader';
import { ConfigType } from '@nestjs/config';


@ApiTags('Загрузчик файлов')
@Controller('files')
export class FileController {

  constructor(
    private readonly fileService: FileService,

    @Inject(uploaderConfig.KEY)
    private readonly applicationConfig: ConfigType<typeof uploaderConfig>,
  ) {}
  

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Файл успешно загружен'
  })
  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  public async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const newFile = await this.fileService.saveFile(file);
    const path = `${this.applicationConfig.serveRoot}${newFile.path}`;
    return fillObject(UploadedFileRdo, Object.assign(newFile, { path }));
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
    const path = `${this.applicationConfig.serveRoot}${existFile.path}`;
    return fillObject(UploadedFileRdo, Object.assign(existFile, { path }));
  }
}
