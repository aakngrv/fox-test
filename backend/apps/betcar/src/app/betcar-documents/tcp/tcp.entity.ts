import { Entity } from '@backend/util/util-types';
import { TCP } from '@backend/shared/shared-types';

export class TcpEntity implements Entity<TcpEntity>, TCP {

  public tcpId?: number;
  public reportId: number;
  public availabilityTCP: string;
  public chassis: string;
  public series: string;
  public number: string;
  public dateOfIssue: string;
  public numberOfOwners: string;
  public video: string;
  public photo: string;
  public file: string;

  constructor(tcp: TCP) {
    this.fillEntity(tcp);
  } 

  public fillEntity(entity: TCP): void {
    this.tcpId = entity.tcpId;
    this.reportId = entity.reportId;
    this.availabilityTCP = entity.availabilityTCP;
    this.chassis = entity.chassis;
    this.series = entity.series;
    this.number = entity.number;
    this.dateOfIssue = entity.dateOfIssue;
    this.numberOfOwners = entity.numberOfOwners;
    this.video = entity.video;
    this.photo = entity.photo;
    this.file = entity.file;
  }

  public toObject(): TcpEntity {
    return { ...this }
  }
}