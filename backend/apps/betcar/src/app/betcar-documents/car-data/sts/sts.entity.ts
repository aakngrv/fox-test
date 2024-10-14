import { Entity } from '@backend/util/util-types';
import { STS } from '@backend/shared/shared-types';


export class STSEntity implements Entity<STSEntity>, STS {

  public sTSId?: number;
  public carDataId: number;
  public absent: boolean;
  public photo: string[];
  public comment: string;


  constructor(sTS: STS) {
    this.fillEntity(sTS);
  }

  public fillEntity(entity: STS): void {
    this.sTSId = entity.sTSId;
    this.carDataId = entity.carDataId;
    this.absent = entity.absent;
    this.photo = entity.photo;
    this.comment = entity.comment;
  }

  public toObject():STSEntity {
    return { ...this }
  }
}