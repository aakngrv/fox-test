import { Entity } from '@backend/util/util-types';
import { RunningEngine } from '@backend/shared/shared-types';


export class RunningEngineEntity implements Entity<RunningEngineEntity>, RunningEngine {

  public runningEngineId?: number;
  public reportId: number;
  public comment: string;
  public airConditioner: boolean;
  public audioSystem: boolean;
  public battery: boolean;
  public electricPanorama: boolean;
  public electricSeats: boolean;
  public electricSteeringWheel: boolean;
  public electricSunroof: boolean;
  public electricSystemComment: string;
  public electricTrunkDrive: boolean;
  public engineNotStart: boolean;
  public engineOperation: boolean;
  public engineVideo: string;
  public gearboxSwitching: boolean;
  public heatedSteeringWheel: boolean;
  public heatedWindshield: boolean;
  public interiorHeater: boolean;
  public lightingEngineering: boolean;
  public mechanicalSystemComment: string;
  public powerSteering: boolean;
  public seatHeating: boolean;
  public seatMassage: boolean;
  public soundSignal: boolean;
  public windowLifters: boolean;
  public windscreenWipers: boolean;
  public windshieldWashers: boolean;


  constructor(runningEngine: RunningEngine) {
    this.fillEntity(runningEngine);
  }

  public fillEntity(entity: RunningEngine): void {
    this.runningEngineId = entity.runningEngineId;
    this.reportId = entity.reportId;
    this.engineVideo = entity.engineVideo;
    this.comment = entity.comment;
    this.airConditioner = entity.airConditioner;
    this.audioSystem = entity.audioSystem;
    this.battery = entity.battery;
    this.electricPanorama = entity.electricPanorama;
    this.electricSeats = entity.electricSeats;
    this.electricSteeringWheel = entity.electricSteeringWheel;
    this.electricSunroof = entity.electricSunroof;
    this.electricSystemComment = entity.electricSystemComment;
    this.electricTrunkDrive = entity.electricTrunkDrive;
    this.engineNotStart = entity.engineNotStart;
    this.engineOperation = entity.engineOperation;
    this.gearboxSwitching = entity.gearboxSwitching;
    this.heatedSteeringWheel = entity.heatedSteeringWheel;
    this.heatedWindshield = entity.heatedWindshield;
    this.interiorHeater = entity.interiorHeater;
    this.lightingEngineering = entity.lightingEngineering;
    this.mechanicalSystemComment = entity.mechanicalSystemComment;
    this.powerSteering = entity.powerSteering;
    this.seatHeating = entity.seatHeating;
    this.seatMassage = entity.seatMassage;
    this.soundSignal = entity.soundSignal;
    this.windowLifters = entity.windowLifters;
    this.windscreenWipers = entity.windscreenWipers;
    this.windshieldWashers = entity.windshieldWashers;
  }

  public toObject(): RunningEngineEntity {
    return { ...this }
  }
}