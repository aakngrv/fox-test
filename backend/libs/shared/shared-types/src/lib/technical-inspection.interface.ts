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
  brakePads: string;
  wearComment: string;
  isFogging: boolean;
  addElementStop?: AddElementStop[];
}

export interface AddElementStop {
  addElementStopId?: number;
  stoppedEngineId: number;
  name: string;
  fogging: string[];
  photo: string[];
  comment: string;
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
  electricMirrors: boolean;
}

export interface Dashboard {
  dashboardId?: number;
  reportId: number;
  noErrors: boolean;
  selectError: string[];
  diagnosticsFile?: string[];
  diagnosticsResult: string;
  mileageOnDashboard?: string;
  mileageInTheEngineBlock?: string;
  mileageInTheGearbox?: string;
  mileageInAdditionalBlocks?: string;
  isNoMileage?: boolean;
  totalComment: string;
  addElementDash?: AddElementDash[];
}

export interface AddElementDash {
  addElementDashId?: number;
  dashboardId: number;
  name: string;
}

export interface TestDrive {
  testDriveId?: number;
  reportId: number;
  allSystemOk: boolean;
  malfunctions: string[];
  addElementTest?: AddElementTest[];
}

export interface AddElementTest {
  addElementTestId?: number;
  testDriveId: number;
  name: string;
}