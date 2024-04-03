import { Entity } from '@backend/util/util-types';
import { 
  RoofDamage,
  AddElementRoof,
} from '@backend/shared/shared-types';


export class RoofDamageEntity implements Entity<RoofDamageEntity>, RoofDamage {

  public roofDamageId?: number;
  public reportId: number;
  public withoutDamage: boolean;
  public roofRails: string[];
  public roof: string[];
  public luke: string[];
  public panorama: string[];
  public addElementRoof?: AddElementRoof[];


  constructor(roofDamage: RoofDamage) {
    this.fillEntity(roofDamage);
  } 


  public fillEntity(entity: RoofDamage): void {
    this.roofDamageId = entity.roofDamageId;
    this.reportId = entity.reportId;
    this.withoutDamage = entity.withoutDamage;
    this.roofRails = entity.roofRails;
    this.roof = entity.roof;
    this.luke = entity.luke;
    this.panorama = entity.panorama;
    this.addElementRoof = [];
  }

  public toObject(): RoofDamageEntity {
    return { 
      ...this,
      addElementRoof: this.addElementRoof.map(({ addElementRoofId }) => ({ addElementRoofId })),
     }
  }
}