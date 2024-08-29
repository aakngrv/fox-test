import { Entity } from '@backend/util/util-types';
import { AddElementPaintwork } from '@backend/shared/shared-types';


export class AddElementPaintworkEntity implements Entity<AddElementPaintworkEntity>, AddElementPaintwork {

  public addElementPaintworkId?: number;
  public paintworkInspectionId: number;
  public name: string;
  public info: string[];


  constructor(addElementPaintwork: AddElementPaintwork) {
    this.fillEntity(addElementPaintwork);
  } 

  public fillEntity(entity: AddElementPaintwork): void {
    this.addElementPaintworkId = entity.addElementPaintworkId;
    this.paintworkInspectionId = entity.paintworkInspectionId;
    this.name = entity.name;
    this.info = entity.info;

  }

  public toObject(): AddElementPaintworkEntity {
    return { ...this }
  }
}
