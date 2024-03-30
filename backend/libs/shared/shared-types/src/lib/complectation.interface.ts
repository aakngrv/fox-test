export interface ComplectationBody {
  complectationBodyId?: number;
  reportId?: number;
  roofRails: boolean;
  bodyStickers: boolean;
  airbrushing: boolean;
  bodyTuning: boolean;
  bodyInFilm: boolean;
}

export interface ComplectationWheels {
  complectationWheelsId?: number;
  reportId: number;
  isTiresIdentical: boolean;
  additionalTireSets: boolean;
  additionalSetsOfDisks: boolean;
  typeOfDisks: string;
  seasonality: string[];
  frontLeftBrand: string;
  backLeftBrand: string;
  frontRightBrand: string;
  backRightBrand: string;
  frontLeftModel: string;
  backLeftModel: string;
  frontRightModel: string;
  backRightModel: string;
  frontLeftIssueDate: string;
  backLeftIssueDate: string;
  frontRightIssueDate: string;
  backRightIssueDate: string;
  frontLeftOptions: string;
  backLeftOptions: string;
  frontRightOptions: string;
  backRightOptions: string;
  frontLeftWear: string;
  backLeftWear: string;
  frontRightWear: string;
  backRightWear: string;
}

export interface ComplectationSalon {
  complectationSalonId?: number;
  reportId: number;
  luke: boolean;
  seatCovers: boolean;
  panoramicView: boolean;
  thirdRowOfSeats: boolean;
  tintedGlass: boolean;
  steeringWheelHeating: boolean;
  leatherTrimmedGearshiftLever: boolean;
  sportsFrontSeats: boolean;
  steeringWheelLeatherTrim: boolean;
  foldingRearSeat: boolean;
  frontCenterArmrest: boolean;
  interiorMaterial: string;
  heatedSeats: string[];
  seatHeightAdjustment: string;
  electricallyAdjustableSeats: string[];
  seatPositionMemory: string;
  seatVentilation: string[];
  seatMassage: string[];
}

export interface ComplectationHeadlights {
  complectationHeadlightsId?: number;
  reportId: number;
  lightSensor: boolean;
  rainSensor: boolean;
  headlightWasher: boolean;
  fogLights: boolean;
  automaticHeadlightLeveling: boolean;
  adaptivLlightingSystem: boolean;
  highBeamControlSystem: boolean;
  headlights: string;
}

export interface ComplectationMultimedia {
  complectationMultimediaId?: number;
  reportId: number;
  cd: boolean;
  tv: boolean;
  usb: boolean;
  aux: boolean;
  dvd: boolean;
  cassette: boolean;
  carPlay: boolean;
  bluetooth: boolean;
  subwoofer: boolean;
  voiceControl: boolean;
  navigationSystem: boolean;
  multimediaSystemForRearPassengers: boolean;
}

export interface ComplectationComfort {
  complectationComfortId?: number;
  reportId: number;
  startStopSystem: boolean;
  onBoardComputer: boolean;
  electricMirrors: boolean;
  preheater: boolean;
  engineStartButton: boolean;
  keylessEntrySystem: boolean;
  handsFreeTrunkOpening: boolean;
  electrofoldingOfMirrors: boolean;
  multifunctionSteeringWheel: boolean;
  touchControlPanel: boolean;
  gearshiftPaddles: boolean;
  adjustablePedalAssembly: boolean;
  electronicDashboard: boolean;
  remoteEngineStart: boolean;
  electricTrunkLid: boolean;
  camera: string[];
  suspension: string[];
  airConditioner: string;
  powerSteering: string;
  cruiseControl: string;
  electricHeating: string[];
  steeringWheelAdjustment: string[];
  parkingAssistanceSystem: string[];
  electricLifts: string[];
}

export interface ComplectationSafety {
  complectationSafetyId?: number;
  reportId: number;
  eraGlonass: boolean;
  locking: boolean;
  armoredBody: boolean;
  airbags: string[];
  isofix: string[];
  auxiliarySystems: string[];
}

export interface ComplectationProtection {
  complectationProtectionId?: number;
  reportId: number;
  label: boolean;
  immobilizer: boolean;
  centralLocking: boolean;
  authorsSecuritySystem: boolean;
  interiorIntrusionSensor: boolean;
  signaling: string;
}

export interface ComplectationOther {
  complectationOtherId?: number;
  reportId: number;
  towBar: boolean;
  winch: boolean;
  airbox: boolean;
  socket12v: boolean;
  socket220v: boolean;
  crankcaseProtection: boolean;
  transverseArches: boolean;
  gasEquipment: boolean;
  numberOfKeys: string;
  spareWheel: string;
  motoristSet: string[];
}

