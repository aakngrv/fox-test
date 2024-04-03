import { Entity } from '@backend/util/util-types';
import { 
  GlassDamage,
  AddElementGlass,
} from '@backend/shared/shared-types';


export class GlassDamageEntity implements Entity<GlassDamageEntity>, GlassDamage {

  public glassDamageId?: number;
  public reportId: number;
  public withoutDamage: boolean;
  public windshield: string[];
  public leftFrontGlass: string[];
  public leftRearGlass: string[];
  public rearGlass: string[];
  public rightFrontGlass: string[];
  public rightRearGlass: string[];
  public addElementGlass?: AddElementGlass[];


  constructor(glassDamage: GlassDamage) {
    this.fillEntity(glassDamage);
  } 


  public fillEntity(entity: GlassDamage): void {
    this.glassDamageId = entity.glassDamageId;
    this.reportId = entity.reportId;
    this.withoutDamage = entity.withoutDamage;
    this.windshield = entity.windshield;
    this.leftFrontGlass = entity.leftFrontGlass;
    this.leftRearGlass = entity.leftRearGlass;
    this.rearGlass = entity.rearGlass;
    this.rightFrontGlass = entity.rightFrontGlass;
    this.rightRearGlass = entity.rightRearGlass;
    this.addElementGlass = [];
  }

  public toObject(): GlassDamageEntity {
    return { 
      ...this,
      addElementGlass: this.addElementGlass.map(({ addElementGlassId }) => ({ addElementGlassId })),
     }
  }
}