export interface Report {
  reportId?: number;
  userId: number;
  userEmail?: string;
  reportNumber?: number;
  title?: string;
  isPrime?: boolean;

  sellerDetailsRefusalOfInspection?: boolean;
  sellerDetailsLinkToAd?: string;
  sellerDetailsName?: string;
  sellerDetailsPhone?: string;
  sellerDetailsCarCost?: string;
  sellerDetailsRole?: string;
  sellerDetailsComment?: string;

  vinNumber?: string;
  vinBodyNumberExpertConfirm?: boolean;
  vinBodyNumberNumberState?: boolean[];
  vinBodyNumberPhoto?: string[];
  vinBodyNumberComment?: string;
  frameNumber?: string;
  frameNumberExpertConfirm?: boolean;
  frameNumberNumberState?: boolean[];
  frameNumberPhoto?: string[];
  frameNumberComment?: string;
  stateNumberAbsent?: boolean;
  stateNumberForeign?: boolean;
  stateNumberStateNumber?: string;
  stateNumberComment?: string;
  tCPAbsent?: boolean;
  tCPType?: string;
  tCPPhoto?: string[];
  tCPNumberOfOwners?: string;
  tCPComment?: string;
  sTSAbsent?: boolean;
  sTSPhoto?: string[];
  sTSComment?: string;
  carDataCarBrand?: string;
  carDataCarModel?: string;
  carDataManufactureYear?: string;
  carDataColor?: string;
  carDataBodyType?: string;
  carDataEnginesType?: string;
  carDataGearboxType?: string;
  carDataDriveUnit?: string;
  carDataSteeringWheelLocation?: string;
  engineNumber?: string;
  engineNumberExpertConfirm?: boolean;
  engineNumberNumberState?: boolean[];
  engineNumberPhoto?: string[];
  engineNumberComment?: string;
  carDataEngineCapacity?: string;
  carDataPower?: string;
  carDataServiceBook?: string;
  additionalDocumentsComment?: string;
  additionalDocumentsPhoto?: string[];

  locationCountry?: string;
  locationRegion?: string;
  locationCity?: string;
  locationAddress?: string;
  locationComment?: string;

  complectationBodyRoofRails?: boolean;
  complectationBodyBodyStickers?: boolean;
  complectationBodyAirbrushing?: boolean;
  complectationBodyBodyTuning?: boolean;
  complectationBodyBodyInFilm?: boolean;

  complectationWheelsIsTiresIdentical?: boolean;
  complectationWheelsAdditionalTireSets?: boolean;
  complectationWheelsAdditionalSetsOfDisks?: boolean;
  complectationWheelsTypeOfDisks?: string;
  complectationWheelsSeasonality?: string;
  complectationWheelsFrontLeftBrand?: string;
  complectationWheelsBackLeftBrand?: string;
  complectationWheelsFrontRightBrand?: string;
  complectationWheelsBackRightBrand?: string;
  complectationWheelsFrontLeftModel?: string;
  complectationWheelsBackLeftModel?: string;
  complectationWheelsFrontRightModel?: string;
  complectationWheelsBackRightModel?: string;
  complectationWheelsFrontLeftIssueDate?: string;
  complectationWheelsBackLeftIssueDate?: string;
  complectationWheelsFrontRightIssueDate?: string;
  complectationWheelsBackRightIssueDate?: string;
  complectationWheelsFrontLeftOptions?: string[];
  complectationWheelsBackLeftOptions?: string[];
  complectationWheelsFrontRightOptions?: string[];
  complectationWheelsBackRightOptions?: string[];
  complectationWheelsFrontLeftWear?: string;
  complectationWheelsBackLeftWear?: string;
  complectationWheelsFrontRightWear?: string;
  complectationWheelsBackRightWear?: string;
  complectationWheelsAdditionalTiresSeasonality?: string[];
  complectationWheelsAdditionalDisksType?: string;

  complectationSalonLuke?: boolean;
  complectationSalonSeatCovers?: boolean;
  complectationSalonPanoramicView?: boolean;
  complectationSalonThirdRowOfSeats?: boolean;
  complectationSalonTintedGlass?: boolean;
  complectationSalonSteeringWheelHeating?: boolean;
  complectationSalonLeatherTrimmedGearshiftLever?: boolean;
  complectationSalonSportsFrontSeats?: boolean;
  complectationSalonSteeringWheelLeatherTrim?: boolean;
  complectationSalonFoldingRearSeat?: boolean;
  complectationSalonFrontCenterArmrest?: boolean;
  complectationSalonInteriorMaterial?: string;
  complectationSalonHeatedSeats?: string[];
  complectationSalonSeatHeightAdjustment?: string;
  complectationSalonElectricallyAdjustableSeats?: string[];
  complectationSalonSeatPositionMemory?: string;
  complectationSalonSeatVentilation?: string[];
  complectationSalonSeatMassage?: string[];

  complectationHeadlightsLightSensor?: boolean;
  complectationHeadlightsRainSensor?: boolean;
  complectationHeadlightsHeadlightWasher?: boolean;
  complectationHeadlightsFogLights?: boolean;
  complectationHeadlightsAutomaticHeadlightLeveling?: boolean;
  complectationHeadlightsAdaptivLlightingSystem?: boolean;
  complectationHeadlightsHighBeamControlSystem?: boolean;
  complectationHeadlightsHeadlights?: string;

  complectationMultimediaCd?: boolean;
  complectationMultimediaTv?: boolean;
  complectationMultimediaUsb?: boolean;
  complectationMultimediaAux?: boolean;
  complectationMultimediaDvd?: boolean;
  complectationMultimediaCassette?: boolean;
  complectationMultimediaCarPlay?: boolean;
  complectationMultimediaBluetooth?: boolean;
  complectationMultimediaSubwoofer?: boolean;
  complectationMultimediaVoiceControl?: boolean;
  complectationMultimediaNavigationSystem?: boolean;
  complectationMultimediaMultimediaSystemForRearPassengers?: boolean;

  complectationComfortStartStopSystem?: boolean;
  complectationComfortOnBoardComputer?: boolean;
  complectationComfortElectricMirrors?: boolean;
  complectationComfortPreheater?: boolean;
  complectationComfortEngineStartButton?: boolean;
  complectationComfortKeylessEntrySystem?: boolean;
  complectationComfortHandsFreeTrunkOpening?: boolean;
  complectationComfortElectrofoldingOfMirrors?: boolean;
  complectationComfortMultifunctionSteeringWheel?: boolean;
  complectationComfortTouchControlPanel?: boolean;
  complectationComfortGearshiftPaddles?: boolean;
  complectationComfortAdjustablePedalAssembly?: boolean;
  complectationComfortElectronicDashboard?: boolean;
  complectationComfortRemoteEngineStart?: boolean;
  complectationComfortElectricTrunkLid?: boolean;
  complectationComfortCamera?: string[];
  complectationComfortSuspension?: string[];
  complectationComfortAirConditioner?: string;
  complectationComfortPowerSteering?: string;
  complectationComfortCruiseControl?: string;
  complectationComfortElectricHeating?: string[];
  complectationComfortSteeringWheelAdjustment?: string[];
  complectationComfortParkingAssistanceSystem?: string[];
  complectationComfortElectricLifts?: string[];

  complectationSafetyEraGlonass?: boolean;
  complectationSafetyLocking?: boolean;
  complectationSafetyArmoredBody?: boolean;
  complectationSafetyAirbags?: string[];
  complectationSafetyIsofix?: string[];
  complectationSafetyAuxiliarySystems?: string[];

  complectationProtectionLabel?: boolean;
  complectationProtectionImmobilizer?: boolean;
  complectationProtectionCentralLocking?: boolean;
  complectationProtectionAuthorsSecuritySystem?: boolean;
  complectationProtectionInteriorIntrusionSensor?: boolean;
  complectationProtectionSignaling?: string;

  complectationOtherTowBar?: boolean;
  complectationOtherWinch?: boolean;
  complectationOtherAirbox?: boolean;
  complectationOtherCrankcaseProtection?: boolean;
  complectationOtherTransverseArches?: boolean;
  complectationOtherGasEquipment?: boolean;
  complectationOtherNumberOfKeys?: string;
  complectationOtherSpareWheel?: string;

  paintworkInspectionFactoryColor?: boolean;
  paintworkInspectionBodyInFilm?: boolean;
  paintworkInspectionRoof?: string[];
  paintworkInspectionTrunkLid?: string[];
  paintworkInspectionRightRearFender?: string[];
  paintworkInspectionRightRearPillar?: string[];
  paintworkInspectionRightRearDoor?: string[];
  paintworkInspectionRightRearDoorOpening?: string[];
  paintworkInspectionRightCenterPillar?: string[];
  paintworkInspectionRightThreshold?: string[];
  paintworkInspectionRightFrontDoor?: string[];
  paintworkInspectionRightFrontDoorOpening?: string[];
  paintworkInspectionRightFrontPillar?: string[];
  paintworkInspectionRightFrontFender?: string[];
  paintworkInspectionHood?: string[];
  paintworkInspectionLeftFrontFender?: string[];
  paintworkInspectionLeftFrontPillar?: string[];
  paintworkInspectionLeftFrontDoor?: string[];
  paintworkInspectionLeftFrontDoorOpening?: string[];
  paintworkInspectionLeftCenterPillar?: string[];
  paintworkInspectionLeftThreshold?: string[];
  paintworkInspectionLeftRearDoor?: string[];
  paintworkInspectionLeftRearDoorOpening?: string[];
  paintworkInspectionLeftRearPillar?: string[];
  paintworkInspectionLeftRearFender?: string[];
  paintworkInspectionAddNameOne?: string;
  paintworkInspectionAddInfoOne?: string[];
  paintworkInspectionAddNameTwo?: string;
  paintworkInspectionAddInfTwo?: string[];
  paintworkInspectionAddNameThree?: string;
  paintworkInspectionAddInfoThree?: string[];

  engineCompartmentDamageWithoutDamage?: boolean;
  engineCompartmentDamageLeftSideMember?: string[];
  engineCompartmentDamageLeftGlass?: string[];
  engineCompartmentDamageRightSideMember?: string[];
  engineCompartmentDamageRightGlass?: string[];
  engineCompartmentDamageHoodHinges?: string[]; 
  engineCompartmentDamageTelevisor?: string[];
  engineCompartmentDamageMotorShield?: string[];
  engineCompartmentDamageAddNameOne?: string;
  engineCompartmentDamageAddInfoOne?: string[];
  engineCompartmentDamageAddNameTwo?: string;
  engineCompartmentDamageAddInfTwo?: string[];
  engineCompartmentDamageAddNameThree?: string;
  engineCompartmentDamageAddInfoThree?: string[];

  frontSideDamageWithoutDamage?: boolean;
  frontSideDamageFogLights?: string[]; 
  frontSideDamageRadiatorGrille?: string[]; 
  frontSideDamageFrontBumper?: string[]; 
  frontSideDamageRightHeadlight?: string[]; 
  frontSideDamageLeftHeadlight?: string[]; 
  frontSideDamageHood?: string[]; 
  frontSideDamageAddNameOne?: string;
  frontSideDamageAddInfoOne?: string[];
  frontSideDamageAddNameTwo?: string;
  frontSideDamageAddInfTwo?: string[];
  frontSideDamageAddNameThree?: string;
  frontSideDamageAddInfoThree?: string[];

  leftSideDamageWithoutDamage?: boolean;
  leftSideDamageLeftFrontFender?: string[]; 
  leftSideDamageLeftFrontPillar?: string[]; 
  leftSideDamageLeftFrontDoor?: string[]; 
  leftSideDamageLeftCenterPillar?: string[]; 
  leftSideDamageLeftRearDoor?: string[]; 
  leftSideDamageLeftRearPillar?: string[]; 
  leftSideDamageLeftRearFender?: string[]; 
  leftSideDamageLeftMirror?: string[]; 
  leftSideDamageLeftThreshold?: string[]; 
  leftSideDamageAddNameOne?: string;
  leftSideDamageAddInfoOne?: string[];
  leftSideDamageAddNameTwo?: string;
  leftSideDamageAddInfTwo?: string[];
  leftSideDamageAddNameThree?: string;
  leftSideDamageAddInfoThree?: string[];

  backSideDamageWithoutDamage?: boolean;
  backSideDamageTailgate?: string[]; 
  backSideDamageRearBumper?: string[]; 
  backSideDamageLeftLamp?: string[]; 
  backSideDamageRightLamp?: string[]; 
  backSideDamageAddNameOne?: string;
  backSideDamageAddInfoOne?: string[];
  backSideDamageAddNameTwo?: string;
  backSideDamageAddInfTwo?: string[];
  backSideDamageAddNameThree?: string;
  backSideDamageAddInfoThree?: string[];

  trunkDamageWithoutDamage?: boolean;
  trunkDamageCoverTrim?: string[]; 
  trunkDamageCarpetFloor?: string[]; 
  trunkDamageRightTrim?: string[]; 
  trunkDamageRightGlass?: string[]; 
  trunkDamageLeftTrim?: string[]; 
  trunkDamageLeftGlass?: string[]; 
  trunkDamageSeatBackTrim?: string[]; 
  trunkDamageSpareWheelWell?: string[]; 
  trunkDamageAddNameOne?: string;
  trunkDamageAddInfoOne?: string[];
  trunkDamageAddNameTwo?: string;
  trunkDamageAddInfTwo?: string[];
  trunkDamageAddNameThree?: string;
  trunkDamageAddInfoThree?: string[];

  rightSideDamageWithoutDamage?: boolean;
  rightSideDamageRightFrontFender?: string[]; 
  rightSideDamageRightFrontPillar?: string[]; 
  rightSideDamageRightFrontDoor?: string[]; 
  rightSideDamageRightCenterPillar?: string[]; 
  rightSideDamageRightRearDoor?: string[]; 
  rightSideDamageRightRearPillar?: string[]; 
  rightSideDamageRightRearFender?: string[]; 
  rightSideDamageRightMirror?: string[]; 
  rightSideDamageRightThreshold?: string[]; 
  rightSideDamageAddNameOne?: string;
  rightSideDamageAddInfoOne?: string[];
  rightSideDamageAddNameTwo?: string;
  rightSideDamageAddInfTwo?: string[];
  rightSideDamageAddNameThree?: string;
  rightSideDamageAddInfoThree?: string[];

  roofDamageWithoutDamage?: boolean;
  roofDamageRoofRails?: string[];
  roofDamageRoof?: string[];
  roofDamageLuke?: string[];
  roofDamagePanorama?: string[];
  roofDamageAddNameOne?: string;
  roofDamageAddInfoOne?: string[];
  roofDamageAddNameTwo?: string;
  roofDamageAddInfTwo?: string[];
  roofDamageAddNameThree?: string;
  roofDamageAddInfoThree?: string[];

  glassDamageWithoutDamage?: boolean;
  glassDamageAllGlassIsFactory?: boolean;
  glassDamageWindshield?: string[];
  glassDamageLeftFrontGlass?: string[];
  glassDamageLeftRearGlass?: string[];
  glassDamageRearGlass?: string[];
  glassDamageRightFrontGlass?: string[];
  glassDamageRightRearGlass?: string[];
  glassDamageAddNameOne?: string;
  glassDamageAddInfoOne?: string[];
  glassDamageAddNameTwo?: string;
  glassDamageAddInfTwo?: string[];
  glassDamageAddNameThree?: string;
  glassDamageAddInfoThree?: string[];

  discDamageWithoutDamage?: boolean;
  discDamageLeftFrontDisc?: string[];
  discDamageLeftRearDisc?: string[];
  discDamageRightFrontDisc?: string[];
  discDamageRightRearDisc?: string[];
  discDamageAddNameOne?: string;
  discDamageAddInfoOne?: string[];
  discDamageAddNameTwo?: string;
  discDamageAddInfTwo?: string[];
  discDamageAddNameThree?: string;
  discDamageAddInfoThree?: string[];

  interiorDamageWithoutDamage?: boolean;
  interiorDamageFrontLeftDoorCard?: string[];
  interiorDamageDriversSeat?: string[];
  interiorDamageSalonCarpet?: string[];
  interiorDamageTorpedo?: string[];
  interiorDamageCeiling?: string[];
  interiorDamageBackLeftDoorCard?: string[];
  interiorDamageBackSeat?: string[];
  interiorDamageBackRightDoorCard?: string[];
  interiorDamageFrontRightDoorCard?: string[];
  interiorDamagePassengerSeat?: string[];
  interiorDamageSleepingCompartment?: string[];
  interiorDamageAddNameOne?: string;
  interiorDamageAddInfoOne?: string[];
  interiorDamageAddNameTwo?: string;
  interiorDamageAddInfTwo?: string[];
  interiorDamageAddNameThree?: string;
  interiorDamageAddInfoThree?: string[];

  exteriorPhotoRightFrontPhoto?: string;
  exteriorPhotoFrontPhoto?: string;
  exteriorPhotoLeftFrontPhoto?: string;
  exteriorPhotoRightBackPhoto?: string;
  exteriorPhotoBackPhoto?: string;
  exteriorPhotoLeftBackPhoto?: string;
  exteriorPhotoLeftPhoto?: string;
  exteriorPhotoRightPhoto?: string;
  exteriorPhotoHoodOpen?: string;
  exteriorPhotoTrunkOpen?: string;
  exteriorPhotoAddPhoto?: string[];

  interiorPhotoLeftFrontDoor?: string;
  interiorPhotoDriverSeatPhoto?: string;
  interiorPhotoSteeringWheelPhoto?: string;
  interiorPhotoDashboardPhoto?: string;
  interiorPhotoLeftBackDoor?: string;
  interiorPhotoBackLeftSeatsPhoto?: string;
  interiorPhotoFrontSeatsPhoto?: string;
  interiorPhotoRightBackDoor?: string;
  interiorPhotoBackRightSeatsPhoto?: string;
  interiorPhotoRightFrontDoor?: string;
  interiorPhotoPassengerSeatPhoto?: string;
  interiorPhotoAddPhoto?: string[];

  roundViewVideoVideo?: string;
  roundViewVideoComment?: string;

  stoppedEngineIsNew?: boolean;
  stoppedEngineIsNotGo?: boolean;
  stoppedEngineIsEmergency?: boolean;
  stoppedEngineIsUnderstaffed?: boolean;
  stoppedEngineComment?: string;
  stoppedEngineEngineOilLevel?: string;
  stoppedEngineGearboxOilLevel?: string;
  stoppedEngineGurLiquidLevel?: string;
  stoppedEngineBrakeFluidLevel?: string;
  stoppedEngineCoolantLevel?: string;
  stoppedEngineTechnicalFluidsComment?: string;
  stoppedEngineDriveBelts?: string;
  stoppedEngineBrakeDiscs?: string;
  stoppedEngineBrakePads?: string;
  stoppedEngineWearComment?: string;
  stoppedEngineIsFogging?: boolean;

  stoppedEnginePipesFogging?: boolean;
  stoppedEnginePipesSmudges?: boolean;
  stoppedEnginePipesPhoto?: string;
  stoppedEnginePipesComment?: string;

  stoppedEngineValveCoverFogging?: boolean;
  stoppedEngineValveCoverSmudges?: boolean;
  stoppedEngineValveCoverPhoto?: string;
  stoppedEngineValveCoverComment?: string;

  stoppedEngineCamshaftSensorFogging?: boolean;
  stoppedEngineCamshaftSensorSmudges?: boolean;
  stoppedEngineCamshaftSensorPhoto?: string;
  stoppedEngineCamshaftSensorComment?: string;

  stoppedEngineOilPressureSensorFogging?: boolean;
  stoppedEngineOilPressureSensorSmudges?: boolean;
  stoppedEngineOilPressureSensorPhoto?: string;
  stoppedEngineOilPressureSensorComment?: string;

  stoppedEngineCrankshaftOilSealFogging?: boolean;
  stoppedEngineCrankshaftOilSealSmudges?: boolean;
  stoppedEngineCrankshaftOilSealPhoto?: string;
  stoppedEngineCrankshaftOilSealComment?: string;

  stoppedEngineCamshaftOilSealFogging?: boolean;
  stoppedEngineCamshaftOilSealSmudges?: boolean;
  stoppedEngineCamshaftOilSealPhoto?: string;
  stoppedEngineCamshaftOilSealComment?: string;

  stoppedEngineCrankcaseFogging?: boolean;
  stoppedEngineCrankcaseSmudges?: boolean;
  stoppedEngineCrankcasePhoto?: string;
  stoppedEngineCrankcaseComment?: string;

  stoppedEngineGurFogging?: boolean;
  stoppedEngineGurSmudges?: boolean;
  stoppedEngineGurPhoto?: string;
  stoppedEngineGurComment?: string;

  stoppedEngineSteeringRackFogging?: boolean;
  stoppedEngineSteeringRackSmudges?: boolean;
  stoppedEngineSteeringRackPhoto?: string;
  stoppedEngineSteeringRackComment?: string;

  stoppedEngineShockAbsorbersFogging?: boolean;
  stoppedEngineShockAbsorbersSmudges?: boolean;
  stoppedEngineShockAbsorbersPhoto?: string;
  stoppedEngineShockAbsorbersComment?: string;

  stoppedEngineNameOne?: string;
  stoppedEngineFoggingOne?: string[];
  stoppedEnginePhotoOne?: string[];
  stoppedEngineCommentOne?: string;
  stoppedEngineNameTwo?: string;
  stoppedEngineFoggingTwo?: string[];
  stoppedEnginePhotoTwo?: string[];
  stoppedEngineCommenTwo?: string;
  stoppedEngineNameThree?: string;
  stoppedEngineFoggingThree?: string[];
  stoppedEnginePhotoThree?: string[];
  stoppedEngineCommentThree?: string;

  runningEngineEngineNotStart?: boolean;
  runningEngineComment?: string;
  runningEngineEngineVideo?: string;
  runningEngineAllSystemOkElectric?: boolean;
  runningEngineAllSystemOkMechanical?: boolean;

  runningEngineElectricalNameOne?: string;
  runningEngineElectricalIsCheckOne?: boolean;
  runningEngineElectricalCommentOne?: string;
  runningEngineElectricalNameTwo?: string;
  runningEngineElectricalIsCheckTwo?: boolean;
  runningEngineElectricalCommentTwo?: string;
  runningEngineElectricalNameThree?: string;
  runningEngineElectricalIsCheckThree?: boolean;
  runningEngineElectricalCommentThree?: string;

  runningEngineElectricalBattery?: boolean;
  runningEngineElectricalBatteryComment?: string;

  runningEngineElectricalLightingEngineering?: boolean;
  runningEngineElectricalLightingEngineeringComment?: string;

  runningEngineElectricalAudiosystem?: boolean;
  runningEngineElectricalAudiosystemComment?: string;

  runningEngineElectricalHeatedSteeringWheel?: boolean;
  runningEngineElectricalHeatedSteeringWheelComment?: string;

  runningEngineElectricalSoundSignal?: boolean;
  runningEngineElectricalSoundSignalComment?: string;

  runningEngineElectricalSeatMassage?: boolean;
  runningEngineElectricalSeatMassageComment?: string;

  runningEngineElectricalWindshieldWashers?: boolean;
  runningEngineElectricalWindshieldWashersComment?: string;

  runningEngineElectricalHeatedSeats?: boolean;
  runningEngineElectricalHeatedSeatsComment?: string;

  runningEngineElectricalWindshieldWipers?: boolean;
  runningEngineElectricalWindshieldWipersComment?: string;

  runningEngineElectricalWindowLifters?: boolean;
  runningEngineElectricalWindowLiftersComment?: string;

  runningEngineElectricalElectricSunroof?: boolean;
  runningEngineElectricalElectricSunroofComment?: string;

  runningEngineElectricalElectricSteering?: boolean;
  runningEngineElectricalElectricSteeringComment?: string;

  runningEngineElectricalElectricMirrors?: boolean;
  runningEngineElectricalElectricMirrorsComment?: string;

  runningEngineElectricalElectricSeats?: boolean;
  runningEngineElectricalElectricSeatsComment?: string;

  runningEngineElectricalElectricPanorama?: boolean;
  runningEngineElectricalElectricPanoramaComment?: string;

  runningEngineElectricalHeatedWindshield?: boolean;
  runningEngineElectricalHeatedWindshieldComment?: string;

  runningEngineElectricalElectricTrunkDrive?: boolean;
  runningEngineElectricalElectricTrunkDriveComment?: string;

  runningEngineMechanicalNameOne?: string;
  runningEngineMechanicalIsCheckOne?: boolean;
  runningEngineMechanicalCommentOne?: string;
  runningEngineMechanicalNameTwo?: string;
  runningEngineMechanicalIsCheckTwo?: boolean;
  runningEngineMechanicalCommentTwo?: string;
  runningEngineMechanicalNameThree?: string;
  runningEngineMechanicalIsCheckThree?: boolean;
  runningEngineMechanicalCommentThree?: string;

  runningEngineMechanicalGearShifting?: boolean;
  runningEngineMechanicalGearShiftingComment?: string;

  runningEngineMechanicalEngineOperation?: boolean;
  runningEngineMechanicalEngineOperationComment?: string;

  runningEngineMechanicalInteriorHeater?: boolean;
  runningEngineMechanicalInteriorHeaterComment?: string;

  runningEngineMechanicalPowerSteering?: boolean;
  runningEngineMechanicalPowerSteeringComment?: string;

  runningEngineMechanicalAirConditioner?: boolean;
  runningEngineMechanicalAirConditionerComment?: string;

  dashboardNoErrors?: boolean;
  dashboardDiagnosticsFile?: string[];
  dashboardDiagnosticsComment?: string;
  dashboardMileageOnDashboard?: string;
  dashboardMileageInTheEngineBlock?: string;
  dashboardMileageInTheGearbox?: string;
  dashboardMileageInAdditionalBlocks?: string;
  dashboardIsNoMileage?: boolean;
  dashboardTotalComment?: string;
  dashboardNameOne?: string;
  dashboardIsCheckOne?: boolean;
  dashboardCommentOne?: string;
  dashboardNameTwo?: string;
  dashboardIsCheckTwo?: boolean;
  dashboardCommentTwo?: string;
  dashboardNameThree?: string;
  dashboardIsCheckThree?: boolean;
  dashboardCommentThree?: string;

  dashboardABS?: boolean;
  dashboardABSComment?: string;

  dashboardESP?: boolean;
  dashboardESPComment?: string;

  dashboardAirbag?: boolean;
  dashboardAirbagComment?: string;

  dashboardCheckEngine?: boolean;
  dashboardCheckEngineComment?: string;

  dashboardBattery?: boolean;
  dashboardBatteryComment?: string;

  dashboardTirePressure?: boolean;
  dashboardTirePressureComment?: string;

  dashboardOilPressure?: boolean;
  dashboardOilPressureComment?: string;

  testDriveAllSystemOk?: boolean;

  testDriveNameOne?: string;
  testDriveIsCheckOne?: boolean;
  testDriveCommentOne?: string;
  testDriveNameTwo?: string;
  testDriveIsCheckTwo?: boolean;
  testDriveCommentTwo?: string;
  testDriveNameThree?: string;
  testDriveIsCheckThree?: boolean;
  testDriveCommentThree?: string;

  testDriveSuspension?: boolean;
  testDriveSuspensionComment?: string;

  testDriveEngine?: boolean;
  testDriveEngineComment?: string;

  testDriveTransmission?: boolean;
  testDriveTransmissionComment?: string;

  testDriveSteering?: boolean;
  testDriveSteeringComment?: string;

  testDriveBrakeSystem?: boolean;
  testDriveBrakeSystemComment?: string;

  testDriveParkingBrake?: boolean;
  testDriveParkingBrakeComment?: string;

  testDriveExhaustSystem?: boolean;
  testDriveExhaustSystemComment?: string;

  expertOpinionPlusComment?: string;
  expertOpinionMinusComment?: string;
  expertOpinionTotalComment?: string;
  expertOpinionHistoryFile?: string[];
  expertOpinionHistoryComment?: string;

  serviceInspectionCompressionCheck?: string[];
  serviceInspectionEndoscopeCheck?: string[];
  serviceInspectionEngineInspection?: string[];
  serviceInspectionCheckpointInspection?: string[];
  serviceInspectionPowerSteeringInspection?: string[];
  serviceInspectionTransferCaseInspection?: string[];
  serviceInspectionRearAxleInspection?: string[];
  serviceInspectionFrontAxleInspection?: string[];
  serviceInspectionSteeringRackInspection?: string[];
  serviceInspectionChassisInspection?: string[];

  createdAt?: Date;
  publishAt?: Date;
}