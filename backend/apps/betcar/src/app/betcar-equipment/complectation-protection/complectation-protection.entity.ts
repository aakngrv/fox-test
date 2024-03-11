import { Entity } from '@backend/util/util-types';
import { ComplectationProtection } from '@backend/shared/shared-types';


export class ComplectationProtectionEntity implements Entity<ComplectationProtectionEntity>, ComplectationProtection {

  public complectationProtectionId?: number;
  public reportId: number;
  public label: boolean;
  public immobilizer: boolean;
  public centralLocking: boolean;
  public authorsSecuritySystem: boolean;
  public interiorIntrusionSensor: boolean;
  public signaling: string;
  

  constructor(complectationProtection: ComplectationProtection) {
    this.fillEntity(complectationProtection);
  } 



 
  public fillEntity(entity: ComplectationProtection): void {
    this.complectationProtectionId = entity.complectationProtectionId;
    this.reportId = entity.reportId;
    this.label = entity.label;
    this.immobilizer = entity.immobilizer;
    this.centralLocking = entity.centralLocking;
    this.authorsSecuritySystem = entity.authorsSecuritySystem;
    this.interiorIntrusionSensor = entity.interiorIntrusionSensor;
    this.signaling = entity.signaling;
  }

  public toObject(): ComplectationProtectionEntity {
    return { ...this }
  }
}