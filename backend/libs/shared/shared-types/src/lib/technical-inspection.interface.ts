export interface StoppedEngine {
  id?: number;
  carDismantled: boolean;
  engineOilLevel: boolean;
  gearboxOilLevel: boolean;
  gurLiquidLevel: boolean;
  coolantLevel: boolean;
  condition: boolean;
  dvs: boolean;
  kpp: boolean;
  gur: boolean;
  dispensingMechanism: boolean;
  shockAbsorbers: boolean;
  frontAxle: boolean;
  rearAxle: boolean;
  comment: string;
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