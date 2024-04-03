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
  id?: number;
  dvsWontStart: boolean;
  totalComment: string;
  engineVideo: string;
  enginePhoto: string;
  engineFile: string;
  seatHeating: boolean;
  audioSystem: boolean;
  battery: boolean;
  lightingEngineering: boolean;
  steering: boolean;
  gearshift: boolean;
  engineOperation: boolean;
  powerSteering: boolean;
  airConditioner: boolean;
  comment: string;
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