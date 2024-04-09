import { Entity } from '@backend/util/util-types';
import { ComplectationSafety } from '@backend/shared/shared-types';


export class ComplectationSafetyEntity implements Entity<ComplectationSafetyEntity>, ComplectationSafety {

  public complectationSafetyId?: number;
  public reportId: number;
  public eraGlonass: boolean;
  public locking: boolean;
  public armoredBody: boolean;
  public airbags: string[];
  public isofix: string[];
  public auxiliarySystems: string[];
  

  constructor(complectationSafety: ComplectationSafety) {
    this.fillEntity(complectationSafety);
  } 


 
  public fillEntity(entity: ComplectationSafety): void {
    this.complectationSafetyId = entity.complectationSafetyId;
    this.reportId = entity.reportId;
    this.eraGlonass = entity.eraGlonass;
    this.locking = entity.locking;
    this.armoredBody = entity.armoredBody;
    this.airbags = entity.airbags;
    this.isofix = entity.isofix;
    this.auxiliarySystems = entity.auxiliarySystems;
  }

  public toObject(): ComplectationSafetyEntity {
    return { ...this }
  }
}