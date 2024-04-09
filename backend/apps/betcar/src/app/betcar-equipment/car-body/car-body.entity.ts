import { Entity } from '@backend/util/util-types';
import { ComplectationBody } from '@backend/shared/shared-types';


export class CarBodyEntity implements Entity<CarBodyEntity>, ComplectationBody {

  public complectationBodyId?: number;
  public reportId: number;
  public roofRails: boolean;
  public bodyStickers: boolean;
  public airbrushing: boolean;
  public bodyTuning: boolean;
  public bodyInFilm: boolean;
  

  constructor(complectationBody: ComplectationBody) {
    this.fillEntity(complectationBody);
  } 
 
  public fillEntity(entity: ComplectationBody): void {
    this.complectationBodyId = entity.complectationBodyId;
    this.reportId = entity.reportId;
    this.roofRails = entity.roofRails;
    this.bodyStickers = entity.bodyStickers;
    this.airbrushing = entity.airbrushing;
    this.bodyTuning = entity.bodyTuning;
    this.bodyInFilm = entity.bodyInFilm;
  }

  public toObject(): CarBodyEntity {
    return { ...this }
  }
}