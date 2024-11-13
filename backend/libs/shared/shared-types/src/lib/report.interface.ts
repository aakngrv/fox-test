import { 
  LeftSideDamage,
  BackSideDamage,
  TrunkDamage,
  RightSideDamage,
  RoofDamage,
  GlassDamage,
  DiscDamage,
  InteriorDamage,
  ExteriorPhoto,
  InteriorPhoto,
  RoundViewVideo
} from "./body-and-interior.interface";

import  { 
  StoppedEngine,
  RunningEngine,
  Dashboard,
  TestDrive,
} from "./technical-inspection.interface";

import {
  ExpertOpinion,
} from "./expert-opinion.interface";

export interface Report {
  reportId?: number;
  userId: number;
  userEmail: string;
  title: string;

  sellerDetailsRefusalOfInspection: boolean;
  sellerDetailsLinkToAd: string[];
  sellerDetailsName: string;
  sellerDetailsPhone: string;
  sellerDetailsCarCost: string;
  sellerDetailsRole: string;
  sellerDetailsComment: string;



  vinNumber: string;
  vinBodyNumberExpertConfirm: boolean;
  vinBodyNumberNumberState: boolean[];
  vinBodyNumberPhoto: string[];
  vinBodyNumberComment: string;
  frameNumber: string;
  frameNumberExpertConfirm: boolean;
  frameNumberNumberState: boolean[];
  frameNumberPhoto: string[];
  frameNumberComment: string;
  stateNumberAbsent: boolean;
  stateNumberForeign: boolean;
  stateNumberStateNumber: string;
  stateNumberComment: string;
  tCPAbsent: boolean;
  tCPType: string;
  tCPPhoto: string[];
  tCPNumberOfOwners: string;
  tCPComment: string;
  sTSAbsent: boolean;
  sTSPhoto: string[];
  sTSComment: string;
  carDataCarBrand: string;
  carDataCarModel: string;
  carDataManufactureYear: string;
  carDataColor: string;
  carDataBodyType: string;
  carDataEnginesType: string;
  carDataGearboxType: string;
  carDataDriveUnit: string;
  carDataSteeringWheelLocation: string;
  engineNumber: string;
  engineNumberExpertConfirm: boolean;
  engineNumberNumberState: boolean[];
  engineNumberPhoto: string[];
  engineNumberComment: string;
  carDataEngineCapacity: string;
  carDataPower: string;
  carDataServiceBook: string;
  additionalDocumentsComment: string;
  additionalDocumentsPhoto: string[];

  locationCountry: string;
  locationRegion: string;
  locationCity: string;
  locationAddress: string;
  locationComment: string;

  complectationBodyRoofRails: boolean;
  complectationBodyBodyStickers: boolean;
  complectationBodyAirbrushing: boolean;
  complectationBodyBodyTuning: boolean;
  complectationBodyBodyInFilm: boolean;

  complectationWheelsIsTiresIdentical: boolean;
  complectationWheelsAdditionalTireSets: boolean;
  complectationWheelsAdditionalSetsOfDisks: boolean;
  complectationWheelsTypeOfDisks: string;
  complectationWheelsSeasonality: string;
  complectationWheelsFrontLeftBrand: string;
  complectationWheelsBackLeftBrand: string;
  complectationWheelsFrontRightBrand: string;
  complectationWheelsBackRightBrand: string;
  complectationWheelsFrontLeftModel: string;
  complectationWheelsBackLeftModel: string;
  complectationWheelsFrontRightModel: string;
  complectationWheelsBackRightModel: string;
  complectationWheelsFrontLeftIssueDate: string;
  complectationWheelsBackLeftIssueDate: string;
  complectationWheelsFrontRightIssueDate: string;
  complectationWheelsBackRightIssueDate: string;
  complectationWheelsFrontLeftOptions: string[];
  complectationWheelsBackLeftOptions: string[];
  complectationWheelsFrontRightOptions: string[];
  complectationWheelsBackRightOptions: string[];
  complectationWheelsFrontLeftWear: string;
  complectationWheelsBackLeftWear: string;
  complectationWheelsFrontRightWear: string;
  complectationWheelsBackRightWear: string;
  complectationWheelsAdditionalTiresSeasonality: string[];
  complectationWheelsAdditionalDisksType: string;

  complectationSalonLuke: boolean;
  complectationSalonSeatCovers: boolean;
  complectationSalonPanoramicView: boolean;
  complectationSalonThirdRowOfSeats: boolean;
  complectationSalonTintedGlass: boolean;
  complectationSalonSteeringWheelHeating: boolean;
  complectationSalonLeatherTrimmedGearshiftLever: boolean;
  complectationSalonSportsFrontSeats: boolean;
  complectationSalonSteeringWheelLeatherTrim: boolean;
  complectationSalonFoldingRearSeat: boolean;
  complectationSalonFrontCenterArmrest: boolean;
  complectationSalonInteriorMaterial: string;
  complectationSalonHeatedSeats: string[];
  complectationSalonSeatHeightAdjustment: string;
  complectationSalonElectricallyAdjustableSeats: string[];
  complectationSalonSeatPositionMemory: string;
  complectationSalonSeatVentilation: string[];
  complectationSalonSeatMassage: string[];

  complectationHeadlightsLightSensor: boolean;
  complectationHeadlightsRainSensor: boolean;
  complectationHeadlightsHeadlightWasher: boolean;
  complectationHeadlightsFogLights: boolean;
  complectationHeadlightsAutomaticHeadlightLeveling: boolean;
  complectationHeadlightsAdaptivLlightingSystem: boolean;
  complectationHeadlightsHighBeamControlSystem: boolean;
  complectationHeadlightsHeadlights: string;

  complectationMultimediaCd: boolean;
  complectationMultimediaTv: boolean;
  complectationMultimediaUsb: boolean;
  complectationMultimediaAux: boolean;
  complectationMultimediaDvd: boolean;
  complectationMultimediaCassette: boolean;
  complectationMultimediaCarPlay: boolean;
  complectationMultimediaBluetooth: boolean;
  complectationMultimediaSubwoofer: boolean;
  complectationMultimediaVoiceControl: boolean;
  complectationMultimediaNavigationSystem: boolean;
  complectationMultimediaMultimediaSystemForRearPassengers: boolean;

  complectationComfortStartStopSystem: boolean;
  complectationComfortOnBoardComputer: boolean;
  complectationComfortElectricMirrors: boolean;
  complectationComfortPreheater: boolean;
  complectationComfortEngineStartButton: boolean;
  complectationComfortKeylessEntrySystem: boolean;
  complectationComfortHandsFreeTrunkOpening: boolean;
  complectationComfortElectrofoldingOfMirrors: boolean;
  complectationComfortMultifunctionSteeringWheel: boolean;
  complectationComfortTouchControlPanel: boolean;
  complectationComfortGearshiftPaddles: boolean;
  complectationComfortAdjustablePedalAssembly: boolean;
  complectationComfortElectronicDashboard: boolean;
  complectationComfortRemoteEngineStart: boolean;
  complectationComfortElectricTrunkLid: boolean;
  complectationComfortCamera: string[];
  complectationComfortSuspension: string[];
  complectationComfortAirConditioner: string;
  complectationComfortPowerSteering: string;
  complectationComfortCruiseControl: string;
  complectationComfortElectricHeating: string[];
  complectationComfortSteeringWheelAdjustment: string[];
  complectationComfortParkingAssistanceSystem: string[];
  complectationComfortElectricLifts: string[];

  complectationSafetyEraGlonass: boolean;
  complectationSafetyLocking: boolean;
  complectationSafetyArmoredBody: boolean;
  complectationSafetyAirbags: string[];
  complectationSafetyIsofix: string[];
  complectationSafetyAuxiliarySystems: string[];

  complectationProtectionLabel: boolean;
  complectationProtectionImmobilizer: boolean;
  complectationProtectionCentralLocking: boolean;
  complectationProtectionAuthorsSecuritySystem: boolean;
  complectationProtectionInteriorIntrusionSensor: boolean;
  complectationProtectionSignaling: string;

  complectationOtherTowBar: boolean;
  complectationOtherWinch: boolean;
  complectationOtherAirbox: boolean;
  complectationOtherCrankcaseProtection: boolean;
  complectationOtherTransverseArches: boolean;
  complectationOtherGasEquipment: boolean;
  complectationOtherNumberOfKeys: string;
  complectationOtherSpareWheel: string;

  paintworkInspectionFactoryColor: boolean;
  paintworkInspectionBodyInFilm: boolean;
  paintworkInspectionRoof: string[];
  paintworkInspectionTrunkLid: string[];
  paintworkInspectionRightRearFender: string[];
  paintworkInspectionRightRearPillar: string[];
  paintworkInspectionRightRearDoor: string[];
  paintworkInspectionRightRearDoorOpening: string[];
  paintworkInspectionRightCenterPillar: string[];
  paintworkInspectionRightThreshold: string[];
  paintworkInspectionRightFrontDoor: string[];
  paintworkInspectionRightFrontDoorOpening: string[];
  paintworkInspectionRightFrontPillar: string[];
  paintworkInspectionRightFrontFender: string[];
  paintworkInspectionHood: string[];
  paintworkInspectionLeftFrontFender: string[];
  paintworkInspectionLeftFrontPillar: string[];
  paintworkInspectionLeftFrontDoor: string[];
  paintworkInspectionLeftFrontDoorOpening: string[];
  paintworkInspectionLeftCenterPillar: string[];
  paintworkInspectionLeftThreshold: string[];
  paintworkInspectionLeftRearDoor: string[];
  paintworkInspectionLeftRearDoorOpening: string[];
  paintworkInspectionLeftRearPillar: string[];
  paintworkInspectionLeftRearFender: string[];
  paintworkInspectionAddNameOne: string;
  paintworkInspectionAddInfoOne: string[];
  paintworkInspectionAddNameTwo: string;
  paintworkInspectionAddInfTwo: string[];
  paintworkInspectionAddNameThree: string;
  paintworkInspectionAddInfoThree: string[];

  engineCompartmentDamageWithoutDamage: boolean;
  engineCompartmentDamageLeftSideMember: string[];
  engineCompartmentDamageLeftGlass: string[];
  engineCompartmentDamageRightSideMember: string[];
  engineCompartmentDamageRightGlass: string[];
  engineCompartmentDamageHoodHinges: string[]; 
  engineCompartmentDamageTelevisor: string[];
  engineCompartmentDamageMotorShield: string[];
  engineCompartmentDamageAddNameOne: string;
  engineCompartmentDamageAddInfoOne: string[];
  engineCompartmentDamageAddNameTwo: string;
  engineCompartmentDamageAddInfTwo: string[];
  engineCompartmentDamageAddNameThree: string;
  engineCompartmentDamageAddInfoThree: string[];

  frontSideDamageWithoutDamage: boolean;
  frontSideDamageFogLights: string[]; 
  frontSideDamageRadiatorGrille: string[]; 
  frontSideDamageFrontBumper: string[]; 
  frontSideDamageRightHeadlight: string[]; 
  frontSideDamageLeftHeadlight: string[]; 
  frontSideDamageHood: string[]; 
  frontSideDamageAddNameOne: string;
  frontSideDamageAddInfoOne: string[];
  frontSideDamageAddNameTwo: string;
  frontSideDamageAddInfTwo: string[];
  frontSideDamageAddNameThree: string;
  frontSideDamageAddInfoThree: string[];

  leftSideDamage: LeftSideDamage[];
  backSideDamage: BackSideDamage[];
  trunkDamage: TrunkDamage[];
  rightSideDamage: RightSideDamage[];
  roofDamage: RoofDamage[];
  glassDamage: GlassDamage[];
  discDamage: DiscDamage[];
  interiorDamage: InteriorDamage[];
  exteriorPhoto: ExteriorPhoto[];
  interiorPhoto: InteriorPhoto[];
  roundViewVideo: RoundViewVideo[];
  stoppedEngine: StoppedEngine[];
  runningEngine: RunningEngine[];
  dashboard: Dashboard[];
  testDrive: TestDrive[];
  expertOpinion: ExpertOpinion[];
  createdAt: Date;
  publishAt: Date;
}