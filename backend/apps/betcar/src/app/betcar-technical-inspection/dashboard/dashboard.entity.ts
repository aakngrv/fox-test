import { Entity } from '@backend/util/util-types';
import { 
  AddElementDash, 
  Dashboard 
} from '@backend/shared/shared-types';


export class DashboardEntity implements Entity<DashboardEntity>, Dashboard {

  public dashboardId?: number;
  public reportId: number;
  public noErrors: boolean;
  public diagnosticsFile?: string[];
  public diagnosticsComment: string;
  public mileageOnDashboard?: string;
  public mileageInTheEngineBlock?: string;
  public mileageInTheGearbox?: string;
  public mileageInAdditionalBlocks?: string;
  public isNoMileage?: boolean;
  public totalComment: string;
  public addElementDash?: AddElementDash[];


  constructor(dashboard: Dashboard) {
    this.fillEntity(dashboard);
  }

  public fillEntity(entity: Dashboard): void {
    this.dashboardId = entity.dashboardId;
    this.reportId = entity.reportId;
    this.diagnosticsComment = entity.diagnosticsComment;
    this.diagnosticsFile = entity.diagnosticsFile;
    this.mileageOnDashboard = entity.mileageOnDashboard;
    this.mileageInTheEngineBlock = entity.mileageInTheEngineBlock;
    this.mileageInTheGearbox = entity.mileageInTheGearbox;
    this.mileageInAdditionalBlocks = entity.mileageInAdditionalBlocks;
    this.isNoMileage = entity.isNoMileage;
    this.totalComment = entity.totalComment;
    this.noErrors = entity.noErrors;
    this.addElementDash = [];

  }

  public toObject(): DashboardEntity {
    return { 
      ...this,
      addElementDash: this.addElementDash.map(({ addElementDashId }) => ({ addElementDashId })),
    }
  }
}