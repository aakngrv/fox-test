import { Entity } from '@backend/util/util-types';
import { 
  StoppedEngine,
  AddElementStop
} from '@backend/shared/shared-types';


export class StoppedEngineEntity implements Entity<StoppedEngineEntity>, StoppedEngine {

  public stoppedEngineId?: number;
  public reportId: number;
  public brakeDiscs: string;
  public brakeFluidLevel: string;
  public coolantLevel: string;
  public driveBelts: string;
  public engineOilLevel: string;
  public gearboxOilLevel: string;
  public gurLiquidLevel: string;
  public isEmergency: boolean;
  public isNew: boolean;
  public isNotGo: boolean;
  public isUnderstaffed: boolean;
  public comment: string;
  public technicalFluidsComment: string;
  public wearComment: string;
  public brakePads: string;
  public isFogging: boolean;
  public addElementStop?: AddElementStop[];


  constructor(stoppedEngine: StoppedEngine) {
    this.fillEntity(stoppedEngine);
  }

  public fillEntity(entity: StoppedEngine): void {
    this.stoppedEngineId = entity.stoppedEngineId;
    this.reportId = entity.reportId;
    this.brakeDiscs = entity.brakeDiscs;
    this.brakeFluidLevel = entity.brakeFluidLevel;
    this.coolantLevel = entity.coolantLevel;
    this.driveBelts = entity.driveBelts;
    this.engineOilLevel = entity.engineOilLevel;
    this.gearboxOilLevel = entity.gearboxOilLevel;
    this.gurLiquidLevel = entity.gurLiquidLevel;
    this.isEmergency = entity.isEmergency;
    this.isNew = entity.isNew;
    this.isNotGo = entity.isNotGo;
    this.isUnderstaffed = entity.isUnderstaffed;
    this.technicalFluidsComment = entity.technicalFluidsComment;
    this.wearComment = entity.wearComment;
    this.comment = entity.comment;
    this.brakePads = entity.brakePads;
    this.isFogging = entity.isFogging;
    this.addElementStop = [];
  }

  public toObject(): StoppedEngineEntity {
    return { 
      ...this,
      addElementStop: this.addElementStop.map(({ addElementStopId }) => ({ addElementStopId })),
    }
  }
}