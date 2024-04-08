import { Entity } from '@backend/util/util-types';
import { FrameNumber } from '@backend/shared/shared-types';


export class FrameNumberEntity implements Entity<FrameNumberEntity>, FrameNumber {

  public frameNumberId?: number;
  public carDataId: number;
  public frameNumber: string;
  public expertConfirm: boolean;
  public numberState: string[];
  public photo: string[];


  constructor(frameNumber: FrameNumber) {
    this.fillEntity(frameNumber);
  }

  public fillEntity(entity: FrameNumber): void {
    this.frameNumberId = entity.frameNumberId;
    this.carDataId = entity.carDataId;
    this.frameNumber = entity.frameNumber;
    this.expertConfirm = entity.expertConfirm;
    this.numberState = entity.numberState;
    this.photo = entity.photo;

  }

  public toObject():FrameNumberEntity {
    return { ...this }
  }
}