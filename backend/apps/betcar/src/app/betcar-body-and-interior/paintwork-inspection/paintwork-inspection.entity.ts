import { Entity } from '@backend/util/util-types';
import { PaintworkInspection} from '@backend/shared/shared-types';


export class PaintworkInspectionEntity implements Entity<PaintworkInspectionEntity>, PaintworkInspection {

  public paintworkInspectionId?: number;
  public reportId: number;
  public factoryColor: boolean;
  public bodyInFilm: boolean;
  public roof: string[];
  public trunkLid: string[];
  public rightRearFender: string[];
  public rightRearPillar: string[];
  public rightRearDoor: string[];
  public rightRearDoorOpening: string[];
  public rightCenterPillar: string[];
  public rightThreshold: string[];
  public rightFrontDoor: string[];
  public rightFrontDoorOpening: string[];
  public rightFrontPillar: string[];
  public rightFrontFender: string[];
  public hood: string[];
  public leftFrontFender: string[];
  public leftFrontPillar: string[];
  public leftFrontDoor: string[];
  public leftFrontDoorOpening: string[];
  public leftCenterPillar: string[];
  public leftThreshold: string[];
  public leftRearDoor: string[];
  public leftRearDoorOpening: string[];
  public leftRearPillar: string[];
  public leftRearFender: string[];


  constructor(paintworkInspection: PaintworkInspection) {
    this.fillEntity(paintworkInspection);
  } 
  

  public fillEntity(entity: PaintworkInspection): void {
    this.paintworkInspectionId = entity.paintworkInspectionId;
    this.reportId = entity.reportId;
    this.factoryColor = entity.factoryColor;
    this.bodyInFilm = entity.bodyInFilm;
    this.roof = entity.roof;
    this.trunkLid = entity.trunkLid;
    this.rightRearFender = entity.rightRearFender;
    this.rightRearPillar = entity.rightRearPillar;
    this.rightRearDoor = entity.rightRearDoor;
    this.rightRearDoorOpening = entity.rightRearDoorOpening;
    this.rightCenterPillar = entity.rightCenterPillar;
    this.rightThreshold = entity.rightThreshold;
    this.rightFrontDoor = entity.rightFrontDoor;
    this.rightFrontDoorOpening = entity.rightFrontDoorOpening;
    this.rightFrontPillar = entity.rightFrontPillar;
    this.rightFrontFender = entity.rightFrontFender;
    this.hood = entity.hood;
    this.leftFrontFender = entity.leftFrontFender;
    this.leftFrontPillar = entity.leftFrontPillar;
    this.leftFrontDoor = entity.leftFrontDoor;
    this.leftFrontDoorOpening = entity.leftFrontDoorOpening;
    this.leftCenterPillar = entity.leftCenterPillar;
    this.leftThreshold = entity.leftThreshold;
    this.leftRearDoor = entity.leftRearDoor;
    this.leftRearDoorOpening = entity.leftRearDoorOpening;
    this.leftRearPillar = entity.leftRearPillar;
    this.leftRearFender = entity.leftRearFender;
  }

  public toObject(): PaintworkInspectionEntity {
    return { ...this }
  }
}