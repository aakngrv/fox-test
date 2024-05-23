import { Injectable } from '@nestjs/common';
import { FileEntity } from './file.entity';
import { File } from '@backend/shared/shared-types';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FileRepository implements CRUDRepository<FileEntity, number, File> {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: FileEntity): Promise<File> {

    return this.prisma.file.create({
      data: { ...item.toObject()}
    })
  }
  

  public async findById(fileId: number): Promise<File | null> {
    return this.prisma.file.findFirst({
      where: {
        fileId
      }
    })
  }

  public update(fileId: number, item: FileEntity): Promise<File> {
    return this.prisma.file.update({
      where: {
        fileId
      },
      data: { ...item.toObject(), fileId}
    });
  }

  public async destroy(fileId: number): Promise<void> {
    await this.prisma.file.delete({
      where: {
        fileId,
      }
    });
  }
}
