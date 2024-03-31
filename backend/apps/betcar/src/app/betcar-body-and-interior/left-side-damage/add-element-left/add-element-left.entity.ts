import { Entity } from '@backend/util/util-types';
import { AddElementLeft } from '@backend/shared/shared-types';


export class AddElementLeftEntity implements Entity<AddElementLeftEntity>, AddElementLeft {

  public addElementLeftId?: number;
  public leftSideDamageId: number;
  public name: string;
  public info: string[];


  constructor(addElementLeft: AddElementLeft) {
    this.fillEntity(addElementLeft);
  } 

  public fillEntity(entity: AddElementLeft): void {
    this.addElementLeftId = entity.addElementLeftId;
    this.leftSideDamageId = entity.leftSideDamageId;
    this.name = entity.name;
    this.info = entity.info;

  }

  public toObject(): AddElementLeftEntity {
    return { ...this }
  }
}
