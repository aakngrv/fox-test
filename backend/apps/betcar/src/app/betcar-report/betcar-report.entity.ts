import { Entity } from '@backend/util/util-types';
import {
  Report, 
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
  RoundViewVideo,
  StoppedEngine,
  RunningEngine,
  Dashboard,
  TestDrive,
  ExpertOpinion,
 } from '@backend/shared/shared-types';


export class BetcarReportEntity implements Entity<BetcarReportEntity>, Report {

  public reportId?: number;
  public userId: number;
  public title: string;
  public userEmail: string;
  public vinNumber: string;
  public sellerDetailsRefusalOfInspection: boolean;
  public sellerDetailsLinkToAd: string[];
  public sellerDetailsName: string;
  public sellerDetailsPhone: string;
  public sellerDetailsCarCost: string;
  public sellerDetailsRole: string;
  public sellerDetailsComment: string;
  public vinBodyNumberExpertConfirm: boolean;
  public vinBodyNumberNumberState: boolean[];
  public vinBodyNumberPhoto: string[];
  public vinBodyNumberComment: string;
  public frameNumber: string;
  public frameNumberExpertConfirm: boolean;
  public frameNumberNumberState: boolean[];
  public frameNumberPhoto: string[];
  public frameNumberComment: string;
  public stateNumberAbsent: boolean;
  public stateNumberForeign: boolean;
  public stateNumberStateNumber: string;
  public stateNumberComment: string;
  public tCPAbsent: boolean;
  public tCPType: string;
  public tCPPhoto: string[];
  public tCPNumberOfOwners: string;
  public tCPComment: string;
  public sTSAbsent: boolean;
  public sTSPhoto: string[];
  public sTSComment: string;
  public carDataCarBrand: string;
  public carDataCarModel: string;
  public carDataManufactureYear: string;
  public carDataColor: string;
  public carDataBodyType: string;
  public carDataEnginesType: string;
  public carDataGearboxType: string;
  public carDataDriveUnit: string;
  public carDataSteeringWheelLocation: string;
  public engineNumber: string;
  public engineNumberExpertConfirm: boolean;
  public engineNumberNumberState: boolean[];
  public engineNumberPhoto: string[];
  public engineNumberComment: string;
  public carDataEngineCapacity: string;
  public carDataPower: string;
  public carDataServiceBook: string;
  public additionalDocumentsComment: string;
  public additionalDocumentsPhoto: string[];
  public locationCountry: string;
  public locationRegion: string;
  public locationCity: string;
  public locationAddress: string;
  public locationComment: string;
  public complectationBodyRoofRails: boolean;
  public complectationBodyBodyStickers: boolean;
  public complectationBodyAirbrushing: boolean;
  public complectationBodyBodyTuning: boolean;
  public complectationBodyBodyInFilm: boolean;
  public complectationWheelsIsTiresIdentical: boolean;
  public complectationWheelsAdditionalTireSets: boolean;
  public complectationWheelsAdditionalSetsOfDisks: boolean;
  public complectationWheelsTypeOfDisks: string;
  public complectationWheelsSeasonality: string;
  public complectationWheelsFrontLeftBrand: string;
  public complectationWheelsBackLeftBrand: string;
  public complectationWheelsFrontRightBrand: string;
  public complectationWheelsBackRightBrand: string;
  public complectationWheelsFrontLeftModel: string;
  public complectationWheelsBackLeftModel: string;
  public complectationWheelsFrontRightModel: string;
  public complectationWheelsBackRightModel: string;
  public complectationWheelsFrontLeftIssueDate: string;
  public complectationWheelsBackLeftIssueDate: string;
  public complectationWheelsFrontRightIssueDate: string;
  public complectationWheelsBackRightIssueDate: string;
  public complectationWheelsFrontLeftOptions: string[];
  public complectationWheelsBackLeftOptions: string[];
  public complectationWheelsFrontRightOptions: string[];
  public complectationWheelsBackRightOptions: string[];
  public complectationWheelsFrontLeftWear: string;
  public complectationWheelsBackLeftWear: string;
  public complectationWheelsFrontRightWear: string;
  public complectationWheelsBackRightWear: string;
  public complectationWheelsAdditionalTiresSeasonality: string[];
  public complectationWheelsAdditionalDisksType: string;
  public complectationSalonLuke: boolean;
  public complectationSalonSeatCovers: boolean;
  public complectationSalonPanoramicView: boolean;
  public complectationSalonThirdRowOfSeats: boolean;
  public complectationSalonTintedGlass: boolean;
  public complectationSalonSteeringWheelHeating: boolean;
  public complectationSalonLeatherTrimmedGearshiftLever: boolean;
  public complectationSalonSportsFrontSeats: boolean;
  public complectationSalonSteeringWheelLeatherTrim: boolean;
  public complectationSalonFoldingRearSeat: boolean;
  public complectationSalonFrontCenterArmrest: boolean;
  public complectationSalonInteriorMaterial: string;
  public complectationSalonHeatedSeats: string[];
  public complectationSalonSeatHeightAdjustment: string;
  public complectationSalonElectricallyAdjustableSeats: string[];
  public complectationSalonSeatPositionMemory: string;
  public complectationSalonSeatVentilation: string[];
  public complectationSalonSeatMassage: string[];
  public complectationHeadlightsLightSensor: boolean;
  public complectationHeadlightsRainSensor: boolean;
  public complectationHeadlightsHeadlightWasher: boolean;
  public complectationHeadlightsFogLights: boolean;
  public complectationHeadlightsAutomaticHeadlightLeveling: boolean;
  public complectationHeadlightsAdaptivLlightingSystem: boolean;
  public complectationHeadlightsHighBeamControlSystem: boolean;
  public complectationHeadlightsHeadlights: string;

  public complectationMultimediaCd: boolean;
  public complectationMultimediaTv: boolean;
  public complectationMultimediaUsb: boolean;
  public complectationMultimediaAux: boolean;
  public complectationMultimediaDvd: boolean;
  public complectationMultimediaCassette: boolean;
  public complectationMultimediaCarPlay: boolean;
  public complectationMultimediaBluetooth: boolean;
  public complectationMultimediaSubwoofer: boolean;
  public complectationMultimediaVoiceControl: boolean;
  public complectationMultimediaNavigationSystem: boolean;
  public complectationMultimediaMultimediaSystemForRearPassengers: boolean;

  public complectationComfortStartStopSystem: boolean;
  public complectationComfortOnBoardComputer: boolean;
  public complectationComfortElectricMirrors: boolean;
  public complectationComfortPreheater: boolean;
  public complectationComfortEngineStartButton: boolean;
  public complectationComfortKeylessEntrySystem: boolean;
  public complectationComfortHandsFreeTrunkOpening: boolean;
  public complectationComfortElectrofoldingOfMirrors: boolean;
  public complectationComfortMultifunctionSteeringWheel: boolean;
  public complectationComfortTouchControlPanel: boolean;
  public complectationComfortGearshiftPaddles: boolean;
  public complectationComfortAdjustablePedalAssembly: boolean;
  public complectationComfortElectronicDashboard: boolean;
  public complectationComfortRemoteEngineStart: boolean;
  public complectationComfortElectricTrunkLid: boolean;
  public complectationComfortCamera: string[];
  public complectationComfortSuspension: string[];
  public complectationComfortAirConditioner: string;
  public complectationComfortPowerSteering: string;
  public complectationComfortCruiseControl: string;
  public complectationComfortElectricHeating: string[];
  public complectationComfortSteeringWheelAdjustment: string[];
  public complectationComfortParkingAssistanceSystem: string[];
  public complectationComfortElectricLifts: string[];

  public complectationSafetyEraGlonass: boolean;
  public complectationSafetyLocking: boolean;
  public complectationSafetyArmoredBody: boolean;
  public complectationSafetyAirbags: string[];
  public complectationSafetyIsofix: string[];
  public complectationSafetyAuxiliarySystems: string[];

  public complectationProtectionLabel: boolean;
  public complectationProtectionImmobilizer: boolean;
  public complectationProtectionCentralLocking: boolean;
  public complectationProtectionAuthorsSecuritySystem: boolean;
  public complectationProtectionInteriorIntrusionSensor: boolean;
  public complectationProtectionSignaling: string;

  public complectationOtherTowBar: boolean;
  public complectationOtherWinch: boolean;
  public complectationOtherAirbox: boolean;
  public complectationOtherCrankcaseProtection: boolean;
  public complectationOtherTransverseArches: boolean;
  public complectationOtherGasEquipment: boolean;
  public complectationOtherNumberOfKeys: string;
  public complectationOtherSpareWheel: string;

  public paintworkInspectionFactoryColor: boolean;
  public paintworkInspectionBodyInFilm: boolean;
  public paintworkInspectionRoof: string[];
  public paintworkInspectionTrunkLid: string[];
  public paintworkInspectionRightRearFender: string[];
  public paintworkInspectionRightRearPillar: string[];
  public paintworkInspectionRightRearDoor: string[];
  public paintworkInspectionRightRearDoorOpening: string[];
  public paintworkInspectionRightCenterPillar: string[];
  public paintworkInspectionRightThreshold: string[];
  public paintworkInspectionRightFrontDoor: string[];
  public paintworkInspectionRightFrontDoorOpening: string[];
  public paintworkInspectionRightFrontPillar: string[];
  public paintworkInspectionRightFrontFender: string[];
  public paintworkInspectionHood: string[];
  public paintworkInspectionLeftFrontFender: string[];
  public paintworkInspectionLeftFrontPillar: string[];
  public paintworkInspectionLeftFrontDoor: string[];
  public paintworkInspectionLeftFrontDoorOpening: string[];
  public paintworkInspectionLeftCenterPillar: string[];
  public paintworkInspectionLeftThreshold: string[];
  public paintworkInspectionLeftRearDoor: string[];
  public paintworkInspectionLeftRearDoorOpening: string[];
  public paintworkInspectionLeftRearPillar: string[];
  public paintworkInspectionLeftRearFender: string[];
  public paintworkInspectionAddNameOne: string;
  public paintworkInspectionAddInfoOne: string[];
  public paintworkInspectionAddNameTwo: string;
  public paintworkInspectionAddInfTwo: string[];
  public paintworkInspectionAddNameThree: string;
  public paintworkInspectionAddInfoThree: string[];

  public engineCompartmentDamageWithoutDamage: boolean;
  public engineCompartmentDamageLeftSideMember: string[];
  public engineCompartmentDamageLeftGlass: string[];
  public engineCompartmentDamageRightSideMember: string[];
  public engineCompartmentDamageRightGlass: string[];
  public engineCompartmentDamageHoodHinges: string[]; 
  public engineCompartmentDamageTelevisor: string[];
  public engineCompartmentDamageMotorShield: string[];
  public engineCompartmentDamageAddNameOne: string;
  public engineCompartmentDamageAddInfoOne: string[];
  public engineCompartmentDamageAddNameTwo: string;
  public engineCompartmentDamageAddInfTwo: string[];
  public engineCompartmentDamageAddNameThree: string;
  public engineCompartmentDamageAddInfoThree: string[];

  public frontSideDamageWithoutDamage: boolean;
  public frontSideDamageFogLights: string[]; 
  public frontSideDamageRadiatorGrille: string[]; 
  public frontSideDamageFrontBumper: string[]; 
  public frontSideDamageRightHeadlight: string[]; 
  public frontSideDamageLeftHeadlight: string[]; 
  public frontSideDamageHood: string[]; 
  public frontSideDamageAddNameOne: string;
  public frontSideDamageAddInfoOne: string[];
  public frontSideDamageAddNameTwo: string;
  public frontSideDamageAddInfTwo: string[];
  public frontSideDamageAddNameThree: string;
  public frontSideDamageAddInfoThree: string[];

  public leftSideDamage: LeftSideDamage[];
  public backSideDamage: BackSideDamage[];
  public trunkDamage: TrunkDamage[];
  public rightSideDamage: RightSideDamage[];
  public roofDamage: RoofDamage[];
  public glassDamage: GlassDamage[];
  public discDamage: DiscDamage[];
  public interiorDamage: InteriorDamage[];
  public exteriorPhoto: ExteriorPhoto[];
  public interiorPhoto: InteriorPhoto[];
  public roundViewVideo: RoundViewVideo[];
  public stoppedEngine: StoppedEngine[];
  public runningEngine: RunningEngine[];
  public dashboard: Dashboard[];
  public testDrive: TestDrive[];
  public expertOpinion: ExpertOpinion[];
  public createdAt: Date;
  public publishAt: Date;

  constructor(report: Report) {
    this.fillEntity(report);
  }

  public fillEntity(entity: Report): void {
    this.reportId = entity.reportId;
    this.userId = entity.userId;
    this.title = entity.title;
    this.userEmail = entity.userEmail;
    this.sellerDetailsRefusalOfInspection = entity.sellerDetailsRefusalOfInspection;
    this.sellerDetailsLinkToAd = entity.sellerDetailsLinkToAd;
    this.sellerDetailsName = entity.sellerDetailsName;
    this.sellerDetailsPhone = entity.sellerDetailsPhone;
    this.sellerDetailsCarCost = entity.sellerDetailsCarCost;
    this.sellerDetailsRole = entity.sellerDetailsRole;
    this.sellerDetailsComment = entity.sellerDetailsComment;
    this.vinNumber = entity.vinNumber;
    this.vinBodyNumberExpertConfirm = entity.vinBodyNumberExpertConfirm;
    this.vinBodyNumberNumberState = entity.vinBodyNumberNumberState;
    this.vinBodyNumberPhoto = entity.vinBodyNumberPhoto;
    this.vinBodyNumberComment = entity.sellerDetailsComment;
    this.frameNumber = entity.frameNumber;
    this.frameNumberExpertConfirm = entity.frameNumberExpertConfirm;
    this.frameNumberNumberState = entity.frameNumberNumberState;
    this.frameNumberPhoto = entity.frameNumberPhoto;
    this.frameNumberComment = entity.frameNumberComment;
    this.stateNumberAbsent = entity.stateNumberAbsent;
    this.stateNumberForeign = entity.stateNumberForeign;
    this.stateNumberStateNumber = entity.stateNumberStateNumber;
    this.stateNumberComment = entity.stateNumberComment;
    this.tCPAbsent = entity.tCPAbsent;
    this.tCPType = entity.tCPType;
    this.tCPPhoto = entity.tCPPhoto;
    this.tCPNumberOfOwners = entity.tCPNumberOfOwners;
    this.tCPComment = entity.tCPComment;
    this.sTSAbsent = entity.sTSAbsent;
    this.sTSPhoto = entity.sTSPhoto;
    this.sTSComment = entity.sTSComment;
    this.carDataCarBrand = entity.carDataCarBrand;
    this.carDataCarModel = entity.carDataCarModel;
    this.carDataManufactureYear = entity.carDataManufactureYear;
    this.carDataColor = entity.carDataColor;
    this.carDataBodyType = entity.carDataBodyType;
    this.carDataEnginesType = entity.carDataEnginesType;
    this.carDataGearboxType = entity.carDataGearboxType;
    this.carDataDriveUnit = entity.carDataDriveUnit;
    this.carDataSteeringWheelLocation = entity.carDataSteeringWheelLocation;
    this.engineNumber = entity.engineNumber;
    this.engineNumberExpertConfirm = entity.engineNumberExpertConfirm;
    this.engineNumberNumberState = entity.engineNumberNumberState;
    this.engineNumberPhoto = entity.engineNumberPhoto;
    this.engineNumberComment = entity.engineNumberComment;
    this.carDataEngineCapacity = entity.carDataEngineCapacity;
    this.carDataPower = entity.carDataPower;
    this.carDataServiceBook = entity.carDataServiceBook;
    this.additionalDocumentsComment = entity.additionalDocumentsComment;
    this.additionalDocumentsPhoto = entity.additionalDocumentsPhoto;
    this.locationCountry = entity.locationCountry;
    this.locationRegion = entity.locationRegion;
    this.locationCity = entity.locationCity;
    this.locationAddress = entity.locationAddress;
    this.locationComment = entity.locationComment;
    this.complectationBodyRoofRails = entity.complectationBodyRoofRails;
    this.complectationBodyBodyStickers = entity.complectationBodyBodyStickers;
    this.complectationBodyAirbrushing = entity.complectationBodyAirbrushing;
    this.complectationBodyBodyTuning = entity.complectationBodyBodyTuning;
    this.complectationBodyBodyInFilm = entity.complectationBodyBodyInFilm;
    this.complectationWheelsIsTiresIdentical = entity.complectationWheelsIsTiresIdentical;
    this.complectationWheelsAdditionalTireSets = entity.complectationWheelsAdditionalTireSets;
    this.complectationWheelsAdditionalSetsOfDisks = entity.complectationWheelsAdditionalTireSets;
    this.complectationWheelsTypeOfDisks = entity.complectationWheelsTypeOfDisks;
    this.complectationWheelsSeasonality = entity.complectationWheelsSeasonality;
    this.complectationWheelsFrontLeftBrand = entity.complectationWheelsFrontLeftBrand;
    this.complectationWheelsBackLeftBrand = entity.complectationWheelsBackLeftBrand;
    this.complectationWheelsFrontRightBrand = entity.complectationWheelsFrontRightBrand;
    this.complectationWheelsBackRightBrand = entity.complectationWheelsBackRightBrand;
    this.complectationWheelsFrontLeftModel = entity.complectationWheelsFrontLeftModel;
    this.complectationWheelsBackLeftModel = entity.complectationWheelsBackLeftModel;
    this.complectationWheelsFrontRightModel = entity.complectationWheelsFrontRightModel;
    this.complectationWheelsBackRightModel = entity.complectationWheelsBackRightModel;
    this.complectationWheelsFrontLeftIssueDate = entity.complectationWheelsFrontLeftIssueDate;
    this.complectationWheelsBackLeftIssueDate = entity.complectationWheelsBackLeftIssueDate;
    this.complectationWheelsFrontRightIssueDate = entity.complectationWheelsFrontRightIssueDate;
    this.complectationWheelsBackRightIssueDate = entity.complectationWheelsBackRightIssueDate;
    this.complectationWheelsFrontLeftOptions = entity.complectationWheelsFrontLeftOptions;
    this.complectationWheelsBackLeftOptions = entity.complectationWheelsBackLeftOptions;
    this.complectationWheelsFrontRightOptions = entity.complectationWheelsFrontRightOptions;
    this.complectationWheelsBackRightOptions = entity.complectationWheelsBackRightOptions;
    this.complectationWheelsFrontLeftWear = entity.complectationWheelsFrontLeftWear;
    this.complectationWheelsBackLeftWear = entity.complectationWheelsBackLeftWear;
    this.complectationWheelsFrontRightWear = entity.complectationWheelsFrontRightWear;
    this.complectationWheelsBackRightWear = entity.complectationWheelsBackRightWear;
    this.complectationWheelsAdditionalTiresSeasonality = entity.complectationWheelsAdditionalTiresSeasonality;
    this.complectationWheelsAdditionalDisksType = entity.complectationWheelsAdditionalDisksType;
    this.complectationSalonLuke = entity.complectationSalonLuke;
    this.complectationSalonSeatCovers = entity.complectationSalonSeatCovers;
    this.complectationSalonPanoramicView = entity.complectationSalonPanoramicView;
    this.complectationSalonThirdRowOfSeats = entity.complectationSalonThirdRowOfSeats;
    this.complectationSalonTintedGlass = entity.complectationSalonTintedGlass;
    this.complectationSalonSteeringWheelHeating = entity.complectationSalonSteeringWheelHeating;
    this.complectationSalonLeatherTrimmedGearshiftLever = entity.complectationSalonLeatherTrimmedGearshiftLever;
    this.complectationSalonSportsFrontSeats = entity.complectationSalonSportsFrontSeats;
    this.complectationSalonSteeringWheelLeatherTrim = entity.complectationSalonSteeringWheelLeatherTrim;
    this.complectationSalonFoldingRearSeat = entity.complectationSalonFoldingRearSeat;
    this.complectationSalonFrontCenterArmrest = entity.complectationSalonFrontCenterArmrest;
    this.complectationSalonInteriorMaterial = entity.complectationSalonInteriorMaterial;
    this.complectationSalonHeatedSeats = entity.complectationSalonHeatedSeats;
    this.complectationSalonSeatHeightAdjustment = entity.complectationSalonSeatHeightAdjustment;
    this.complectationSalonElectricallyAdjustableSeats = entity.complectationSalonElectricallyAdjustableSeats;
    this.complectationSalonSeatPositionMemory = entity.complectationSalonSeatPositionMemory;
    this.complectationSalonSeatVentilation = entity.complectationSalonSeatVentilation;
    this.complectationSalonSeatMassage = entity.complectationSalonSeatMassage;
    this.complectationHeadlightsLightSensor = entity.complectationHeadlightsLightSensor;
    this.complectationHeadlightsRainSensor = entity.complectationHeadlightsRainSensor;
    this.complectationHeadlightsHeadlightWasher = entity.complectationHeadlightsHeadlightWasher;
    this.complectationHeadlightsFogLights = entity.complectationHeadlightsFogLights;
    this.complectationHeadlightsAutomaticHeadlightLeveling = entity.complectationHeadlightsAutomaticHeadlightLeveling;
    this.complectationHeadlightsAdaptivLlightingSystem = entity.complectationHeadlightsAdaptivLlightingSystem;
    this.complectationHeadlightsHighBeamControlSystem = entity.complectationHeadlightsHighBeamControlSystem;
    this.complectationHeadlightsHeadlights = entity.complectationHeadlightsHeadlights;

    this.complectationMultimediaCd = entity.complectationMultimediaCd;
    this.complectationMultimediaTv = entity.complectationMultimediaTv;
    this.complectationMultimediaUsb = entity.complectationMultimediaUsb;
    this.complectationMultimediaAux = entity.complectationMultimediaAux;
    this.complectationMultimediaDvd = entity.complectationMultimediaDvd;
    this.complectationMultimediaCassette = entity.complectationMultimediaCassette;
    this.complectationMultimediaCarPlay = entity.complectationMultimediaCarPlay;
    this.complectationMultimediaBluetooth = entity.complectationMultimediaBluetooth;
    this.complectationMultimediaSubwoofer = entity.complectationMultimediaSubwoofer;
    this.complectationMultimediaVoiceControl = entity.complectationMultimediaVoiceControl;
    this.complectationMultimediaNavigationSystem = entity.complectationMultimediaNavigationSystem;
    this.complectationMultimediaMultimediaSystemForRearPassengers = entity.complectationMultimediaMultimediaSystemForRearPassengers;

    this.complectationComfortStartStopSystem = entity.complectationComfortStartStopSystem;
    this.complectationComfortOnBoardComputer = entity.complectationComfortOnBoardComputer;
    this.complectationComfortElectricMirrors = entity.complectationComfortElectricMirrors;
    this.complectationComfortPreheater = entity.complectationComfortPreheater;
    this.complectationComfortEngineStartButton = entity.complectationComfortEngineStartButton;
    this.complectationComfortKeylessEntrySystem = entity.complectationComfortKeylessEntrySystem;
    this.complectationComfortHandsFreeTrunkOpening = entity.complectationComfortHandsFreeTrunkOpening;
    this.complectationComfortElectrofoldingOfMirrors = entity.complectationComfortElectrofoldingOfMirrors;
    this.complectationComfortMultifunctionSteeringWheel = entity.complectationComfortMultifunctionSteeringWheel;
    this.complectationComfortTouchControlPanel = entity.complectationComfortTouchControlPanel;
    this.complectationComfortGearshiftPaddles = entity.complectationComfortGearshiftPaddles;
    this.complectationComfortAdjustablePedalAssembly = entity.complectationComfortAdjustablePedalAssembly;
    this.complectationComfortElectronicDashboard = entity.complectationComfortElectronicDashboard;
    this.complectationComfortRemoteEngineStart = entity.complectationComfortRemoteEngineStart;
    this.complectationComfortElectricTrunkLid = entity.complectationComfortElectricTrunkLid;
    this.complectationComfortCamera = entity.complectationComfortCamera;
    this.complectationComfortSuspension = entity.complectationComfortSuspension;
    this.complectationComfortAirConditioner = entity.complectationComfortAirConditioner;
    this.complectationComfortPowerSteering = entity.complectationComfortPowerSteering;
    this. complectationComfortCruiseControl = entity.complectationComfortCruiseControl;
    this.complectationComfortElectricHeating = entity.complectationComfortElectricHeating;
    this. complectationComfortSteeringWheelAdjustment = entity.complectationComfortSteeringWheelAdjustment;
    this.complectationComfortParkingAssistanceSystem = entity.complectationComfortParkingAssistanceSystem;
    this.complectationComfortElectricLifts = entity.complectationComfortElectricLifts;

    this.complectationSafetyEraGlonass = entity.complectationSafetyEraGlonass;
    this.complectationSafetyLocking = entity.complectationSafetyLocking;
    this.complectationSafetyArmoredBody = entity.complectationSafetyArmoredBody;
    this.complectationSafetyAirbags = entity.complectationSafetyAirbags;
    this. complectationSafetyIsofix = entity.complectationSafetyIsofix;
    this.complectationSafetyAuxiliarySystems = entity.complectationSafetyAuxiliarySystems;

    this.complectationProtectionLabel = entity.complectationProtectionLabel;
    this.complectationProtectionImmobilizer = entity.complectationProtectionImmobilizer;
    this.complectationProtectionCentralLocking = entity.complectationProtectionCentralLocking;
    this.complectationProtectionAuthorsSecuritySystem = entity.complectationProtectionAuthorsSecuritySystem;
    this.complectationProtectionInteriorIntrusionSensor = entity.complectationProtectionInteriorIntrusionSensor;
    this.complectationProtectionSignaling = entity.complectationProtectionSignaling;

    this.complectationOtherTowBar = entity.complectationOtherTowBar;
    this.complectationOtherWinch = entity.complectationOtherWinch;
    this.complectationOtherAirbox = entity.complectationOtherAirbox;
    this.complectationOtherCrankcaseProtection = entity.complectationOtherCrankcaseProtection;
    this.complectationOtherTransverseArches = entity.complectationOtherTransverseArches;
    this.complectationOtherGasEquipment = entity.complectationOtherGasEquipment;
    this.complectationOtherNumberOfKeys = entity.complectationOtherNumberOfKeys;
    this.complectationOtherSpareWheel = entity.complectationOtherSpareWheel;

    this.paintworkInspectionFactoryColor = entity.paintworkInspectionFactoryColor;
    this.paintworkInspectionBodyInFilm = entity.paintworkInspectionBodyInFilm;
    this.paintworkInspectionRoof = entity.paintworkInspectionRoof;
    this.paintworkInspectionTrunkLid = entity.paintworkInspectionTrunkLid;
    this.paintworkInspectionRightRearFender = entity.paintworkInspectionRightRearFender;
    this.paintworkInspectionRightRearPillar = entity.paintworkInspectionRightRearPillar;
    this.paintworkInspectionRightRearDoor = entity.paintworkInspectionRightRearDoor;
    this.paintworkInspectionRightRearDoorOpening = entity.paintworkInspectionRightRearDoorOpening;
    this.paintworkInspectionRightCenterPillar = entity.paintworkInspectionRightCenterPillar;
    this.paintworkInspectionRightThreshold = entity.paintworkInspectionRightThreshold;
    this.paintworkInspectionRightFrontDoor = entity.paintworkInspectionRightFrontDoor;
    this.paintworkInspectionRightFrontDoorOpening = entity.paintworkInspectionRightFrontDoorOpening;
    this.paintworkInspectionRightFrontPillar = entity.paintworkInspectionRightFrontPillar;
    this.paintworkInspectionRightFrontFender = entity.paintworkInspectionRightFrontFender;
    this.paintworkInspectionHood = entity.paintworkInspectionHood;
    this.paintworkInspectionLeftFrontFender = entity.paintworkInspectionLeftFrontFender;
    this.paintworkInspectionLeftFrontPillar = entity.paintworkInspectionLeftFrontPillar;
    this.paintworkInspectionLeftFrontDoor = entity.paintworkInspectionLeftFrontDoor;
    this.paintworkInspectionLeftFrontDoorOpening = entity.paintworkInspectionLeftFrontDoorOpening;
    this.paintworkInspectionLeftCenterPillar = entity.paintworkInspectionLeftCenterPillar;
    this.paintworkInspectionLeftThreshold = entity.paintworkInspectionLeftThreshold;
    this.paintworkInspectionLeftRearDoor = entity.paintworkInspectionLeftRearDoor;
    this.paintworkInspectionLeftRearDoorOpening = entity.paintworkInspectionLeftRearDoorOpening;
    this.paintworkInspectionLeftRearPillar = entity.paintworkInspectionLeftRearPillar;
    this.paintworkInspectionLeftRearFender = entity.paintworkInspectionLeftRearFender;
    this.paintworkInspectionAddNameOne = entity.paintworkInspectionAddNameOne;
    this.paintworkInspectionAddInfoOne = entity.paintworkInspectionAddInfoOne;
    this.paintworkInspectionAddNameTwo = entity.paintworkInspectionAddNameTwo;
    this.paintworkInspectionAddInfTwo = entity.paintworkInspectionAddInfTwo;
    this.paintworkInspectionAddNameThree = entity.paintworkInspectionAddNameThree;
    this.paintworkInspectionAddInfoThree = entity.paintworkInspectionAddInfoThree;
    
    this.engineCompartmentDamageWithoutDamage = entity.engineCompartmentDamageWithoutDamage;
    this.engineCompartmentDamageLeftSideMember = entity.engineCompartmentDamageLeftSideMember;
    this.engineCompartmentDamageLeftGlass = entity.engineCompartmentDamageLeftGlass;
    this.engineCompartmentDamageRightSideMember = entity.engineCompartmentDamageRightSideMember;
    this.engineCompartmentDamageRightGlass = entity.engineCompartmentDamageRightGlass;
    this.engineCompartmentDamageHoodHinges = entity.engineCompartmentDamageHoodHinges;
    this.engineCompartmentDamageTelevisor = entity.engineCompartmentDamageTelevisor;
    this.engineCompartmentDamageMotorShield = entity.engineCompartmentDamageMotorShield;
    this.engineCompartmentDamageAddNameOne = entity.engineCompartmentDamageAddNameOne;
    this.engineCompartmentDamageAddInfoOne = entity.engineCompartmentDamageAddInfoOne;
    this.engineCompartmentDamageAddNameTwo = entity.engineCompartmentDamageAddNameTwo;
    this.engineCompartmentDamageAddInfTwo = entity.engineCompartmentDamageAddInfTwo;
    this.engineCompartmentDamageAddNameThree = entity.engineCompartmentDamageAddNameThree;
    this.engineCompartmentDamageAddInfoThree = entity.engineCompartmentDamageAddInfoThree;
     
    this.frontSideDamageWithoutDamage = entity.frontSideDamageWithoutDamage;
    this.frontSideDamageFogLights = entity.frontSideDamageFogLights;
    this.frontSideDamageRadiatorGrille = entity.frontSideDamageRadiatorGrille;
    this.frontSideDamageFrontBumper = entity.frontSideDamageFrontBumper;
    this.frontSideDamageRightHeadlight = entity.frontSideDamageRightHeadlight;
    this.frontSideDamageLeftHeadlight = entity.frontSideDamageLeftHeadlight;
    this.frontSideDamageHood = entity.frontSideDamageHood;
    this.frontSideDamageAddNameOne = entity.frontSideDamageAddNameOne;
    this.frontSideDamageAddInfoOne = entity.frontSideDamageAddInfoOne;
    this.frontSideDamageAddNameTwo = entity.frontSideDamageAddNameTwo;
    this.frontSideDamageAddInfTwo = entity.frontSideDamageAddInfTwo;
    this.frontSideDamageAddNameThree = entity.frontSideDamageAddNameThree;
    this.frontSideDamageAddInfoThree = entity.frontSideDamageAddInfoThree;

    this.leftSideDamage = [];
    this.backSideDamage = [];
    this.trunkDamage = [];
    this.rightSideDamage = [];
    this.roofDamage = [];
    this.glassDamage = [];
    this.discDamage = [];
    this.interiorDamage = [];
    this.exteriorPhoto = [];
    this.interiorPhoto = [];
    this.roundViewVideo = [];
    this.stoppedEngine = [];
    this.runningEngine = [];
    this.dashboard = [];
    this.testDrive = [];
    this.expertOpinion = [];
    this.createdAt = new Date();
    this.publishAt = new Date();
  }

  public toObject(): BetcarReportEntity {
    return { 
      ...this,
      leftSideDamage: this.leftSideDamage.map(({ leftSideDamageId }) => ({ leftSideDamageId })),
      backSideDamage: this.backSideDamage.map(({ backSideDamageId }) => ({ backSideDamageId })),
      trunkDamage: this.trunkDamage.map(({ trunkDamageId }) => ({ trunkDamageId })),
      rightSideDamage: this.rightSideDamage.map(({ rightSideDamageId }) => ({ rightSideDamageId })),
      roofDamage: this.roofDamage.map(({ roofDamageId }) => ({ roofDamageId })),
      glassDamage: this.glassDamage.map(({ glassDamageId }) => ({ glassDamageId })),
      discDamage: this.discDamage.map(({ discDamageId }) => ({ discDamageId })),
      interiorDamage: this.interiorDamage.map(({ interiorDamageId }) => ({ interiorDamageId })),
      exteriorPhoto: this.exteriorPhoto.map(({ exteriorPhotoId }) => ({ exteriorPhotoId })),
      interiorPhoto: this.interiorPhoto.map(({ interiorPhotoId }) => ({ interiorPhotoId })),
      roundViewVideo: this.roundViewVideo.map(({ roundViewVideoId }) => ({ roundViewVideoId })),
      stoppedEngine: this.stoppedEngine.map(({ stoppedEngineId }) => ({ stoppedEngineId })),
      runningEngine: this.runningEngine.map(({ runningEngineId }) => ({ runningEngineId })),
      dashboard: this.dashboard.map(({ dashboardId }) => ({ dashboardId })),
      testDrive: this.testDrive.map(({ testDriveId }) => ({ testDriveId })),
      expertOpinion: this.expertOpinion.map(({ expertOpinionId }) => ({ expertOpinionId })),
    };
  }
}