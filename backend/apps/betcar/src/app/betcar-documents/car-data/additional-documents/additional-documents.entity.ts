import { Entity } from '@backend/util/util-types';
import { AdditionalDocuments } from '@backend/shared/shared-types';


export class AdditionalDocumentsEntity implements Entity<AdditionalDocumentsEntity>, AdditionalDocuments {

  public additionalDocumentsId?: number;
  public carDataId: number;
  public comment: string;
  public photo: string[];


  constructor(additionalDocuments: AdditionalDocuments) {
    this.fillEntity(additionalDocuments);
  }

  public fillEntity(entity: AdditionalDocuments): void {
    this.additionalDocumentsId = entity.additionalDocumentsId;
    this.carDataId = entity.carDataId;
    this.comment = entity.comment;
    this.photo = entity.photo;
  }

  public toObject():AdditionalDocumentsEntity {
    return { ...this }
  }
}