import { Entity } from '@backend/util/util-types';
import { 
  LeftSideDamage,
  AddElementLeft,
} from '@backend/shared/shared-types';


export class LeftSideDamageEntity implements Entity<LeftSideDamageEntity>, LeftSideDamage {

  public leftSideDamageId?: number;
  public reportId: number;
  public withoutDamage: boolean;
  public leftFrontFender: string[];
  public leftFrontPillar: string[];
  public leftFrontDoor: string[];
  public leftCenterPillar: string[];
  public leftRearDoor: string[];
  public leftRearPillar: string[];
  public leftRearFender: string[];
  public leftMirror: string[];
  public leftThreshold: string[];
  public addElementLeft?: AddElementLeft[];


  constructor(leftSideDamage: LeftSideDamage) {
    this.fillEntity(leftSideDamage);
  } 


  public fillEntity(entity: LeftSideDamage): void {
    this.leftSideDamageId = entity.leftSideDamageId;
    this.reportId = entity.reportId;
    this.withoutDamage = entity.withoutDamage;
    this.leftFrontFender = entity.leftFrontFender;
    this.leftFrontPillar = entity.leftFrontPillar;
    this.leftFrontDoor = entity.leftFrontDoor;
    this.leftCenterPillar = entity.leftCenterPillar;
    this.leftRearDoor = entity.leftRearDoor;
    this.leftRearPillar = entity.leftRearPillar;
    this.leftRearFender = entity.leftRearFender;
    this.leftMirror = entity.leftMirror;
    this.leftThreshold = entity.leftThreshold;
    this.addElementLeft = [];
  }

  public toObject(): LeftSideDamageEntity {
    return { 
      ...this,
      addElementLeft: this.addElementLeft.map(({ addElementLeftId }) => ({ addElementLeftId })),
     }
  }
}