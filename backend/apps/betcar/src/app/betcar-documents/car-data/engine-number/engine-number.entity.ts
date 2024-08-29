import { Entity } from '@backend/util/util-types';
import { EngineNumber } from '@backend/shared/shared-types';


export class EngineNumberEntity implements Entity<EngineNumberEntity>, EngineNumber {

  public engineNumberId?: number;
  public carDataId: number;
  public expertConfirm: boolean;
  public numberState: boolean[];
  public photo: string[];
  public engineNumber: string;
  public comment: string;

  constructor(engineNumber: EngineNumber) {
    this.fillEntity(engineNumber);
  }

  public fillEntity(entity: EngineNumber): void {
    this.engineNumberId = entity.engineNumberId;
    this.carDataId = entity.carDataId;
    this.expertConfirm = entity.expertConfirm;
    this.numberState = entity.numberState;
    this.photo = entity.photo;
    this.engineNumber = entity.engineNumber;
    this.comment = entity.comment;
  }

  public toObject():EngineNumberEntity {
    return { ...this }
  }
}