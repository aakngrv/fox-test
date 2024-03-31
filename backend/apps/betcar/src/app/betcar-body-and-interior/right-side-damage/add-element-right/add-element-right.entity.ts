import { Entity } from '@backend/util/util-types';
import { AddElementRight } from '@backend/shared/shared-types';


export class AddElementRightEntity implements Entity<AddElementRightEntity>, AddElementRight {

  public addElementRightId?: number;
  public rightSideDamageId: number;
  public name: string;
  public info: string[];


  constructor(addElementRight: AddElementRight) {
    this.fillEntity(addElementRight);
  } 

  public fillEntity(entity: AddElementRight): void {
    this.addElementRightId = entity.addElementRightId;
    this.rightSideDamageId = entity.rightSideDamageId;
    this.name = entity.name;
    this.info = entity.info;

  }

  public toObject(): AddElementRightEntity {
    return { ...this }
  }
}
