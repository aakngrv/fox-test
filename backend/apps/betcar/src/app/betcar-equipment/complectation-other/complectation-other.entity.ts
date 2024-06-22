import { Entity } from '@backend/util/util-types';
import { ComplectationOther } from '@backend/shared/shared-types';


export class ComplectationOtherEntity implements Entity<ComplectationOtherEntity>, ComplectationOther {

  public complectationOtherId?: number;
  public reportId: number;
  public towBar: boolean;
  public winch: boolean;
  public airbox: boolean;
  public crankcaseProtection: boolean;
  public transverseArches: boolean;
  public gasEquipment: boolean;
  public numberOfKeys: string;
  public spareWheel: string;
  

  constructor(complectationOther: ComplectationOther) {
    this.fillEntity(complectationOther);
  } 

  
  public fillEntity(entity: ComplectationOther): void {
    this.complectationOtherId = entity.complectationOtherId;
    this.reportId = entity.reportId;
    this.towBar = entity.towBar;
    this.winch = entity.winch;
    this.airbox = entity.airbox;
    this.crankcaseProtection = entity.crankcaseProtection;
    this.transverseArches = entity.transverseArches;
    this.gasEquipment = entity.gasEquipment;
    this.numberOfKeys = entity.numberOfKeys;
    this.spareWheel = entity.spareWheel;
  }

  public toObject(): ComplectationOtherEntity {
    return { ...this }
  }
}