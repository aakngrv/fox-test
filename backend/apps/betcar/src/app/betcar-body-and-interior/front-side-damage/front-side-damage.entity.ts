import { Entity } from '@backend/util/util-types';
import { 
  FrontSideDamage,
  AddElementFront,
} from '@backend/shared/shared-types';


export class FrontSideDamageEntity implements Entity<FrontSideDamageEntity>, FrontSideDamage {

  public frontSideDamageId?: number;
  public reportId: number;
  public withoutDamage: boolean;
  public fogLights: string[];
  public radiatorGrille: string[];
  public frontBumper: string[];
  public rightHeadlight: string[];
  public leftHeadlight: string[];
  public hood: string[];
  public addElementFront: AddElementFront[];


  constructor(frontSideDamage: FrontSideDamage) {
    this.fillEntity(frontSideDamage);
  } 


  public fillEntity(entity: FrontSideDamage): void {
    this.frontSideDamageId = entity.frontSideDamageId;
    this.reportId = entity.reportId;
    this.withoutDamage = entity.withoutDamage;
    this.fogLights = entity.fogLights;
    this.radiatorGrille = entity.radiatorGrille;
    this.frontBumper = entity.frontBumper;
    this.rightHeadlight = entity.rightHeadlight;
    this.leftHeadlight = entity.leftHeadlight;
    this.hood = entity.hood;
    this.addElementFront = [];

  }

  public toObject(): FrontSideDamageEntity {
    return { 
      ...this,
      addElementFront: this.addElementFront.map(({ addElementFrontId }) => ({ addElementFrontId })),
     }
  }
}

