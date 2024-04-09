import { Entity } from '@backend/util/util-types';
import { AddElementGlass } from '@backend/shared/shared-types';


export class AddElementGlassEntity implements Entity<AddElementGlassEntity>, AddElementGlass {

  public addElementGlassId?: number;
  public glassDamageId: number;
  public name: string;
  public info: string[];


  constructor(addElementGlass: AddElementGlass) {
    this.fillEntity(addElementGlass);
  } 

  public fillEntity(entity: AddElementGlass): void {
    this.addElementGlassId = entity.addElementGlassId;
    this.glassDamageId = entity.glassDamageId;
    this.name = entity.name;
    this.info = entity.info;

  }

  public toObject(): AddElementGlassEntity {
    return { ...this }
  }
}
