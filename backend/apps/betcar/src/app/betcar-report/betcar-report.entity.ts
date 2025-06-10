import { Entity } from '@backend/util/util-types';
import {
  Report
 } from '@backend/shared/shared-types';
 import { v4 as uuidv4 } from 'uuid';


export class BetcarReportEntity implements Entity<BetcarReportEntity>, Report {

  public reportId?: number;
  public userId: number;
  public title?: string;
  public userEmail?: string;
  public reportNumber?: number;
  public vinNumber?: string;
  public isPrime?: boolean;
  public uniqueLink?: string;
  public isActivatedLink?: boolean;
  public sellerDetailsRefusalOfInspection?: boolean;
  public sellerDetailsLinkToAd?: string;
  public sellerDetailsName?: string;
  public sellerDetailsPhone?: string;
  public sellerDetailsCarCost?: string;
  public sellerDetailsRole?: string;
  public sellerDetailsComment?: string;
  public vinBodyNumberExpertConfirm?: boolean;
  public vinBodyNumberNumberState?: boolean[];
  public vinBodyNumberPhoto?: string[];
  public vinBodyNumberComment?: string;
  public frameNumber?: string;
  public frameNumberExpertConfirm?: boolean;
  public frameNumberNumberState?: boolean[];
  public frameNumberPhoto?: string[];
  public frameNumberComment?: string;
  public stateNumberAbsent?: boolean;
  public stateNumberForeign?: boolean;
  public stateNumberStateNumber?: string;
  public stateNumberComment?: string;
  public tCPAbsent?: boolean;
  public tCPType?: string;
  public tCPPhoto?: string[];
  public tCPNumberOfOwners?: string;
  public tCPComment?: string;
  public sTSAbsent?: boolean;
  public sTSPhoto?: string[];
  public sTSComment?: string;
  public carDataCarBrand?: string;
  public carDataCarModel?: string;
  public carDataManufactureYear?: string;
  public carDataColor?: string;
  public carDataBodyType?: string;
  public carDataEnginesType?: string;
  public carDataGearboxType?: string;
  public carDataDriveUnit?: string;
  public carDataSteeringWheelLocation?: string;
  public engineNumber?: string;
  public engineNumberExpertConfirm?: boolean;
  public engineNumberNumberState?: boolean[];
  public engineNumberPhoto?: string[];
  public engineNumberComment?: string;
  public carDataEngineCapacity?: string;
  public carDataPower?: string;
  public carDataServiceBook?: string;
  public additionalDocumentsComment?: string;
  public additionalDocumentsPhoto?: string[];
  public locationCountry?: string;
  public locationRegion?: string;
  public locationCity?: string;
  public locationAddress?: string;
  public locationComment?: string;
  public complectationBodyRoofRails?: boolean;
  public complectationBodyBodyStickers?: boolean;
  public complectationBodyAirbrushing?: boolean;
  public complectationBodyBodyTuning?: boolean;
  public complectationBodyBodyInFilm?: boolean;
  public complectationWheelsIsTiresIdentical?: boolean;
  public complectationWheelsAdditionalTireSets?: boolean;
  public complectationWheelsAdditionalSetsOfDisks?: boolean;
  public complectationWheelsTypeOfDisks?: string;
  public complectationWheelsSeasonality?: string;
  public complectationWheelsFrontLeftBrand?: string;
  public complectationWheelsBackLeftBrand?: string;
  public complectationWheelsFrontRightBrand?: string;
  public complectationWheelsBackRightBrand?: string;
  public complectationWheelsFrontLeftModel?: string;
  public complectationWheelsBackLeftModel?: string;
  public complectationWheelsFrontRightModel?: string;
  public complectationWheelsBackRightModel?: string;
  public complectationWheelsFrontLeftIssueDate?: string;
  public complectationWheelsBackLeftIssueDate?: string;
  public complectationWheelsFrontRightIssueDate?: string;
  public complectationWheelsBackRightIssueDate?: string;
  public complectationWheelsFrontLeftOptions?: string[];
  public complectationWheelsBackLeftOptions?: string[];
  public complectationWheelsFrontRightOptions?: string[];
  public complectationWheelsBackRightOptions?: string[];
  public complectationWheelsFrontLeftWear?: string;
  public complectationWheelsBackLeftWear?: string;
  public complectationWheelsFrontRightWear?: string;
  public complectationWheelsBackRightWear?: string;
  public complectationWheelsAdditionalTiresSeasonality?: string[];
  public complectationWheelsAdditionalDisksType?: string;
  public complectationSalonLuke?: boolean;
  public complectationSalonSeatCovers?: boolean;
  public complectationSalonPanoramicView?: boolean;
  public complectationSalonThirdRowOfSeats?: boolean;
  public complectationSalonTintedGlass?: boolean;
  public complectationSalonSteeringWheelHeating?: boolean;
  public complectationSalonLeatherTrimmedGearshiftLever?: boolean;
  public complectationSalonSportsFrontSeats?: boolean;
  public complectationSalonSteeringWheelLeatherTrim?: boolean;
  public complectationSalonFoldingRearSeat?: boolean;
  public complectationSalonFrontCenterArmrest?: boolean;
  public complectationSalonInteriorMaterial?: string;
  public complectationSalonHeatedSeats?: string[];
  public complectationSalonSeatHeightAdjustment?: string;
  public complectationSalonElectricallyAdjustableSeats?: string[];
  public complectationSalonSeatPositionMemory?: string;
  public complectationSalonSeatVentilation?: string[];
  public complectationSalonSeatMassage?: string[];
  public complectationHeadlightsLightSensor?: boolean;
  public complectationHeadlightsRainSensor?: boolean;
  public complectationHeadlightsHeadlightWasher?: boolean;
  public complectationHeadlightsFogLights?: boolean;
  public complectationHeadlightsAutomaticHeadlightLeveling?: boolean;
  public complectationHeadlightsAdaptivLlightingSystem?: boolean;
  public complectationHeadlightsHighBeamControlSystem?: boolean;
  public complectationHeadlightsHeadlights?: string;

  public complectationMultimediaCd?: boolean;
  public complectationMultimediaTv?: boolean;
  public complectationMultimediaUsb?: boolean;
  public complectationMultimediaAux?: boolean;
  public complectationMultimediaDvd?: boolean;
  public complectationMultimediaCassette?: boolean;
  public complectationMultimediaCarPlay?: boolean;
  public complectationMultimediaBluetooth?: boolean;
  public complectationMultimediaSubwoofer?: boolean;
  public complectationMultimediaVoiceControl?: boolean;
  public complectationMultimediaNavigationSystem?: boolean;
  public complectationMultimediaMultimediaSystemForRearPassengers?: boolean;

  public complectationComfortStartStopSystem?: boolean;
  public complectationComfortOnBoardComputer?: boolean;
  public complectationComfortElectricMirrors?: boolean;
  public complectationComfortPreheater?: boolean;
  public complectationComfortEngineStartButton?: boolean;
  public complectationComfortKeylessEntrySystem?: boolean;
  public complectationComfortHandsFreeTrunkOpening?: boolean;
  public complectationComfortElectrofoldingOfMirrors?: boolean;
  public complectationComfortMultifunctionSteeringWheel?: boolean;
  public complectationComfortTouchControlPanel?: boolean;
  public complectationComfortGearshiftPaddles?: boolean;
  public complectationComfortAdjustablePedalAssembly?: boolean;
  public complectationComfortElectronicDashboard?: boolean;
  public complectationComfortRemoteEngineStart?: boolean;
  public complectationComfortElectricTrunkLid?: boolean;
  public complectationComfortCamera?: string[];
  public complectationComfortSuspension?: string[];
  public complectationComfortAirConditioner?: string;
  public complectationComfortPowerSteering?: string;
  public complectationComfortCruiseControl?: string;
  public complectationComfortElectricHeating?: string[];
  public complectationComfortSteeringWheelAdjustment?: string[];
  public complectationComfortParkingAssistanceSystem?: string[];
  public complectationComfortElectricLifts?: string[];

  public complectationSafetyEraGlonass?: boolean;
  public complectationSafetyLocking?: boolean;
  public complectationSafetyArmoredBody?: boolean;
  public complectationSafetyAirbags?: string[];
  public complectationSafetyIsofix?: string[];
  public complectationSafetyAuxiliarySystems?: string[];

  public complectationProtectionLabel?: boolean;
  public complectationProtectionImmobilizer?: boolean;
  public complectationProtectionCentralLocking?: boolean;
  public complectationProtectionAuthorsSecuritySystem?: boolean;
  public complectationProtectionInteriorIntrusionSensor?: boolean;
  public complectationProtectionSignaling?: string;

  public complectationOtherTowBar?: boolean;
  public complectationOtherWinch?: boolean;
  public complectationOtherAirbox?: boolean;
  public complectationOtherCrankcaseProtection?: boolean;
  public complectationOtherTransverseArches?: boolean;
  public complectationOtherGasEquipment?: boolean;
  public complectationOtherNumberOfKeys?: string;
  public complectationOtherSpareWheel?: string;

  public paintworkInspectionFactoryColor?: boolean;
  public paintworkInspectionBodyInFilm?: boolean;
  public paintworkInspectionRoof?: string[];
  public paintworkInspectionTrunkLid?: string[];
  public paintworkInspectionRightRearFender?: string[];
  public paintworkInspectionRightRearPillar?: string[];
  public paintworkInspectionRightRearDoor?: string[];
  public paintworkInspectionRightRearDoorOpening?: string[];
  public paintworkInspectionRightCenterPillar?: string[];
  public paintworkInspectionRightThreshold?: string[];
  public paintworkInspectionRightFrontDoor?: string[];
  public paintworkInspectionRightFrontDoorOpening?: string[];
  public paintworkInspectionRightFrontPillar?: string[];
  public paintworkInspectionRightFrontFender?: string[];
  public paintworkInspectionHood?: string[];
  public paintworkInspectionLeftFrontFender?: string[];
  public paintworkInspectionLeftFrontPillar?: string[];
  public paintworkInspectionLeftFrontDoor?: string[];
  public paintworkInspectionLeftFrontDoorOpening?: string[];
  public paintworkInspectionLeftCenterPillar?: string[];
  public paintworkInspectionLeftThreshold?: string[];
  public paintworkInspectionLeftRearDoor?: string[];
  public paintworkInspectionLeftRearDoorOpening?: string[];
  public paintworkInspectionLeftRearPillar?: string[];
  public paintworkInspectionLeftRearFender?: string[];
  public paintworkInspectionAddNameOne?: string;
  public paintworkInspectionAddInfoOne?: string[];
  public paintworkInspectionAddNameTwo?: string;
  public paintworkInspectionAddInfTwo?: string[];
  public paintworkInspectionAddNameThree?: string;
  public paintworkInspectionAddInfoThree?: string[];

  public engineCompartmentDamageWithoutDamage?: boolean;
  public engineCompartmentDamageLeftSideMember?: string[];
  public engineCompartmentDamageLeftGlass?: string[];
  public engineCompartmentDamageRightSideMember?: string[];
  public engineCompartmentDamageRightGlass?: string[];
  public engineCompartmentDamageHoodHinges?: string[]; 
  public engineCompartmentDamageTelevisor?: string[];
  public engineCompartmentDamageMotorShield?: string[];
  public engineCompartmentDamageAddNameOne?: string;
  public engineCompartmentDamageAddInfoOne?: string[];
  public engineCompartmentDamageAddNameTwo?: string;
  public engineCompartmentDamageAddInfTwo?: string[];
  public engineCompartmentDamageAddNameThree?: string;
  public engineCompartmentDamageAddInfoThree?: string[];

  public frontSideDamageWithoutDamage?: boolean;
  public frontSideDamageFogLights?: string[]; 
  public frontSideDamageRadiatorGrille?: string[]; 
  public frontSideDamageFrontBumper?: string[]; 
  public frontSideDamageRightHeadlight?: string[]; 
  public frontSideDamageLeftHeadlight?: string[]; 
  public frontSideDamageHood?: string[]; 
  public frontSideDamageAddNameOne?: string;
  public frontSideDamageAddInfoOne?: string[];
  public frontSideDamageAddNameTwo?: string;
  public frontSideDamageAddInfTwo?: string[];
  public frontSideDamageAddNameThree?: string;
  public frontSideDamageAddInfoThree?: string[];

  public leftSideDamageWithoutDamage?: boolean;
  public leftSideDamageLeftFrontFender?: string[]; 
  public leftSideDamageLeftFrontPillar?: string[]; 
  public leftSideDamageLeftFrontDoor?: string[]; 
  public leftSideDamageLeftCenterPillar?: string[]; 
  public leftSideDamageLeftRearDoor?: string[]; 
  public leftSideDamageLeftRearPillar?: string[]; 
  public leftSideDamageLeftRearFender?: string[]; 
  public leftSideDamageLeftMirror?: string[]; 
  public leftSideDamageLeftThreshold?: string[]; 
  public leftSideDamageAddNameOne?: string;
  public leftSideDamageAddInfoOne?: string[];
  public leftSideDamageAddNameTwo?: string;
  public leftSideDamageAddInfTwo?: string[];
  public leftSideDamageAddNameThree?: string;
  public leftSideDamageAddInfoThree?: string[];

  public backSideDamageWithoutDamage?: boolean;
  public backSideDamageTailgate?: string[]; 
  public backSideDamageRearBumper?: string[]; 
  public backSideDamageLeftLamp?: string[]; 
  public backSideDamageRightLamp?: string[]; 
  public backSideDamageAddNameOne?: string;
  public backSideDamageAddInfoOne?: string[];
  public backSideDamageAddNameTwo?: string;
  public backSideDamageAddInfTwo?: string[];
  public backSideDamageAddNameThree?: string;
  public backSideDamageAddInfoThree?: string[];

  public trunkDamageWithoutDamage?: boolean;
  public trunkDamageCoverTrim?: string[]; 
  public trunkDamageCarpetFloor?: string[]; 
  public trunkDamageRightTrim?: string[]; 
  public trunkDamageRightGlass?: string[]; 
  public trunkDamageLeftTrim?: string[]; 
  public trunkDamageLeftGlass?: string[]; 
  public trunkDamageSeatBackTrim?: string[]; 
  public trunkDamageSpareWheelWell?: string[]; 
  public trunkDamageAddNameOne?: string;
  public trunkDamageAddInfoOne?: string[];
  public trunkDamageAddNameTwo?: string;
  public trunkDamageAddInfTwo?: string[];
  public trunkDamageAddNameThree?: string;
  public trunkDamageAddInfoThree?: string[];

  public rightSideDamageWithoutDamage?: boolean;
  public rightSideDamageRightFrontFender?: string[]; 
  public rightSideDamageRightFrontPillar?: string[]; 
  public rightSideDamageRightFrontDoor?: string[]; 
  public rightSideDamageRightCenterPillar?: string[]; 
  public rightSideDamageRightRearDoor?: string[]; 
  public rightSideDamageRightRearPillar?: string[]; 
  public rightSideDamageRightRearFender?: string[]; 
  public rightSideDamageRightMirror?: string[]; 
  public rightSideDamageRightThreshold?: string[]; 
  public rightSideDamageAddNameOne?: string;
  public rightSideDamageAddInfoOne?: string[];
  public rightSideDamageAddNameTwo?: string;
  public rightSideDamageAddInfTwo?: string[];
  public rightSideDamageAddNameThree?: string;
  public rightSideDamageAddInfoThree?: string[];

  public roofDamageWithoutDamage?: boolean;
  public roofDamageRoofRails?: string[];
  public roofDamageRoof?: string[];
  public roofDamageLuke?: string[];
  public roofDamagePanorama?: string[];
  public roofDamageAddNameOne?: string;
  public roofDamageAddInfoOne?: string[];
  public  roofDamageAddNameTwo?: string;
  public roofDamageAddInfTwo?: string[];
  public roofDamageAddNameThree?: string;
  public roofDamageAddInfoThree?: string[];

  public glassDamageWithoutDamage?: boolean;
  public glassDamageAllGlassIsFactory?: boolean;
  public glassDamageWindshield?: string[];
  public glassDamageLeftFrontGlass?: string[];
  public glassDamageLeftRearGlass?: string[];
  public glassDamageRearGlass?: string[];
  public glassDamageRightFrontGlass?: string[];
  public glassDamageRightRearGlass?: string[];
  public glassDamageAddNameOne?: string;
  public glassDamageAddInfoOne?: string[];
  public glassDamageAddNameTwo?: string;
  public glassDamageAddInfTwo?: string[];
  public glassDamageAddNameThree?: string;
  public glassDamageAddInfoThree?: string[];

  public discDamageWithoutDamage?: boolean;
  public discDamageLeftFrontDisc?: string[];
  public discDamageLeftRearDisc?: string[];
  public discDamageRightFrontDisc?: string[];
  public discDamageRightRearDisc?: string[];
  public discDamageAddNameOne?: string;
  public discDamageAddInfoOne?: string[];
  public discDamageAddNameTwo?: string;
  public discDamageAddInfTwo?: string[];
  public discDamageAddNameThree?: string;
  public discDamageAddInfoThree?: string[];

  public interiorDamageWithoutDamage?: boolean;
  public interiorDamageFrontLeftDoorCard?: string[];
  public interiorDamageDriversSeat?: string[];
  public interiorDamageSalonCarpet?: string[];
  public interiorDamageTorpedo?: string[];
  public interiorDamageCeiling?: string[];
  public interiorDamageBackLeftDoorCard?: string[];
  public interiorDamageBackSeat?: string[];
  public interiorDamageBackRightDoorCard?: string[];
  public interiorDamageFrontRightDoorCard?: string[];
  public interiorDamagePassengerSeat?: string[];
  public interiorDamageSleepingCompartment?: string[];
  public interiorDamageAddNameOne?: string;
  public interiorDamageAddInfoOne?: string[];
  public interiorDamageAddNameTwo?: string;
  public interiorDamageAddInfTwo?: string[];
  public interiorDamageAddNameThree?: string;
  public interiorDamageAddInfoThree?: string[];

  public exteriorPhotoRightFrontPhoto?: string;
  public exteriorPhotoFrontPhoto?: string;
  public exteriorPhotoLeftFrontPhoto?: string;
  public exteriorPhotoRightBackPhoto?: string;
  public exteriorPhotoBackPhoto?: string;
  public exteriorPhotoLeftBackPhoto?: string;
  public exteriorPhotoLeftPhoto?: string;
  public exteriorPhotoRightPhoto?: string;
  public exteriorPhotoHoodOpen?: string;
  public exteriorPhotoTrunkOpen?: string;
  public exteriorPhotoAddPhoto?: string[];

  public interiorPhotoLeftFrontDoor?: string;
  public interiorPhotoDriverSeatPhoto?: string;
  public interiorPhotoSteeringWheelPhoto?: string;
  public interiorPhotoDashboardPhoto?: string;
  public interiorPhotoLeftBackDoor?: string;
  public interiorPhotoBackLeftSeatsPhoto?: string;
  public interiorPhotoFrontSeatsPhoto?: string;
  public interiorPhotoRightBackDoor?: string;
  public interiorPhotoBackRightSeatsPhoto?: string;
  public interiorPhotoRightFrontDoor?: string;
  public interiorPhotoPassengerSeatPhoto?: string;
  public interiorPhotoAddPhoto?: string[];

  public roundViewVideoVideo?: string;
  public roundViewVideoComment?: string;

  public stoppedEngineIsNew?: boolean;
  public stoppedEngineIsNotGo?: boolean;
  public stoppedEngineIsEmergency?: boolean;
  public stoppedEngineIsUnderstaffed?: boolean;
  public stoppedEngineComment?: string;
  public stoppedEngineEngineOilLevel?: string;
  public stoppedEngineGearboxOilLevel?: string;
  public stoppedEngineGurLiquidLevel?: string;
  public stoppedEngineBrakeFluidLevel?: string;
  public stoppedEngineCoolantLevel?: string;
  public stoppedEngineTechnicalFluidsComment?: string;
  public stoppedEngineDriveBelts?: string;
  public stoppedEngineBrakeDiscs?: string;
  public stoppedEngineBrakePads?: string;
  public stoppedEngineWearComment?: string;
  public stoppedEngineIsFogging?: boolean;
  public stoppedEngineNameOne?: string;
  public stoppedEngineFoggingOne?: string[];
  public stoppedEnginePhotoOne?: string[];
  public stoppedEngineCommentOne?: string;
  public stoppedEngineNameTwo?: string;
  public stoppedEngineFoggingTwo?: string[];
  public stoppedEnginePhotoTwo?: string[];
  public stoppedEngineCommenTwo?: string;
  public stoppedEngineNameThree?: string;
  public stoppedEngineFoggingThree?: string[];
  public stoppedEnginePhotoThree?: string[];
  public stoppedEngineCommentThree?: string;

  public stoppedEnginePipesFogging?: boolean;
  public stoppedEnginePipesSmudges?: boolean;
  public stoppedEnginePipesPhoto?: string;
  public stoppedEnginePipesComment?: string;

  public stoppedEngineValveCoverFogging?: boolean;
  public stoppedEngineValveCoverSmudges?: boolean;
  public stoppedEngineValveCoverPhoto?: string;
  public stoppedEngineValveCoverComment?: string;

  public stoppedEngineCamshaftSensorFogging?: boolean;
  public stoppedEngineCamshaftSensorSmudges?: boolean;
  public stoppedEngineCamshaftSensorPhoto?: string;
  public stoppedEngineCamshaftSensorComment?: string;

  public stoppedEngineOilPressureSensorFogging?: boolean;
  public stoppedEngineOilPressureSensorSmudges?: boolean;
  public stoppedEngineOilPressureSensorPhoto?: string;
  public stoppedEngineOilPressureSensorComment?: string;

  public stoppedEngineCrankshaftOilSealFogging?: boolean;
  public stoppedEngineCrankshaftOilSealSmudges?: boolean;
  public stoppedEngineCrankshaftOilSealPhoto?: string;
  public stoppedEngineCrankshaftOilSealComment?: string;

  public stoppedEngineCamshaftOilSealFogging?: boolean;
  public stoppedEngineCamshaftOilSealSmudges?: boolean;
  public stoppedEngineCamshaftOilSealPhoto?: string;
  public stoppedEngineCamshaftOilSealComment?: string;

  public stoppedEngineCrankcaseFogging?: boolean;
  public stoppedEngineCrankcaseSmudges?: boolean;
  public stoppedEngineCrankcasePhoto?: string;
  public stoppedEngineCrankcaseComment?: string;

  public stoppedEngineGurFogging?: boolean;
  public stoppedEngineGurSmudges?: boolean;
  public stoppedEngineGurPhoto?: string;
  public stoppedEngineGurComment?: string;

  public stoppedEngineSteeringRackFogging?: boolean;
  public stoppedEngineSteeringRackSmudges?: boolean;
  public stoppedEngineSteeringRackPhoto?: string;
  public stoppedEngineSteeringRackComment?: string;

  public stoppedEngineShockAbsorbersFogging?: boolean;
  public stoppedEngineShockAbsorbersSmudges?: boolean;
  public stoppedEngineShockAbsorbersPhoto?: string;
  public stoppedEngineShockAbsorbersComment?: string;

  public runningEngineEngineNotStart?: boolean;
  public runningEngineComment?: string;
  public runningEngineEngineVideo?: string;
  public runningEngineAllSystemOkElectric?: boolean;
  public runningEngineAllSystemOkMechanical?: boolean;

  public runningEngineElectricalNameOne?: string;
  public runningEngineElectricalIsCheckOne?: boolean;
  public runningEngineElectricalCommentOne?: string;
  public runningEngineElectricalNameTwo?: string;
  public runningEngineElectricalIsCheckTwo?: boolean;
  public runningEngineElectricalCommentTwo?: string;
  public runningEngineElectricalNameThree?: string;
  public runningEngineElectricalIsCheckThree?: boolean;
  public runningEngineElectricalCommentThree?: string;

  public runningEngineMechanicalNameOne?: string;
  public runningEngineMechanicalIsCheckOne?: boolean;
  public runningEngineMechanicalCommentOne?: string;
  public runningEngineMechanicalNameTwo?: string;
  public runningEngineMechanicalIsCheckTwo?: boolean;
  public runningEngineMechanicalCommentTwo?: string;
  public runningEngineMechanicalNameThree?: string;
  public runningEngineMechanicalIsCheckThree?: boolean;
  public runningEngineMechanicalCommentThree?: string;

  public runningEngineElectricalBattery?: boolean;
  public runningEngineElectricalBatteryComment?: string;

  public runningEngineElectricalLightingEngineering?: boolean;
  public runningEngineElectricalLightingEngineeringComment?: string;

  public runningEngineElectricalAudiosystem?: boolean;
  public runningEngineElectricalAudiosystemComment?: string;

  public runningEngineElectricalHeatedSteeringWheel?: boolean;
  public runningEngineElectricalHeatedSteeringWheelComment?: string;

  public runningEngineElectricalSoundSignal?: boolean;
  public runningEngineElectricalSoundSignalComment?: string;

  public runningEngineElectricalSeatMassage?: boolean;
  public runningEngineElectricalSeatMassageComment?: string;

  public runningEngineElectricalWindshieldWashers?: boolean;
  public runningEngineElectricalWindshieldWashersComment?: string;

  public runningEngineElectricalHeatedSeats?: boolean;
  public runningEngineElectricalHeatedSeatsComment?: string;

  public runningEngineElectricalWindshieldWipers?: boolean;
  public runningEngineElectricalWindshieldWipersComment?: string;

  public runningEngineElectricalWindowLifters?: boolean;
  public runningEngineElectricalWindowLiftersComment?: string;

  public runningEngineElectricalElectricSunroof?: boolean;
  public runningEngineElectricalElectricSunroofComment?: string;

  public runningEngineElectricalElectricSteering?: boolean;
  public runningEngineElectricalElectricSteeringComment?: string;

  public runningEngineElectricalElectricMirrors?: boolean;
  public runningEngineElectricalElectricMirrorsComment?: string;

  public runningEngineElectricalElectricSeats?: boolean;
  public runningEngineElectricalElectricSeatsComment?: string;

  public runningEngineElectricalElectricPanorama?: boolean;
  public runningEngineElectricalElectricPanoramaComment?: string;

  public runningEngineElectricalHeatedWindshield?: boolean;
  public runningEngineElectricalHeatedWindshieldComment?: string;

  public runningEngineElectricalElectricTrunkDrive?: boolean;
  public runningEngineElectricalElectricTrunkDriveComment?: string;

  public runningEngineMechanicalGearShifting?: boolean;
  public runningEngineMechanicalGearShiftingComment?: string;

  public runningEngineMechanicalEngineOperation?: boolean;
  public runningEngineMechanicalEngineOperationComment?: string;

  public runningEngineMechanicalInteriorHeater?: boolean;
  public runningEngineMechanicalInteriorHeaterComment?: string;

  public runningEngineMechanicalPowerSteering?: boolean;
  public runningEngineMechanicalPowerSteeringComment?: string;

  public runningEngineMechanicalAirConditioner?: boolean;
  public runningEngineMechanicalAirConditionerComment?: string;

  public dashboardNoErrors?: boolean;
  public dashboardDiagnosticsFile?: string[];
  public dashboardDiagnosticsComment?: string;
  public dashboardMileageOnDashboard?: string;
  public dashboardMileageInTheEngineBlock?: string;
  public dashboardMileageInTheGearbox?: string;
  public dashboardMileageInAdditionalBlocks?: string;
  public dashboardIsNoMileage?: boolean;
  public dashboardTotalComment?: string;
  public dashboardNameOne?: string;
  public dashboardIsCheckOne?: boolean;
  public dashboardCommentOne?: string;
  public dashboardNameTwo?: string;
  public dashboardIsCheckTwo?: boolean;
  public dashboardCommentTwo?: string;
  public dashboardNameThree?: string;
  public dashboardIsCheckThree?: boolean;
  public dashboardCommentThree?: string;

  public dashboardABS?: boolean;
  public dashboardABSComment?: string;

  public dashboardESP?: boolean;
  public dashboardESPComment?: string;

  public dashboardAirbag?: boolean;
  public dashboardAirbagComment?: string;

  public dashboardCheckEngine?: boolean;
  public dashboardCheckEngineComment?: string;

  public dashboardBattery?: boolean;
  public dashboardBatteryComment?: string;

  public dashboardTirePressure?: boolean;
  public dashboardTirePressureComment?: string;

  public dashboardOilPressure?: boolean;
  public dashboardOilPressureComment?: string;

  public testDriveAllSystemOk?: boolean;
  public testDriveNameOne?: string;
  public testDriveIsCheckOne?: boolean;
  public testDriveCommentOne?: string;
  public testDriveNameTwo?: string;
  public testDriveIsCheckTwo?: boolean;
  public testDriveCommentTwo?: string;
  public testDriveNameThree?: string;
  public testDriveIsCheckThree?: boolean;
  public testDriveCommentThree?: string;

  public testDriveSuspension?: boolean;
  public testDriveSuspensionComment?: string;

  public testDriveEngine?: boolean;
  public testDriveEngineComment?: string;

  public testDriveTransmission?: boolean;
  public testDriveTransmissionComment?: string;

  public testDriveSteering?: boolean;
  public testDriveSteeringComment?: string;

  public testDriveBrakeSystem?: boolean;
  public testDriveBrakeSystemComment?: string;

  public testDriveParkingBrake?: boolean;
  public testDriveParkingBrakeComment?: string;

  public testDriveExhaustSystem?: boolean;
  public testDriveExhaustSystemComment?: string;


  public expertOpinionPlusComment?: string;
  public expertOpinionMinusComment?: string;
  public expertOpinionTotalComment?: string;
  public expertOpinionHistoryFile?: string[];
  public expertOpinionHistoryComment?: string;

  public serviceInspectionCompressionCheck?: string[];
  public serviceInspectionEndoscopeCheck?: string[];
  public serviceInspectionEngineInspection?: string[];
  public serviceInspectionCheckpointInspection?: string[];
  public serviceInspectionPowerSteeringInspection?: string[];
  public serviceInspectionTransferCaseInspection?: string[];
  public serviceInspectionRearAxleInspection?: string[];
  public serviceInspectionFrontAxleInspection?: string[];
  public serviceInspectionSteeringRackInspection?: string[];
  public serviceInspectionChassisInspection?: string[];

  public createdAt?: Date;
  public publishAt?: Date;

  constructor(report: Report) {
    this.fillEntity(report);
  }

  public fillEntity(entity: Report): void {
    this.reportId = entity.reportId;
    this.userId = entity.userId;
    this.title = entity.title;
    this.userEmail = entity.userEmail;
    this.reportNumber = entity.reportNumber;
    this.isPrime = entity.isPrime;
    this.uniqueLink = uuidv4();
    this.isActivatedLink = entity.isActivatedLink;
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

    this.leftSideDamageWithoutDamage = entity.leftSideDamageWithoutDamage;
    this.leftSideDamageLeftFrontFender = entity.leftSideDamageLeftFrontFender;
    this.leftSideDamageLeftFrontPillar = entity.leftSideDamageLeftFrontPillar;
    this.leftSideDamageLeftFrontDoor = entity.leftSideDamageLeftFrontDoor;
    this.leftSideDamageLeftCenterPillar = entity.leftSideDamageLeftCenterPillar;
    this.leftSideDamageLeftRearDoor = entity.leftSideDamageLeftRearDoor;
    this.leftSideDamageLeftRearPillar = entity.leftSideDamageLeftRearPillar;
    this.leftSideDamageLeftRearFender = entity.leftSideDamageLeftRearFender;
    this.leftSideDamageLeftMirror = entity.leftSideDamageLeftMirror;
    this.leftSideDamageLeftThreshold = entity.leftSideDamageLeftThreshold;
    this.leftSideDamageAddNameOne = entity.leftSideDamageAddNameOne;
    this.leftSideDamageAddInfoOne = entity.leftSideDamageAddInfoOne;
    this.leftSideDamageAddNameTwo = entity.leftSideDamageAddNameTwo;
    this.leftSideDamageAddInfTwo = entity.leftSideDamageAddInfTwo;
    this.leftSideDamageAddNameThree = entity.leftSideDamageAddNameThree;
    this.leftSideDamageAddInfoThree = entity.leftSideDamageAddInfoThree;

    this.backSideDamageWithoutDamage = entity.backSideDamageWithoutDamage;
    this.backSideDamageTailgate = entity.backSideDamageTailgate;
    this.backSideDamageRearBumper = entity.backSideDamageRearBumper;
    this.backSideDamageLeftLamp = entity.backSideDamageLeftLamp;
    this.backSideDamageRightLamp = entity.backSideDamageRightLamp;
    this.backSideDamageAddNameOne = entity.backSideDamageAddNameOne;
    this.backSideDamageAddInfoOne = entity.backSideDamageAddInfoOne;
    this.backSideDamageAddNameTwo = entity.backSideDamageAddNameTwo;
    this.backSideDamageAddInfTwo = entity.backSideDamageAddInfTwo;
    this.backSideDamageAddNameThree = entity.backSideDamageAddNameThree;
    this.backSideDamageAddInfoThree = entity.backSideDamageAddInfoThree;

    this.trunkDamageWithoutDamage = entity.trunkDamageWithoutDamage;
    this.trunkDamageCoverTrim = entity.trunkDamageCoverTrim;
    this.trunkDamageCarpetFloor = entity.trunkDamageCarpetFloor;
    this.trunkDamageRightTrim = entity.trunkDamageRightTrim;
    this.trunkDamageRightGlass = entity.trunkDamageRightGlass;
    this.trunkDamageLeftTrim = entity.trunkDamageLeftTrim;
    this.trunkDamageLeftGlass = entity.trunkDamageLeftGlass;
    this.trunkDamageSeatBackTrim = entity.trunkDamageSeatBackTrim;
    this.trunkDamageSpareWheelWell = entity.trunkDamageSpareWheelWell;
    this.trunkDamageAddNameOne = entity.trunkDamageAddNameOne;
    this.trunkDamageAddInfoOne = entity.trunkDamageAddInfoOne;
    this.trunkDamageAddNameTwo = entity.trunkDamageAddNameTwo;
    this.trunkDamageAddInfTwo = entity.trunkDamageAddInfTwo;
    this.trunkDamageAddNameThree = entity.trunkDamageAddNameThree;
    this.trunkDamageAddInfoThree = entity.trunkDamageAddInfoThree;

    this.rightSideDamageWithoutDamage = entity.rightSideDamageWithoutDamage;
    this.rightSideDamageRightFrontFender = entity.rightSideDamageRightFrontFender;
    this.rightSideDamageRightFrontPillar = entity.rightSideDamageRightFrontPillar;
    this.rightSideDamageRightFrontDoor = entity.rightSideDamageRightFrontDoor;
    this.rightSideDamageRightCenterPillar = entity.rightSideDamageRightCenterPillar;
    this.rightSideDamageRightRearDoor = entity.rightSideDamageRightRearDoor;
    this.rightSideDamageRightRearPillar = entity.rightSideDamageRightRearPillar;
    this.rightSideDamageRightRearFender = entity.rightSideDamageRightRearFender;
    this.rightSideDamageRightMirror = entity.rightSideDamageRightMirror;
    this.rightSideDamageRightThreshold = entity.rightSideDamageRightThreshold;
    this.rightSideDamageAddNameOne = entity.rightSideDamageAddNameOne;
    this.rightSideDamageAddInfoOne = entity.rightSideDamageAddInfoOne;
    this.rightSideDamageAddNameTwo = entity.rightSideDamageAddNameTwo;
    this.rightSideDamageAddInfTwo = entity.rightSideDamageAddInfTwo;
    this.rightSideDamageAddNameThree = entity.rightSideDamageAddNameThree;
    this.rightSideDamageAddInfoThree = entity.rightSideDamageAddInfoThree;

    this.roofDamageWithoutDamage = entity.roofDamageWithoutDamage;
    this.roofDamageRoofRails = entity.roofDamageRoofRails;
    this.roofDamageRoof = entity.roofDamageRoof;
    this.roofDamageLuke = entity.roofDamageLuke;
    this.roofDamagePanorama = entity.roofDamagePanorama;
    this.roofDamageAddNameOne = entity.roofDamageAddNameOne;
    this.roofDamageAddInfoOne = entity.roofDamageAddInfoOne;
    this.roofDamageAddNameTwo = entity.roofDamageAddNameTwo;
    this.roofDamageAddInfTwo = entity.roofDamageAddInfTwo;
    this.roofDamageAddNameThree = entity.roofDamageAddNameThree;
    this.roofDamageAddInfoThree = entity.roofDamageAddInfoThree;

    this.glassDamageWithoutDamage = entity.glassDamageWithoutDamage;
    this.glassDamageAllGlassIsFactory = entity.glassDamageAllGlassIsFactory;
    this.glassDamageWindshield = entity.glassDamageWindshield;
    this.glassDamageLeftFrontGlass = entity.glassDamageLeftFrontGlass;
    this.glassDamageLeftRearGlass = entity.glassDamageLeftRearGlass;
    this.glassDamageRearGlass = entity.glassDamageRearGlass;
    this.glassDamageRightFrontGlass = entity.glassDamageRightFrontGlass;
    this.glassDamageRightRearGlass = entity.glassDamageRightRearGlass;
    this.glassDamageAddNameOne = entity.glassDamageAddNameOne;
    this.glassDamageAddInfoOne = entity.glassDamageAddInfoOne;
    this.glassDamageAddNameTwo = entity.glassDamageAddNameTwo;
    this.glassDamageAddInfTwo = entity.glassDamageAddInfTwo;
    this.glassDamageAddNameThree = entity.glassDamageAddNameThree;
    this.glassDamageAddInfoThree = entity.glassDamageAddInfoThree;

    this.discDamageWithoutDamage = entity.discDamageWithoutDamage;
    this.discDamageLeftFrontDisc = entity.discDamageLeftFrontDisc;
    this.discDamageLeftRearDisc = entity.discDamageLeftRearDisc;
    this.discDamageRightFrontDisc = entity.discDamageRightFrontDisc;
    this.discDamageRightRearDisc = entity.discDamageRightRearDisc;
    this.discDamageAddNameOne = entity.discDamageAddNameOne;
    this.discDamageAddInfoOne = entity.discDamageAddInfoOne;
    this.discDamageAddNameTwo = entity.discDamageAddNameTwo;
    this.discDamageAddInfTwo = entity.discDamageAddInfTwo;
    this.discDamageAddNameThree = entity.discDamageAddNameThree;
    this.discDamageAddInfoThree = entity.discDamageAddInfoThree;

    this.interiorDamageWithoutDamage = entity.interiorDamageWithoutDamage;
    this.interiorDamageFrontLeftDoorCard = entity.interiorDamageFrontLeftDoorCard;
    this.interiorDamageDriversSeat = entity.interiorDamageDriversSeat;
    this.interiorDamageSalonCarpet = entity.interiorDamageSalonCarpet;
    this.interiorDamageTorpedo = entity.interiorDamageTorpedo;
    this.interiorDamageCeiling = entity.interiorDamageCeiling;
    this.interiorDamageBackLeftDoorCard = entity.interiorDamageBackLeftDoorCard;
    this.interiorDamageBackSeat = entity.interiorDamageBackSeat;
    this.interiorDamageBackRightDoorCard = entity.interiorDamageBackRightDoorCard;
    this.interiorDamageFrontRightDoorCard = entity.interiorDamageFrontRightDoorCard;
    this.interiorDamagePassengerSeat = entity.interiorDamagePassengerSeat;
    this.interiorDamageSleepingCompartment = entity.interiorDamageSleepingCompartment;
    this.interiorDamageAddNameOne = entity.interiorDamageAddNameOne;
    this.interiorDamageAddInfoOne = entity.interiorDamageAddInfoOne;
    this.interiorDamageAddNameTwo = entity.interiorDamageAddNameTwo;
    this.interiorDamageAddInfTwo = entity.interiorDamageAddInfTwo;
    this.interiorDamageAddNameThree = entity.interiorDamageAddNameThree;
    this.interiorDamageAddInfoThree = entity.interiorDamageAddInfoThree;

    this.exteriorPhotoRightFrontPhoto = entity.exteriorPhotoRightFrontPhoto;
    this.exteriorPhotoFrontPhoto = entity.exteriorPhotoFrontPhoto;
    this.exteriorPhotoLeftFrontPhoto = entity.exteriorPhotoLeftFrontPhoto;
    this.exteriorPhotoRightBackPhoto = entity.exteriorPhotoRightBackPhoto;
    this.exteriorPhotoBackPhoto = entity.exteriorPhotoBackPhoto;
    this.exteriorPhotoLeftBackPhoto = entity.exteriorPhotoLeftBackPhoto;
    this.exteriorPhotoLeftPhoto = entity.exteriorPhotoLeftPhoto;
    this.exteriorPhotoRightPhoto = entity.exteriorPhotoRightPhoto;
    this.exteriorPhotoHoodOpen = entity.exteriorPhotoHoodOpen;
    this.exteriorPhotoTrunkOpen = entity.exteriorPhotoTrunkOpen;
    this.exteriorPhotoAddPhoto = entity.exteriorPhotoAddPhoto;

    this.interiorPhotoLeftFrontDoor = entity.interiorPhotoLeftFrontDoor;
    this.interiorPhotoDriverSeatPhoto = entity.interiorPhotoDriverSeatPhoto;
    this.interiorPhotoSteeringWheelPhoto = entity.interiorPhotoSteeringWheelPhoto;
    this.interiorPhotoDashboardPhoto = entity.interiorPhotoDashboardPhoto;
    this.interiorPhotoLeftBackDoor = entity.interiorPhotoLeftBackDoor;
    this.interiorPhotoBackLeftSeatsPhoto = entity.interiorPhotoBackLeftSeatsPhoto;
    this.interiorPhotoFrontSeatsPhoto = entity.interiorPhotoFrontSeatsPhoto;
    this.interiorPhotoRightBackDoor = entity.interiorPhotoRightBackDoor;
    this.interiorPhotoBackRightSeatsPhoto = entity.interiorPhotoBackRightSeatsPhoto;
    this.interiorPhotoRightFrontDoor = entity.interiorPhotoRightFrontDoor;
    this.interiorPhotoPassengerSeatPhoto = entity.interiorPhotoPassengerSeatPhoto;
    this.interiorPhotoAddPhoto = entity.interiorPhotoAddPhoto;

    this.roundViewVideoVideo = entity.roundViewVideoVideo;
    this.roundViewVideoComment = entity.roundViewVideoComment;

    this.stoppedEngineIsNew = entity.stoppedEngineIsNew;
    this.stoppedEngineIsNotGo = entity.stoppedEngineIsNotGo;
    this.stoppedEngineIsEmergency = entity.stoppedEngineIsEmergency;
    this.stoppedEngineIsUnderstaffed = entity.stoppedEngineIsUnderstaffed;
    this.stoppedEngineComment = entity.stoppedEngineComment;
    this.stoppedEngineEngineOilLevel = entity.stoppedEngineEngineOilLevel;
    this.stoppedEngineGearboxOilLevel = entity.stoppedEngineGearboxOilLevel;
    this.stoppedEngineGurLiquidLevel = entity.stoppedEngineGurLiquidLevel;
    this.stoppedEngineBrakeFluidLevel = entity.stoppedEngineBrakeFluidLevel;
    this.stoppedEngineCoolantLevel = entity.stoppedEngineCoolantLevel;
    this.stoppedEngineTechnicalFluidsComment = entity.stoppedEngineTechnicalFluidsComment;
    this.stoppedEngineDriveBelts = entity.stoppedEngineDriveBelts;
    this.stoppedEngineBrakeDiscs = entity.stoppedEngineBrakeDiscs;
    this.stoppedEngineBrakePads = entity.stoppedEngineBrakePads;
    this.stoppedEngineWearComment = entity.stoppedEngineWearComment;
    this.stoppedEngineIsFogging = entity.stoppedEngineIsFogging;
    this.stoppedEngineNameOne = entity.stoppedEngineNameOne;
    this.stoppedEngineFoggingOne = entity.stoppedEngineFoggingOne;
    this.stoppedEnginePhotoOne = entity.stoppedEnginePhotoOne;
    this.stoppedEngineCommentOne = entity.stoppedEngineCommentOne;
    this.stoppedEngineNameTwo = entity.stoppedEngineNameTwo;
    this.stoppedEngineFoggingTwo = entity.stoppedEngineFoggingTwo;
    this.stoppedEnginePhotoTwo = entity.stoppedEnginePhotoTwo;
    this.stoppedEngineCommenTwo = entity.stoppedEngineCommenTwo;
    this.stoppedEngineNameThree = entity.stoppedEngineNameThree;
    this.stoppedEngineFoggingThree = entity.stoppedEngineFoggingThree;
    this.stoppedEnginePhotoThree = entity.stoppedEnginePhotoThree;
    this.stoppedEngineCommentThree = entity.stoppedEngineCommentThree;

    this.stoppedEnginePipesFogging = entity.stoppedEnginePipesFogging;
    this.stoppedEnginePipesSmudges = entity.stoppedEnginePipesSmudges;
    this.stoppedEnginePipesPhoto = entity.stoppedEnginePipesPhoto;
    this.stoppedEnginePipesComment = entity.stoppedEnginePipesComment;
  
    this.stoppedEngineValveCoverFogging = entity.stoppedEngineValveCoverFogging;
    this.stoppedEngineValveCoverSmudges = entity.stoppedEngineValveCoverSmudges;
    this.stoppedEngineValveCoverPhoto = entity.stoppedEngineValveCoverPhoto;
    this.stoppedEngineValveCoverComment = entity.stoppedEngineValveCoverComment;
  
    this.stoppedEngineCamshaftSensorFogging = entity.stoppedEngineCamshaftSensorFogging;
    this.stoppedEngineCamshaftSensorSmudges = entity.stoppedEngineCamshaftSensorSmudges;
    this.stoppedEngineCamshaftSensorPhoto = entity.stoppedEngineCamshaftSensorPhoto;
    this.stoppedEngineCamshaftSensorComment = entity.stoppedEngineCamshaftSensorComment;
  
    this.stoppedEngineOilPressureSensorFogging = entity.stoppedEngineOilPressureSensorFogging;
    this.stoppedEngineOilPressureSensorSmudges = entity.stoppedEngineOilPressureSensorSmudges;
    this.stoppedEngineOilPressureSensorPhoto = entity.stoppedEngineOilPressureSensorPhoto;
    this.stoppedEngineOilPressureSensorComment = entity.stoppedEngineOilPressureSensorComment;
  
    this.stoppedEngineCrankshaftOilSealFogging = entity.stoppedEngineCrankshaftOilSealFogging;
    this.stoppedEngineCrankshaftOilSealSmudges = entity.stoppedEngineCrankshaftOilSealSmudges;
    this.stoppedEngineCrankshaftOilSealPhoto = entity.stoppedEngineCrankshaftOilSealPhoto;
    this.stoppedEngineCrankshaftOilSealComment = entity.stoppedEngineCrankshaftOilSealComment;
  
    this.stoppedEngineCamshaftOilSealFogging = entity.stoppedEngineCamshaftOilSealFogging;
    this.stoppedEngineCamshaftOilSealSmudges = entity.stoppedEngineCamshaftOilSealSmudges;
    this.stoppedEngineCamshaftOilSealPhoto = entity.stoppedEngineCamshaftOilSealPhoto;
    this.stoppedEngineCamshaftOilSealComment = entity.stoppedEngineCamshaftOilSealComment;
  
    this.stoppedEngineCrankcaseFogging = entity.stoppedEngineCrankcaseFogging;
    this.stoppedEngineCrankcaseSmudges = entity.stoppedEngineCrankcaseSmudges;
    this.stoppedEngineCrankcasePhoto = entity.stoppedEngineCrankcasePhoto;
    this.stoppedEngineCrankcaseComment = entity.stoppedEngineCrankcaseComment;
  
    this.stoppedEngineGurFogging = entity.stoppedEngineGurFogging;
    this.stoppedEngineGurSmudges = entity.stoppedEngineGurSmudges;
    this.stoppedEngineGurPhoto = entity.stoppedEngineGurPhoto;
    this.stoppedEngineGurComment = entity.stoppedEngineGurComment;
  
    this.stoppedEngineSteeringRackFogging = entity.stoppedEngineSteeringRackFogging;
    this.stoppedEngineSteeringRackSmudges = entity.stoppedEngineSteeringRackSmudges;
    this.stoppedEngineSteeringRackPhoto = entity.stoppedEngineSteeringRackPhoto;
    this.stoppedEngineSteeringRackComment = entity.stoppedEngineSteeringRackComment;
  
    this.stoppedEngineShockAbsorbersFogging = entity.stoppedEngineShockAbsorbersFogging;
    this.stoppedEngineShockAbsorbersSmudges = entity.stoppedEngineShockAbsorbersSmudges;
    this.stoppedEngineShockAbsorbersPhoto = entity.stoppedEngineShockAbsorbersPhoto;
    this.stoppedEngineShockAbsorbersComment = entity.stoppedEngineShockAbsorbersComment;

    this.runningEngineEngineNotStart = entity.runningEngineEngineNotStart;
    this.runningEngineComment = entity.runningEngineComment;
    this.runningEngineEngineVideo = entity.runningEngineEngineVideo;
    this.runningEngineAllSystemOkElectric = entity.runningEngineAllSystemOkElectric;
    this.runningEngineAllSystemOkMechanical = entity.runningEngineAllSystemOkMechanical;
  
    this.runningEngineElectricalNameOne = entity.runningEngineElectricalNameOne;
    this.runningEngineElectricalIsCheckOne = entity.runningEngineElectricalIsCheckOne;
    this.runningEngineElectricalCommentOne = entity.runningEngineElectricalCommentOne;
    this.runningEngineElectricalNameTwo = entity.runningEngineElectricalNameTwo;
    this.runningEngineElectricalIsCheckTwo = entity.runningEngineElectricalIsCheckTwo;
    this.runningEngineElectricalCommentTwo = entity.runningEngineElectricalCommentTwo;
    this.runningEngineElectricalNameThree = entity.runningEngineElectricalNameThree;
    this.runningEngineElectricalIsCheckThree = entity.runningEngineElectricalIsCheckThree;
    this.runningEngineElectricalCommentThree = entity.runningEngineElectricalCommentThree;
  
    this.runningEngineMechanicalNameOne = entity.runningEngineMechanicalNameOne;
    this.runningEngineMechanicalIsCheckOne = entity.runningEngineMechanicalIsCheckOne;
    this.runningEngineMechanicalCommentOne = entity.runningEngineMechanicalCommentOne;
    this.runningEngineMechanicalNameTwo = entity.runningEngineMechanicalNameTwo;
    this.runningEngineMechanicalIsCheckTwo = entity.runningEngineMechanicalIsCheckTwo;
    this.runningEngineMechanicalCommentTwo = entity.runningEngineMechanicalCommentTwo;
    this.runningEngineMechanicalNameThree = entity.runningEngineMechanicalNameThree;
    this.runningEngineMechanicalIsCheckThree = entity.runningEngineMechanicalIsCheckThree;
    this.runningEngineMechanicalCommentThree = entity.runningEngineMechanicalCommentThree;

    this.runningEngineElectricalBattery = entity.runningEngineElectricalBattery;
    this.runningEngineElectricalBatteryComment = entity.runningEngineElectricalBatteryComment;
  
    this.runningEngineElectricalLightingEngineering = entity.runningEngineElectricalLightingEngineering;
    this.runningEngineElectricalLightingEngineeringComment = entity.runningEngineElectricalLightingEngineeringComment;
  
    this.runningEngineElectricalAudiosystem = entity.runningEngineElectricalAudiosystem;
    this.runningEngineElectricalAudiosystemComment = entity.runningEngineElectricalAudiosystemComment;
  
    this.runningEngineElectricalHeatedSteeringWheel = entity.runningEngineElectricalHeatedSteeringWheel;
    this.runningEngineElectricalHeatedSteeringWheelComment = entity.runningEngineElectricalHeatedSteeringWheelComment;
  
    this.runningEngineElectricalSoundSignal = entity.runningEngineElectricalSoundSignal;
    this.runningEngineElectricalSoundSignalComment = entity.runningEngineElectricalSoundSignalComment;
  
    this.runningEngineElectricalSeatMassage = entity.runningEngineElectricalSeatMassage;
    this.runningEngineElectricalSeatMassageComment = entity.runningEngineElectricalSeatMassageComment;
  
    this.runningEngineElectricalWindshieldWashers = entity.runningEngineElectricalWindshieldWashers;
    this.runningEngineElectricalWindshieldWashersComment = entity.runningEngineElectricalWindshieldWashersComment;
  
    this.runningEngineElectricalHeatedSeats = entity.runningEngineElectricalHeatedSeats;
    this.runningEngineElectricalHeatedSeatsComment = entity.runningEngineElectricalHeatedSeatsComment;
  
    this.runningEngineElectricalWindshieldWipers = entity.runningEngineElectricalWindshieldWipers;
    this.runningEngineElectricalWindshieldWipersComment = entity.runningEngineElectricalWindshieldWipersComment;
  
    this.runningEngineElectricalWindowLifters = entity.runningEngineElectricalWindowLifters;
    this.runningEngineElectricalWindowLiftersComment = entity.runningEngineElectricalWindowLiftersComment;
  
    this.runningEngineElectricalElectricSunroof = entity.runningEngineElectricalElectricSunroof;
    this.runningEngineElectricalElectricSunroofComment = entity.runningEngineElectricalElectricSunroofComment;
  
    this.runningEngineElectricalElectricSteering = entity.runningEngineElectricalElectricSteering;
    this.runningEngineElectricalElectricSteeringComment = entity.runningEngineElectricalElectricSteeringComment;
  
    this.runningEngineElectricalElectricMirrors = entity.runningEngineElectricalElectricMirrors;
    this.runningEngineElectricalElectricMirrorsComment = entity.runningEngineElectricalElectricMirrorsComment;
  
    this.runningEngineElectricalElectricSeats = entity.runningEngineElectricalElectricSeats;
    this.runningEngineElectricalElectricSeatsComment = entity.runningEngineElectricalElectricSeatsComment;
  
    this.runningEngineElectricalElectricPanorama = entity.runningEngineElectricalElectricPanorama;
    this.runningEngineElectricalElectricPanoramaComment = entity.runningEngineElectricalElectricPanoramaComment;
  
    this.runningEngineElectricalHeatedWindshield = entity.runningEngineElectricalHeatedWindshield;
    this.runningEngineElectricalHeatedWindshieldComment = entity.runningEngineElectricalHeatedWindshieldComment;
  
    this.runningEngineElectricalElectricTrunkDrive = entity.runningEngineElectricalElectricTrunkDrive;
    this.runningEngineElectricalElectricTrunkDriveComment = entity.runningEngineElectricalElectricTrunkDriveComment;

    this.runningEngineMechanicalGearShifting = entity.runningEngineMechanicalGearShifting;
    this.runningEngineMechanicalGearShiftingComment = entity.runningEngineMechanicalGearShiftingComment;
  
    this.runningEngineMechanicalEngineOperation = entity.runningEngineMechanicalEngineOperation;
    this.runningEngineMechanicalEngineOperationComment = entity.runningEngineMechanicalEngineOperationComment;
  
    this.runningEngineMechanicalInteriorHeater = entity.runningEngineMechanicalInteriorHeater;
    this.runningEngineMechanicalInteriorHeaterComment = entity.runningEngineMechanicalInteriorHeaterComment;
  
    this.runningEngineMechanicalPowerSteering = entity.runningEngineMechanicalPowerSteering;
    this.runningEngineMechanicalPowerSteeringComment = entity.runningEngineMechanicalPowerSteeringComment;
  
    this.runningEngineMechanicalAirConditioner = entity.runningEngineMechanicalAirConditioner;
    this.runningEngineMechanicalAirConditionerComment = entity.runningEngineMechanicalAirConditionerComment;

    this.dashboardNoErrors = entity.dashboardNoErrors;
    this.dashboardDiagnosticsFile = entity.dashboardDiagnosticsFile;
    this.dashboardDiagnosticsComment = entity.dashboardDiagnosticsComment;
    this.dashboardMileageOnDashboard = entity.dashboardMileageOnDashboard;
    this.dashboardMileageInTheEngineBlock = entity.dashboardMileageInTheEngineBlock;
    this.dashboardMileageInTheGearbox = entity.dashboardMileageInTheGearbox;
    this.dashboardMileageInAdditionalBlocks = entity.dashboardMileageInAdditionalBlocks;
    this.dashboardIsNoMileage = entity.dashboardIsNoMileage;
    this.dashboardTotalComment = entity.dashboardTotalComment;
    this.dashboardNameOne = entity.dashboardNameOne;
    this.dashboardIsCheckOne = entity.dashboardIsCheckOne;
    this.dashboardCommentOne = entity.dashboardCommentOne;
    this.dashboardNameTwo = entity.dashboardNameTwo;
    this.dashboardIsCheckTwo = entity.dashboardIsCheckTwo;
    this.dashboardCommentTwo = entity.dashboardCommentTwo;
    this.dashboardNameThree = entity.dashboardNameThree;
    this.dashboardIsCheckThree = entity.dashboardIsCheckThree;
    this.dashboardCommentThree = entity.dashboardCommentThree;

    this.dashboardABS = entity.dashboardABS;
    this.dashboardABSComment = entity.dashboardABSComment;
  
    this.dashboardESP = entity.dashboardESP;
    this.dashboardESPComment = entity.dashboardESPComment;
  
    this.dashboardAirbag = entity.dashboardAirbag;
    this.dashboardAirbagComment = entity.dashboardAirbagComment;
  
    this.dashboardCheckEngine = entity.dashboardCheckEngine;
    this.dashboardCheckEngineComment = entity.dashboardCheckEngineComment;
  
    this.dashboardBattery = entity.dashboardBattery;
    this.dashboardBatteryComment = entity.dashboardBatteryComment;
  
    this.dashboardTirePressure = entity.dashboardTirePressure;
    this.dashboardTirePressureComment = entity.dashboardTirePressureComment;
  
    this.dashboardOilPressure = entity.dashboardOilPressure;
    this.dashboardOilPressureComment = entity.dashboardOilPressureComment;

    this.testDriveAllSystemOk = entity.testDriveAllSystemOk;
    this.testDriveNameOne = entity.testDriveNameOne;
    this.testDriveIsCheckOne = entity.testDriveIsCheckOne;
    this.testDriveCommentOne = entity.testDriveCommentOne;
    this.testDriveNameTwo = entity.testDriveNameTwo;
    this.testDriveIsCheckTwo = entity.testDriveIsCheckTwo;
    this.testDriveCommentTwo = entity.testDriveCommentTwo;
    this.testDriveNameThree = entity.testDriveNameThree;
    this.testDriveIsCheckThree = entity.testDriveIsCheckThree;
    this.testDriveCommentThree = entity.testDriveCommentThree;

    this.testDriveSuspension = entity.testDriveSuspension;
    this.testDriveSuspensionComment = entity.testDriveSuspensionComment;
  
    this.testDriveEngine = entity.testDriveEngine;
    this.testDriveEngineComment = entity.testDriveEngineComment;
  
    this.testDriveTransmission = entity.testDriveTransmission;
    this.testDriveTransmissionComment = entity.testDriveTransmissionComment;
  
    this.testDriveSteering = entity.testDriveSteering;
    this.testDriveSteeringComment = entity.testDriveSteeringComment;
  
    this.testDriveBrakeSystem = entity.testDriveBrakeSystem;
    this.testDriveBrakeSystemComment = entity.testDriveBrakeSystemComment;
  
    this.testDriveParkingBrake = entity.testDriveParkingBrake;
    this.testDriveParkingBrakeComment = entity.testDriveParkingBrakeComment;
  
    this.testDriveExhaustSystem = entity.testDriveExhaustSystem;
    this.testDriveExhaustSystemComment = entity.testDriveExhaustSystemComment;

    this.expertOpinionPlusComment = entity.expertOpinionPlusComment;
    this.expertOpinionMinusComment = entity.expertOpinionMinusComment;
    this.expertOpinionTotalComment = entity.expertOpinionTotalComment;
    this.expertOpinionHistoryFile = entity.expertOpinionHistoryFile;
    this.expertOpinionHistoryComment = entity.expertOpinionHistoryComment;

    this.serviceInspectionCompressionCheck = entity.serviceInspectionCompressionCheck;
    this.serviceInspectionEndoscopeCheck = entity.serviceInspectionEndoscopeCheck;
    this.serviceInspectionEngineInspection = entity.serviceInspectionEngineInspection;
    this.serviceInspectionCheckpointInspection = entity.serviceInspectionCheckpointInspection;
    this.serviceInspectionPowerSteeringInspection = entity.serviceInspectionPowerSteeringInspection;
    this.serviceInspectionTransferCaseInspection = entity.serviceInspectionTransferCaseInspection;
    this.serviceInspectionRearAxleInspection = entity.serviceInspectionRearAxleInspection;
    this.serviceInspectionFrontAxleInspection = entity.serviceInspectionFrontAxleInspection;
    this.serviceInspectionSteeringRackInspection = entity.serviceInspectionSteeringRackInspection;
    this.serviceInspectionChassisInspection = entity.serviceInspectionChassisInspection;

    this.createdAt = new Date();
    this.publishAt = new Date();
  }

  public toObject(): BetcarReportEntity {
    return { 
      ...this,
    };
  }
}