import { Entity } from '@backend/util/util-types';
import { 
  RightSideDamage,
  AddElementRight,
} from '@backend/shared/shared-types';


export class RightSideDamageEntity implements Entity<RightSideDamageEntity>, RightSideDamage {

  public rightSideDamageId?: number;
  public reportId: number;
  public withoutDamage: boolean;
  public rightFrontFender: string[];
  public rightFrontPillar: string[];
  public rightFrontDoor: string[];
  public rightCenterPillar: string[];
  public rightRearDoor: string[];
  public rightRearPillar: string[];
  public rightRearFender: string[];
  public rightMirror: string[];
  public rightThreshold: string[];
  public addElementRight?: AddElementRight[];


  constructor(rightSideDamage: RightSideDamage) {
    this.fillEntity(rightSideDamage);
  } 


  public fillEntity(entity: RightSideDamage): void {
    this.rightSideDamageId = entity.rightSideDamageId;
    this.reportId = entity.reportId;
    this.withoutDamage = entity.withoutDamage;
    this.rightFrontFender = entity.rightFrontFender;
    this.rightFrontPillar = entity.rightFrontPillar;
    this.rightFrontDoor = entity.rightFrontDoor;
    this.rightCenterPillar = entity.rightCenterPillar;
    this.rightRearDoor = entity.rightRearDoor;
    this.rightRearPillar = entity.rightRearPillar;
    this.rightRearFender = entity.rightRearFender;
    this.rightMirror = entity.rightMirror;
    this.rightThreshold = entity.rightThreshold;
    this.addElementRight = [];
  }

  public toObject(): RightSideDamageEntity {
    return { 
      ...this,
      addElementRight: this.addElementRight.map(({ addElementRightId }) => ({ addElementRightId })),
     }
  }
}