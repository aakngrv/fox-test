import { Entity } from '@backend/util/util-types';
import { 
  AdditionalDocuments, 
  CarData, 
  Report, 
  SellerDetails, 
  STS, 
  TCP,
  Location,
  ComplectationBody,
  ComplectationWheels,
  ComplectationSalon,
  ComplectationHeadlights,
  ComplectationMultimedia,
  ComplectationComfort,
  ComplectationSafety,
  ComplectationProtection,
  ComplectationOther,
  PaintworkInspection,
  EngineCompartmentDamage,
  FrontSideDamage,
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
  public executorId: string;
  public title: string;
  public sellerDetails: SellerDetails[];
  public carData: CarData[];
  public additionalDocuments: AdditionalDocuments[];
  public tcp: TCP[];
  public sts: STS[];
  public location: Location[];
  public complectationBody: ComplectationBody[];
  public complectationWheels: ComplectationWheels[];
  public complectationSalon: ComplectationSalon[];
  public complectationHeadlights: ComplectationHeadlights[];
  public complectationMultimedia: ComplectationMultimedia[];
  public complectationComfort: ComplectationComfort[];
  public complectationSafety: ComplectationSafety[];
  public complectationProtection: ComplectationProtection[];
  public complectationOther: ComplectationOther[];
  public paintworkInspection: PaintworkInspection[];
  public engineCompartmentDamage: EngineCompartmentDamage[];
  public frontSideDamage: FrontSideDamage[];
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
    this.executorId = entity.executorId;
    this.title = entity.title;
    this.sellerDetails = [];
    this.carData = [];
    this.additionalDocuments = [];
    this.tcp = [];
    this.sts = [];
    this.location = [];
    this.complectationBody = [];
    this.complectationWheels = [];
    this.complectationSalon = [];
    this.complectationHeadlights = [];
    this.complectationMultimedia = [];
    this.complectationComfort = [];
    this.complectationSafety = [];
    this.complectationProtection = [];
    this.complectationOther = [];
    this.paintworkInspection = [];
    this.engineCompartmentDamage = [];
    this.frontSideDamage = [];
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
      sellerDetails: this.sellerDetails.map(({ sellerDetailsId }) => ({ sellerDetailsId })),
      carData: this.carData.map(({ carDataId }) => ({ carDataId })),
      additionalDocuments: this.additionalDocuments.map(({ additionalDocumentsId }) => ({ additionalDocumentsId })),
      tcp: this.tcp.map(({ tcpId }) => ({ tcpId })),
      sts: this.sts.map(({ stsId }) => ({ stsId })),
      location: this.location.map(({ locationId }) => ({ locationId })),
      complectationBody: this.complectationBody.map(({ complectationBodyId }) => ({ complectationBodyId })),
      complectationWheels: this.complectationWheels.map(({ complectationWheelsId }) => ({ complectationWheelsId })),
      complectationSalon: this.complectationSalon.map(({ complectationSalonId }) => ({ complectationSalonId })),
      complectationHeadlights: this.complectationHeadlights.map(({ complectationHeadlightsId }) => ({ complectationHeadlightsId })),
      complectationMultimedia: this.complectationMultimedia.map(({ complectationMultimediaId }) => ({ complectationMultimediaId })),
      complectationComfort: this.complectationComfort.map(({ complectationComfortId }) => ({ complectationComfortId })),
      complectationSafety: this.complectationSafety.map(({ complectationSafetyId }) => ({ complectationSafetyId })),
      complectationProtection: this.complectationProtection.map(({ complectationProtectionId }) => ({ complectationProtectionId })),
      complectationOther: this.complectationOther.map(({ complectationOtherId }) => ({ complectationOtherId })),
      paintworkInspection: this.paintworkInspection.map(({ paintworkInspectionId }) => ({ paintworkInspectionId })),
      engineCompartmentDamage: this.engineCompartmentDamage.map(({ engineCompartmentDamageId }) => ({ engineCompartmentDamageId })),
      frontSideDamage: this.frontSideDamage.map(({ frontSideDamageId }) => ({ frontSideDamageId })),
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