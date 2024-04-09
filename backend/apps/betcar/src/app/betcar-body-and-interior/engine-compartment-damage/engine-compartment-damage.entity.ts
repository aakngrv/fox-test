import { Entity } from '@backend/util/util-types';
import { 
  EngineCompartmentDamage,
  AddElement,
} from '@backend/shared/shared-types';


export class EngineCompartmentDamageEntity implements Entity<EngineCompartmentDamageEntity>, EngineCompartmentDamage {

  public engineCompartmentDamageId?: number;
  public reportId: number;
  public withoutDamage: boolean;
  public leftSideMember: string[];
  public leftGlass: string[];
  public rightSideMember: string[];
  public rightGlass: string[];
  public hoodHinges: string[];
  public televisor: string[];
  public addElement: AddElement[];


  constructor(engineCompartmentDamage: EngineCompartmentDamage) {
    this.fillEntity(engineCompartmentDamage);
  } 


  public fillEntity(entity: EngineCompartmentDamage): void {
    this.engineCompartmentDamageId = entity.engineCompartmentDamageId;
    this.reportId = entity.reportId;
    this.withoutDamage = entity.withoutDamage;
    this.leftSideMember = entity.leftSideMember;
    this.leftGlass = entity.leftGlass;
    this.rightSideMember = entity.rightSideMember;
    this.rightGlass = entity.rightGlass;
    this.hoodHinges = entity.hoodHinges;
    this.televisor = entity.televisor;
    this.addElement = [];

  }

  public toObject(): EngineCompartmentDamageEntity {
    return { 
      ...this,
      addElement: this.addElement.map(({ addElementId }) => ({ addElementId })),
     }
  }
}
