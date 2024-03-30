import { Entity } from '@backend/util/util-types';
import { AddElement} from '@backend/shared/shared-types';


export class AddElementEntity implements Entity<AddElementEntity>, AddElement {

  public addElementId?: number;
  public engineCompartmentDamageId: number;
  public name: string;
  public info: string[];


  constructor(addElement: AddElement) {
    this.fillEntity(addElement);
  } 

  public fillEntity(entity: AddElement): void {
    this.addElementId = entity.addElementId;
    this.engineCompartmentDamageId = entity.engineCompartmentDamageId;
    this.name = entity.name;
    this.info = entity.info;

  }

  public toObject(): AddElementEntity {
    return { ...this }
  }
}