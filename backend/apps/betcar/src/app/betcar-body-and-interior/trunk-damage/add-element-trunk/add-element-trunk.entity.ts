import { Entity } from '@backend/util/util-types';
import { AddElementTrunk } from '@backend/shared/shared-types';


export class AddElementTrunkEntity implements Entity<AddElementTrunk>, AddElementTrunk {

  public addElementTrunkId?: number;
  public trunkDamageId: number;
  public name: string;
  public info: string[];


  constructor(addElementTrunk: AddElementTrunk) {
    this.fillEntity(addElementTrunk);
  } 

  public fillEntity(entity: AddElementTrunk): void {
    this.addElementTrunkId = entity.addElementTrunkId;
    this.trunkDamageId = entity.trunkDamageId;
    this.name = entity.name;
    this.info = entity.info;

  }

  public toObject(): AddElementTrunkEntity {
    return { ...this }
  }
}
