import { Entity } from '@backend/util/util-types';
import { StateNumber } from '@backend/shared/shared-types';


export class StateNumberEntity implements Entity<StateNumberEntity>, StateNumber {

  public stateNumberId?: number;
  public carDataId: number;
  public absent: boolean;
  public foreign: boolean;
  public stateNumber: string;
  public comment: string;

  constructor(stateNumber: StateNumber) {
    this.fillEntity(stateNumber);
  }

  public fillEntity(entity: StateNumber): void {
    this.stateNumberId = entity.stateNumberId;
    this.carDataId = entity.carDataId;
    this.absent = entity.absent;
    this.foreign = entity.foreign;
    this.stateNumber = entity.stateNumber;
    this.comment = entity.comment;
  }

  public toObject():StateNumberEntity {
    return { ...this }
  }
}