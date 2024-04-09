import { Entity } from '@backend/util/util-types';
import { AddElementInterior } from '@backend/shared/shared-types';


export class AddElementInteriorEntity implements Entity<AddElementInteriorEntity>, AddElementInterior {

  public addElementInteriorId?: number;
  public interiorDamageId: number;
  public name: string;
  public info: string[];


  constructor(addElementInterior: AddElementInterior) {
    this.fillEntity(addElementInterior);
  } 

  public fillEntity(entity: AddElementInterior): void {
    this.addElementInteriorId = entity.addElementInteriorId;
    this.interiorDamageId = entity.interiorDamageId;
    this.name = entity.name;
    this.info = entity.info;

  }

  public toObject(): AddElementInteriorEntity {
    return { ...this }
  }
}
