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
    };
  }
}