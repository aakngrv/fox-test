import { Entity } from '@backend/util/util-types';
import { File } from '@backend/shared/shared-types';

export class FileEntity implements Entity<FileEntity>, File {
  public fileId?: number;
  public hashName: string;
  public mimetype: string;
  public originalFilename: string;
  public path: string;
  public size: number;

  constructor(file: File) {
    this.fillEntity(file);
  }

  public fillEntity(entity) {
    this.fileId = entity.fileId;
    this.hashName = entity.hashName;
    this.mimetype = entity.mimetype;
    this.originalFilename = entity.originalFilename;
    this.path = entity.path;
    this.size = entity.size;
  }

  public toObject(): FileEntity {
    return {
      ...this,
    }
  }
}

