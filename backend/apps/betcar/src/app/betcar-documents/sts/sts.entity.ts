import { Entity } from '@backend/util/util-types';
import { STS } from '@backend/shared/shared-types';

export class StsEntity implements Entity<StsEntity>, STS {

  public stsId?: number;
  public reportId: number;
  public isAbsent: boolean;
  public series: string;
  public number: string;
  public dateOfIssue: string;
  public issuedBy: string;
  public video: string;
  public photo: string;
  public file: string;

  constructor(sts: STS) {
    this.fillEntity(sts);
  } 

  public fillEntity(entity: STS): void {
    this.stsId = entity.stsId;
    this.reportId = entity.reportId;
    this.isAbsent = entity.isAbsent;
    this.series = entity.series;
    this.number = entity.number;
    this.dateOfIssue = entity.dateOfIssue;
    this.issuedBy = entity.issuedBy;
    this.video = entity.video;
    this.photo = entity.photo;
    this.file = entity.file;
  }

  public toObject(): StsEntity {
    return { ...this }
  }
}