import { Entity } from '@backend/util/util-types';
import { AddElementMechanical } from '@backend/shared/shared-types';


export class AddElementMechanicalEntity implements Entity<AddElementMechanical>, AddElementMechanical {

  public addElementMechanicalId?: number;
  public runningEngineId: number;
  public name: string;
  public isCheck: boolean;
  public comment: string;

  constructor(addElementMechanical: AddElementMechanical) {
    this.fillEntity(addElementMechanical);
  } 
  


  public fillEntity(entity: AddElementMechanical): void {
    this.addElementMechanicalId = entity.addElementMechanicalId;
    this.runningEngineId = entity.runningEngineId;
    this.name = entity.name;
    this.isCheck = entity.isCheck;
    this.comment = entity.comment;
  }

  public toObject(): AddElementMechanicalEntity {
    return { ...this }
  }
}
