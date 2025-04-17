import { uploaderConfig } from '@backend/config/config-uploader';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ensureDir } from 'fs-extra';
import { writeFile } from 'node:fs/promises';
import dayjs from 'dayjs';
import * as crypto from 'node:crypto';
import { extension } from 'mime-types';
import { FileRepository } from './file.repository';
import { FileEntity } from './file.entity';
import { File } from '@backend/shared/shared-types'

type WritedFile = {
  hashName: string;
  fileExtension: string;
  subDirectory: string;
  path: string;
}

@Injectable()
export class FileService {
  constructor(
    @Inject(uploaderConfig.KEY)
    private readonly applicationConfig: ConfigType<typeof uploaderConfig>,
    private readonly fileRepository: FileRepository,
  ) {}
  private async writeFile(file: any): Promise<WritedFile> {
    const [ year, month, day ] = dayjs().format('YYYY MM DD').split(' ');
    const { uploadDirectory } = this.applicationConfig;
    const subDirectory = `${year}/${month}/${day}`;

    const uuid = crypto.randomUUID();
    const fileExtension = extension(file.mimetype);
    const hashName = `${uuid}.${fileExtension}`;

    const uploadDirectoryPath = `${uploadDirectory}/${subDirectory}`;
    const destinationFile = `${uploadDirectoryPath}/${hashName}`;

    await ensureDir(uploadDirectoryPath);
    await writeFile(destinationFile, file.buffer);

    return {
      hashName,
      fileExtension,
      subDirectory,
      path: `/${subDirectory}/${hashName}`,
    };
  }

  public async saveFile(file: Express.Multer.File): Promise<File> {
    const writedFile = await this.writeFile(file);
    const newFile = new FileEntity({
      size: file.size,
      hashName: writedFile.hashName,
      mimetype: file.mimetype,
      originalFilename: file.originalname,
      path: writedFile.path,
    });

    return this.fileRepository.create(newFile);
  }

  public async getFile(id: number): Promise<File>  {
    const existFile = await this.fileRepository.findById(id);

    if (!existFile) {
      throw new NotFoundException(`File with ${id} not found.`);
    }

    return existFile;
  }
}