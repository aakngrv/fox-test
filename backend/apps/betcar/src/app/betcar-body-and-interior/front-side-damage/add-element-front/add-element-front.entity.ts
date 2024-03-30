import { Entity } from '@backend/util/util-types';
import { AddElementFront } from '@backend/shared/shared-types';


export class AddElementFrontEntity implements Entity<AddElementFrontEntity>, AddElementFront {

  public addElementFrontId?: number;
  public frontSideDamageId: number;
  public name: string;
  public info: string[];


  constructor(addElementFront: AddElementFront) {
    this.fillEntity(addElementFront);
  } 

  public fillEntity(entity: AddElementFront): void {
    this.addElementFrontId = entity.addElementFrontId;
    this.frontSideDamageId = entity.frontSideDamageId;
    this.name = entity.name;
    this.info = entity.info;

  }

  public toObject(): AddElementFrontEntity {
    return { ...this }
  }
}