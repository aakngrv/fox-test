import { Entity } from '@backend/util/util-types';
import { AddElementDash } from '@backend/shared/shared-types';


export class AddElementDashEntity implements Entity<AddElementDash>, AddElementDash {

  public addElementDashId?: number;
  public dashboardId: number;
  public name: string;

  constructor(addElementDash: AddElementDash) {
    this.fillEntity(addElementDash);
  } 


  public fillEntity(entity: AddElementDash): void {
    this.addElementDashId = entity.addElementDashId;
    this.dashboardId = entity.dashboardId;
    this.name = entity.name;
  }

  public toObject(): AddElementDashEntity {
    return { ...this }
  }
}
