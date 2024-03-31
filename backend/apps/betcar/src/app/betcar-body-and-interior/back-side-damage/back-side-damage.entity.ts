import { Entity } from '@backend/util/util-types';
import { 
  BackSideDamage,
  AddElementBack,
} from '@backend/shared/shared-types';


export class BackSideDamageEntity implements Entity<BackSideDamageEntity>, BackSideDamage {

  public backSideDamageId?: number;
  public reportId: number;
  public withoutDamage: boolean;
  public tailgate: string[];
  public rearBumper: string[];
  public leftLamp: string[];
  public rightLamp: string[];
  public addElementBack?: AddElementBack[];


  constructor(backSideDamage: BackSideDamage) {
    this.fillEntity(backSideDamage);
  } 


  public fillEntity(entity: BackSideDamage): void {
    this.backSideDamageId = entity.backSideDamageId;
    this.reportId = entity.reportId;
    this.withoutDamage = entity.withoutDamage;
    this.tailgate = entity.tailgate;
    this.rearBumper = entity.rearBumper;
    this.leftLamp = entity.leftLamp;
    this.rightLamp = entity.rightLamp;
    this.addElementBack = [];
  }

  public toObject(): BackSideDamageEntity {
    return { 
      ...this,
      addElementBack: this.addElementBack.map(({ addElementBackId }) => ({ addElementBackId })),
     }
  }
}