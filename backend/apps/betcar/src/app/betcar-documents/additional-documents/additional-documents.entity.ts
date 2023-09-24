import { Entity } from '@backend/util/util-types';
import { AdditionalDocuments } from '@backend/shared/shared-types';

export class AdditionalDocumentsEntity implements Entity<AdditionalDocumentsEntity>, AdditionalDocuments {

    public additionalDocumentsId?: number;
    public reportId: number;
    public comment: string;
    public video: string;
    public photo: string;
    public file: string;

  constructor(additionalDocuments: AdditionalDocuments) {
    this.fillEntity(additionalDocuments);
  } 

   
  public fillEntity(entity: AdditionalDocuments): void {
    this.additionalDocumentsId = entity.additionalDocumentsId;
    this.reportId = entity.reportId;
    this.comment = entity.comment;
    this.video = entity.video;
    this.photo = entity.photo;
    this.file = entity.file;
  }

  public toObject(): AdditionalDocumentsEntity {
    return { ...this }
  }
}