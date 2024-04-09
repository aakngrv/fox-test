import { Entity } from '@backend/util/util-types';
import { AddElementDisc } from '@backend/shared/shared-types';


export class AddElementDiscEntity implements Entity<AddElementDiscEntity>, AddElementDisc {

  public addElementDiscId?: number;
  public discDamageId: number;
  public name: string;
  public info: string[];


  constructor(addElementDisc: AddElementDisc) {
    this.fillEntity(addElementDisc);
  } 

  public fillEntity(entity: AddElementDisc): void {
    this.addElementDiscId = entity.addElementDiscId;
    this.discDamageId = entity.discDamageId;
    this.name = entity.name;
    this.info = entity.info;

  }

  public toObject(): AddElementDiscEntity {
    return { ...this }
  }
}
