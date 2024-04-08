import { Entity } from '@backend/util/util-types';
import { EngineNumber } from '@backend/shared/shared-types';


export class EngineNumberEntity implements Entity<EngineNumberEntity>, EngineNumber {

  public engineNumberId?: number;
  public carDataId: number;
  public expertConfirm: boolean;
  public numberState: string[];
  public photo: string[];


  constructor(engineNumber: EngineNumber) {
    this.fillEntity(engineNumber);
  }

  public fillEntity(entity: EngineNumber): void {
    this.engineNumberId = entity.engineNumberId;
    this.carDataId = entity.carDataId;
    this.expertConfirm = entity.expertConfirm;
    this.numberState = entity.numberState;
    this.photo = entity.photo;

  }

  public toObject():EngineNumberEntity {
    return { ...this }
  }
}