export interface ComplectationReview  {
  id?: number;
  complectationName: string;
  highBeamControlSystem: boolean;
  adaptiveLightingSystem: boolean;
  automaticHeadlightRangeControl: boolean;
  fogLights: boolean;
  headlightWasher: boolean;
  lights: string;
  rainSensor: boolean;
  lightSensor: boolean;
  electricalHeating: string;
  comment: string;
}

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

export interface ComplectationProtection {
  id?: number;
  interiorIntrusionSensor: boolean;
  centralLocking: boolean;
  immobilizer: boolean;
  signaling: string;
}

export interface ComplectationMultimedia {
  id?: number;
  bluetooth: boolean;
  cd: boolean;
  usb: boolean;
  aux: boolean;
  dvd: boolean;
  tv: boolean;
  subwoofer: boolean;
  audioSystem: string;
  multimediaSystemForRearPassengers: boolean;
  voiceControl: boolean;
  navigationSystem: boolean;
  socket220V: boolean;
  socket12V: boolean;
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

export interface ComplectationComfort {
  id?: number;
  remoteEngineStart: boolean;
  engineStartButton: boolean;
  onBoardComputer: boolean;
  camera: string;
  airConditioner: string;
  cruiseControl: string;
  steeringWheelAdjustment: string;
  parkingAssistanceSystem: string;
  powerSteering: string;
  electricLifts: string;
  programmableStartingHeater : boolean;
  gearshiftPaddles: boolean;
  handsFreeTrunkOpening: boolean;
  electricTrunkLid: boolean;
  electronicDashboard: boolean;
  adjustablePedalAssembly: boolean;
  multifunctionSteeringWheel: boolean;
  keylessEntrySystem: boolean;
  electrofoldingOfMirrors: boolean;
  powerMirrors: boolean;
  startStopSystem: boolean;
}

export interface ComplectationSafety {
  id?: number;
  abs: boolean;
  esp: boolean;
  auxiliarySystems: string;
  airbags: string;
  isofix: string;
  rearDoorLock: boolean;
  tirePressureSensor: boolean;
  armoredBody: boolean;
  eraGlonass: boolean;
}

export interface ComplectationOther {
  id?: number;
  suspension: string;
  numberOfKeys: string;
  gasEquipment: boolean;
  motoristSet: boolean;
  spareWheel: boolean;
  airSuspension: boolean;
  crankcaseProtection: boolean;
  tool: boolean;
  autorun: boolean;
  hitch: boolean;
}

