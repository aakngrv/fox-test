import { Entity } from '@backend/util/util-types';
import { AddElementElectrical } from '@backend/shared/shared-types';


export class AddElementElectricalEntity implements Entity<AddElementElectrical>, AddElementElectrical {

  public addElementElectricalId?: number;
  public runningEngineId: number;
  public name: string;
  public isCheck: boolean;
  public comment: string;

  constructor(addElementElectrical: AddElementElectrical) {
    this.fillEntity(addElementElectrical);
  } 
  


  public fillEntity(entity: AddElementElectrical): void {
    this.addElementElectricalId = entity.addElementElectricalId;
    this.runningEngineId = entity.runningEngineId;
    this.name = entity.name;
    this.isCheck = entity.isCheck;
    this.comment = entity.comment;
  }

  public toObject(): AddElementElectricalEntity {
    return { ...this }
  }
}
