
import { Entity } from '@backend/util/util-types';
import { ServiceInspection } from '@backend/shared/shared-types';


export class ServiceInspectionEntity implements Entity<ServiceInspectionEntity>, ServiceInspection {

  public serviceInspectionId?: number;
  public chassisInspection: string[];
  public checkpointInspection: string[];
  public compressionCheck: string[];
  public endoscopeCheck: string[];
  public engineInspection: string[];
  public frontAxleInspection: string[];
  public powerSteeringInspection: string[];
  public rearAxleInspection: string[];
  public steeringRackInspection: string[];
  public transferCaseInspection: string[];


  constructor(serviceInspection: ServiceInspection) {
    this.fillEntity(serviceInspection);
  }

  public fillEntity(entity: ServiceInspection): void {
    this.serviceInspectionId = entity.serviceInspectionId;
    this.chassisInspection = entity.chassisInspection;
    this.checkpointInspection = entity.checkpointInspection;
    this.compressionCheck = entity.compressionCheck;
    this.endoscopeCheck = entity.endoscopeCheck;
    this.engineInspection = entity.engineInspection;
    this.frontAxleInspection = entity.frontAxleInspection;
    this.powerSteeringInspection = entity.powerSteeringInspection;
    this.rearAxleInspection = entity.rearAxleInspection;
    this.steeringRackInspection = entity.steeringRackInspection;
    this.transferCaseInspection = entity.transferCaseInspection;

  }

  public toObject(): ServiceInspectionEntity {
    return { ...this }
  }
}