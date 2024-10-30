import { Entity } from '@backend/util/util-types';
import { VinBodyNumber } from '@backend/shared/shared-types';


export class VinBodyNumberEntity implements Entity<VinBodyNumberEntity>, VinBodyNumber {

  public vinBodyNumberId?: number;
  public carDataId: number;
  public vinNumber?: string;
  public expertConfirm: boolean;
  public numberState: boolean[];
  public photo: string[];
  public  comment: string;


  constructor(vinBodyNumber: VinBodyNumber) {
    this.fillEntity(vinBodyNumber);
  }

  public fillEntity(entity: VinBodyNumber): void {
    this.vinBodyNumberId = entity.vinBodyNumberId;
    this.carDataId = entity.carDataId;
    this.vinNumber = entity.vinNumber;
    this.expertConfirm = entity.expertConfirm;
    this.numberState = entity.numberState;
    this.photo = entity.photo;
    this.comment = entity.comment;
  }

  public toObject(): VinBodyNumberEntity {
    return { ...this }
  }
}