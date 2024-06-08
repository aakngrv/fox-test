import { Entity } from '@backend/util/util-types';
import { 
  DiscDamage,
  AddElementDisc,
} from '@backend/shared/shared-types';


export class DiscDamageEntity implements Entity<DiscDamageEntity>, DiscDamage {

  public discDamageId?: number;
  public reportId: number;
  public withoutDamage: boolean;
  public leftFrontDisc: string[];
  public leftRearDisc: string[];
  public rightFrontDisc: string[];
  public rightRearDisc: string[];
  public addElementDisc?: AddElementDisc[];


  constructor(roofDamage: DiscDamage) {
    this.fillEntity(roofDamage);
  } 

  public fillEntity(entity: DiscDamage): void {
    this.discDamageId = entity.discDamageId;
    this.reportId = entity.reportId;
    this.withoutDamage = entity.withoutDamage;
    this.leftFrontDisc = entity.leftFrontDisc;
    this.leftRearDisc = entity.leftRearDisc;
    this.rightFrontDisc = entity.rightFrontDisc;
    this.rightRearDisc = entity.rightRearDisc;
    this.addElementDisc = [];
  }

  public toObject(): DiscDamageEntity {
    return { 
      ...this,
      addElementDisc: this.addElementDisc.map(({ addElementDiscId }) => ({ addElementDiscId })),
    }
  }
}