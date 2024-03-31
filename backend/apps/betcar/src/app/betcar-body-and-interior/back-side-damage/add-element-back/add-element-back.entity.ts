import { Entity } from '@backend/util/util-types';
import { AddElementBack } from '@backend/shared/shared-types';


export class AddElementBackEntity implements Entity<AddElementBackEntity>, AddElementBack {

  public addElementBackId?: number;
  public backSideDamageId: number;
  public name: string;
  public info: string[];


  constructor(addElementBack: AddElementBack) {
    this.fillEntity(addElementBack);
  } 

  public fillEntity(entity: AddElementBack): void {
    this.addElementBackId = entity.addElementBackId;
    this.backSideDamageId = entity.backSideDamageId;
    this.name = entity.name;
    this.info = entity.info;

  }

  public toObject(): AddElementBackEntity {
    return { ...this }
  }
}
