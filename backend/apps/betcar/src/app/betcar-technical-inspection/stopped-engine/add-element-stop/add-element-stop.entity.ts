import { Entity } from '@backend/util/util-types';
import { AddElementStop } from '@backend/shared/shared-types';


export class AddElementStopEntity implements Entity<AddElementStop>, AddElementStop {

  public addElementStopId?: number;
  public stoppedEngineId: number;
  public name: string;
  public fogging: string[];
  public photo: string[];
  public comment: string;


  constructor(addElementStop: AddElementStop) {
    this.fillEntity(addElementStop);
  } 

  public fillEntity(entity: AddElementStop): void {
    this.addElementStopId = entity.addElementStopId;
    this.stoppedEngineId = entity.stoppedEngineId;
    this.name = entity.name;
    this.fogging = entity.fogging;
    this.photo = entity.photo;
    this.comment = entity.comment;

  }

  public toObject(): AddElementStopEntity {
    return { ...this }
  }
}
