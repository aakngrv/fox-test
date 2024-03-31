import { Entity } from '@backend/util/util-types';
import { AddElementRoof } from '@backend/shared/shared-types';


export class AddElementRoofEntity implements Entity<AddElementRoofEntity>, AddElementRoof {

  public addElementRoofId?: number;
  public roofDamageId: number;
  public name: string;
  public info: string[];


  constructor(addElementRoof: AddElementRoof) {
    this.fillEntity(addElementRoof);
  } 

  public fillEntity(entity: AddElementRoof): void {
    this.addElementRoofId = entity.addElementRoofId;
    this.roofDamageId = entity.roofDamageId;
    this.name = entity.name;
    this.info = entity.info;

  }

  public toObject(): AddElementRoofEntity {
    return { ...this }
  }
}
