import { Entity } from '@backend/util/util-types';
import { 
  TrunkDamage,
  AddElementTrunk,
} from '@backend/shared/shared-types';


export class TrunkDamageEntity implements Entity<TrunkDamageEntity>, TrunkDamage {

  public trunkDamageId?: number;
  public reportId: number;
  public withoutDamage: boolean;
  public coverTrim: string[];
  public carpetFloor: string[];
  public rightTrim: string[];
  public rightGlass: string[];
  public leftTrim: string[];
  public leftGlass: string[];
  public seatBackTrim: string[];
  public spareWheelWell: string[];
  public addElementTrunk?: AddElementTrunk[];


  constructor(trunkSideDamage: TrunkDamage) {
    this.fillEntity(trunkSideDamage);
  } 


  public fillEntity(entity: TrunkDamage): void {
    this.trunkDamageId = entity.trunkDamageId;
    this.reportId = entity.reportId;
    this.withoutDamage = entity.withoutDamage;
    this.coverTrim = entity.coverTrim;
    this.carpetFloor = entity.carpetFloor;
    this.rightTrim = entity.rightTrim;
    this.rightGlass = entity.rightGlass;
    this.leftTrim = entity.leftTrim;
    this.leftGlass = entity.leftGlass;
    this.seatBackTrim = entity.seatBackTrim;
    this.spareWheelWell = entity.spareWheelWell;
    this.addElementTrunk = [];
  }

  public toObject(): TrunkDamageEntity {
    return { 
      ...this,
      addElementTrunk: this.addElementTrunk.map(({ addElementTrunkId }) => ({ addElementTrunkId })),
     }
  }
}