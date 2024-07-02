import { Entity } from '@backend/util/util-types';
import { 
  AddElementElectrical, 
  AddElementMechanical, 
  RunningEngine 
} from '@backend/shared/shared-types';


export class RunningEngineEntity implements Entity<RunningEngineEntity>, RunningEngine {

  public runningEngineId?: number;
  public reportId: number;
  public engineNotStart: boolean;
  public comment: string;
  public engineVideo: string;
  public allSystemOkElectric: boolean;
  public electricalMalfunction: string[];
  public allSystemOkMechanical: boolean;
  public mechanicalMalfunction: string[];  
  public addElementElectrical?: AddElementElectrical[];
  public addElementMechanical?: AddElementMechanical[];


  constructor(runningEngine: RunningEngine) {
    this.fillEntity(runningEngine);
  }

  public fillEntity(entity: RunningEngine): void {
    this.runningEngineId = entity.runningEngineId;
    this.reportId = entity.reportId;
    this.engineNotStart = entity.engineNotStart;
    this.comment = entity.comment;
    this.engineVideo = entity.engineVideo;
    this.allSystemOkElectric = entity.allSystemOkElectric;
    this.electricalMalfunction = entity.electricalMalfunction;
    this.allSystemOkMechanical = entity.allSystemOkMechanical;
    this.mechanicalMalfunction = entity.mechanicalMalfunction;
    this.addElementElectrical = [];
    this.addElementMechanical = [];
  }

  public toObject(): RunningEngineEntity {
    return { 
      ...this,
      addElementElectrical: this.addElementElectrical.map(({ addElementElectricalId }) => ({ addElementElectricalId })),
      addElementMechanical: this.addElementMechanical.map(({ addElementMechanicalId }) => ({ addElementMechanicalId })),
    }
  }
}