import { Entity } from '@backend/util/util-types';
import { ComplectationComfort } from '@backend/shared/shared-types';


export class ComplectationComfortEntity implements Entity<ComplectationComfortEntity>, ComplectationComfort {

  public complectationComfortId?: number;
  public reportId: number;
  public startStopSystem: boolean;
  public onBoardComputer: boolean;
  public electricMirrors: boolean;
  public preheater: boolean;
  public engineStartButton: boolean;
  public keylessEntrySystem: boolean;
  public handsFreeTrunkOpening: boolean;
  public electrofoldingOfMirrors: boolean;
  public multifunctionSteeringWheel: boolean;
  public touchControlPanel: boolean;
  public gearshiftPaddles: boolean;
  public adjustablePedalAssembly: boolean;
  public electronicDashboard: boolean;
  public remoteEngineStart: boolean;
  public electricTrunkLid: boolean;
  public camera: string[];
  public suspension: string[];
  public airConditioner: string;
  public powerSteering: string;
  public cruiseControl: string;
  public electricHeating: string[];
  public steeringWheelAdjustment: string[];
  public parkingAssistanceSystem: string[];
  public electricLifts: string[];
  

  constructor(complectationComfort: ComplectationComfort) {
    this.fillEntity(complectationComfort);
  } 


 
  public fillEntity(entity: ComplectationComfort): void {
    this.complectationComfortId = entity.complectationComfortId;
    this.reportId = entity.reportId;
    this.startStopSystem = entity.startStopSystem;
    this.onBoardComputer = entity.onBoardComputer;
    this.electricMirrors = entity.electricMirrors;
    this.preheater = entity.preheater;
    this.engineStartButton = entity.engineStartButton;
    this.keylessEntrySystem = entity.keylessEntrySystem;
    this.handsFreeTrunkOpening = entity.handsFreeTrunkOpening;
    this.electrofoldingOfMirrors = entity.electrofoldingOfMirrors;
    this.multifunctionSteeringWheel = entity.multifunctionSteeringWheel;
    this.touchControlPanel = entity.touchControlPanel;
    this.gearshiftPaddles = entity.gearshiftPaddles;
    this.adjustablePedalAssembly = entity.adjustablePedalAssembly;
    this.electronicDashboard = entity.electronicDashboard;
    this.remoteEngineStart = entity.remoteEngineStart;
    this.electricTrunkLid = entity.electricTrunkLid;
    this.camera = entity.camera;
    this.suspension = entity.suspension;
    this.airConditioner = entity.airConditioner;
    this.powerSteering = entity.powerSteering;
    this.cruiseControl = entity.cruiseControl;
    this.electricHeating = entity.electricHeating;
    this.steeringWheelAdjustment = entity.steeringWheelAdjustment;
    this.parkingAssistanceSystem = entity.parkingAssistanceSystem;
    this.electricLifts = entity.electricLifts;
  }

  public toObject(): ComplectationComfortEntity {
    return { ...this }
  }
}