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
  id?: number;
  checkEngine: boolean;
  oilPressure: boolean;
  airbag: boolean;
  mileageOnDashboard: string;
  mileageInTheEngineBlock: string;
  mileageInTheGearbox: string;
  mileageInAdditionalBlocks: string;
  comment: string;
}

export interface TestDrive {
  id?: number;
  testDrive: boolean;
  engine: boolean;
  transmission: boolean;
  suspension: boolean;
  brakeSystem: boolean;
  parkingBrake: boolean;
  electronicDiagnostics: boolean;
  diagnosticsFile: string;
  diagnosticResults: string;
  comment: string;
}