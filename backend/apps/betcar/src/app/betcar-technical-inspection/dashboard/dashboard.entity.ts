import { Entity } from '@backend/util/util-types';
import { Dashboard } from '@backend/shared/shared-types';


export class DashboardEntity implements Entity<DashboardEntity>, Dashboard {

  public dashboardId?: number;
  public reportId: number;
  public abs: boolean;
  public airbag: boolean;
  public checkEngine: boolean;
  public battery: boolean;
  public tirePressure: boolean;
  public oilPressure: boolean;
  public controlLightComment: string;
  public electronicDiagnostics: boolean;
  public diagnosticsResult: string;
  public diagnosticsFile?: string[];
  public mileageOnDashboard?: string;
  public mileageInTheEngineBlock?: string;
  public mileageInTheGearbox?: string;
  public mileageInAdditionalBlocks?: string;
  public isNoMileage?: boolean;
  public totalComment: string;
  public noErrors: boolean;
  public esp: boolean;


  constructor(dashboard: Dashboard) {
    this.fillEntity(dashboard);
  }

  public fillEntity(entity: Dashboard): void {
    this.dashboardId = entity.dashboardId;
    this.reportId = entity.reportId;
    this.abs = entity.abs;
    this.airbag = entity.airbag;
    this.checkEngine = entity.checkEngine;
    this.battery = entity.battery;
    this.tirePressure = entity.tirePressure;
    this.oilPressure = entity.oilPressure;
    this.controlLightComment = entity.controlLightComment;
    this.electronicDiagnostics = entity.electronicDiagnostics;
    this.diagnosticsResult = entity.diagnosticsResult;
    this.diagnosticsFile = entity.diagnosticsFile;
    this.mileageOnDashboard = entity.mileageOnDashboard;
    this.mileageInTheEngineBlock = entity.mileageInTheEngineBlock;
    this.mileageInTheGearbox = entity.mileageInTheGearbox;
    this.mileageInAdditionalBlocks = entity.mileageInAdditionalBlocks;
    this.isNoMileage = entity.isNoMileage;
    this.totalComment = entity.totalComment;
    this.noErrors = entity.noErrors;
    this.esp = entity.esp;
  }

  public toObject(): DashboardEntity {
    return { ...this }
  }
}