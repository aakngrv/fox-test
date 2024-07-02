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
  allSystemOkElectric: boolean;
  electricalMalfunction: string[];
  allSystemOkMechanical: boolean;
  mechanicalMalfunction: string[];
  addElementElectrical?: AddElementElectrical[];
  addElementMechanical?: AddElementMechanical[];
}

export interface AddElementElectrical {
  addElementElectricalId?: number;
  runningEngineId: number;
  name: string;
  isCheck: boolean;
  comment: string;
}

export interface AddElementMechanical {
  addElementMechanicalId?: number;
  runningEngineId: number;
  name: string;
  isCheck: boolean;
  comment: string;
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
  isCheck: boolean;
  comment: string;
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