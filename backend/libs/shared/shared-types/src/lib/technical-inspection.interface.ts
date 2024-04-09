export interface StoppedEngine {
  stoppedEngineId?: number;
  reportId: number;
  isNew: boolean;
  isNotGo: boolean;
  isEmergency: boolean;
  isUnderstaffed: boolean;
  comment: string;
  engineOilLevel: string;
  gearboxOilLevel: string;
  gurLiquidLevel: string;
  brakeFluidLevel: string;
  coolantLevel: string;
  technicalFluidsComment: string;
  driveBelts: string;
  brakeDiscs: string;
  wearComment: string;
}

export interface RunningEngine {
  runningEngineId?: number;
  reportId: number;
  engineNotStart: boolean;
  comment: string;
  engineVideo: string;
  battery: boolean;
  lightingEngineering: boolean;
  audioSystem: boolean;
  heatedSteeringWheel: boolean;
  soundSignal: boolean;
  seatMassage: boolean;
  windshieldWashers: boolean;
  seatHeating: boolean;
  windscreenWipers: boolean;
  windowLifters: boolean;
  electricSunroof: boolean;
  electricSteeringWheel: boolean;
  electricSeats: boolean;
  electricPanorama: boolean;
  heatedWindshield: boolean;
  electricTrunkDrive: boolean;
  electricSystemComment: string;
  gearboxSwitching: boolean;
  engineOperation: boolean;
  interiorHeater: boolean;
  powerSteering: boolean;
  airConditioner: boolean;
  mechanicalSystemComment: string;
}

export interface Dashboard {
  dashboardId?: number;
  reportId: number;
  abs: boolean;
  airbag: boolean;
  checkEngine: boolean;
  battery: boolean;
  tirePressure: boolean;
  oilPressure: boolean;
  controlLightComment: string;
  electronicDiagnostics: boolean;
  diagnosticsResult: string;
  diagnosticsFile?: string;
  mileageOnDashboard?: string;
  mileageInTheEngineBlock?: string;
  mileageInTheGearbox?: string;
  mileageInAdditionalBlocks?: string;
  isNoMileage?: boolean;
  totalComment: string;
}

export interface TestDrive {
  testDriveId?: number;
  reportId: number;
  testDrive: boolean;
  suspension: boolean;
  engine: boolean;
  transmission: boolean;
  steering: boolean;
  brakeSystem: boolean;
  parkingBrake: boolean;
  exhaustSystem: boolean;
  comment: string;
}