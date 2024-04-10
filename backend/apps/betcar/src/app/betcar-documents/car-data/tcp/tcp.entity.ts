import { Entity } from '@backend/util/util-types';
import { TCP } from '@backend/shared/shared-types';


export class TCPEntity implements Entity<TCPEntity>, TCP {

  public tCPId?: number;
  public carDataId: number;
  public absent: boolean;
  public photo: string[];
  public tCPType: string;

  constructor(tcp: TCP) {
    this.fillEntity(tcp);
  }

  public fillEntity(entity: TCP): void {
    this.tCPId = entity.tCPId;
    this.carDataId = entity.carDataId;
    this.absent = entity.absent;
    this.photo = entity.photo;
    this.tCPType = entity.tCPType;
  }

  public toObject():TCPEntity {
    return { ...this }
  }
}