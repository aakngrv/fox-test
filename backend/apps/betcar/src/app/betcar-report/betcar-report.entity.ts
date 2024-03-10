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
 } from '@backend/shared/shared-types';

export class BetcarReportEntity implements Entity<BetcarReportEntity>, Report {

  public reportId: number;
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
    };
  }
}