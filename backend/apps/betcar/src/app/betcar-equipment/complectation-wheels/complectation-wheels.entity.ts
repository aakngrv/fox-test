import { Entity } from '@backend/util/util-types';
import { ComplectationWheels } from '@backend/shared/shared-types';


export class ComplectationWheelsEntity implements Entity<ComplectationWheelsEntity>, ComplectationWheels {

  public complectationWheelsId?: number;
  public reportId: number;
  public isTiresIdentical: boolean;
  public additionalTireSets: boolean;
  public additionalSetsOfDisks: boolean;
  public typeOfDisks: string;
  public seasonality: string[];
  public frontLeftBrand: string;
  public backLeftBrand: string;
  public frontRightBrand: string;
  public backRightBrand: string;
  public frontLeftModel: string;
  public backLeftModel: string;
  public frontRightModel: string;
  public backRightModel: string;
  public frontLeftIssueDate: string;
  public backLeftIssueDate: string;
  public frontRightIssueDate: string;
  public backRightIssueDate: string;
  public frontLeftOptions: string;
  public backLeftOptions: string;
  public frontRightOptions: string;
  public backRightOptions: string;
  public frontLeftWear: string;
  public backLeftWear: string;
  public frontRightWear: string;
  public backRightWear: string;
  

  constructor(complectationWheels: ComplectationWheels) {
    this.fillEntity(complectationWheels);
  } 

 
  public fillEntity(entity: ComplectationWheels): void {
    this.complectationWheelsId = entity.complectationWheelsId;
    this.reportId = entity.complectationWheelsId;
    this.isTiresIdentical = entity.isTiresIdentical;
    this.additionalTireSets = entity.additionalTireSets;
    this.additionalSetsOfDisks = entity.additionalSetsOfDisks;
    this.typeOfDisks = entity.typeOfDisks;
    this.seasonality = entity.seasonality;
    this.frontLeftBrand = entity.frontLeftBrand;
    this.backLeftBrand = entity.backLeftBrand;
    this.frontRightBrand = entity.frontRightBrand;
    this.backRightBrand = entity.backRightBrand;
    this.frontLeftModel = entity.frontLeftModel;
    this.backLeftModel = entity.backLeftModel;
    this.frontRightModel = entity.frontRightModel;
    this.backRightModel = entity.backRightModel;
    this.frontLeftIssueDate = entity.frontLeftIssueDate;
    this.backLeftIssueDate = entity.backLeftIssueDate;
    this.frontRightIssueDate = entity.frontRightIssueDate;
    this.backRightIssueDate = entity.backRightIssueDate;
    this.frontLeftOptions = entity.frontLeftOptions;
    this.backLeftOptions = entity.backLeftOptions;
    this.frontRightOptions = entity.frontRightOptions;
    this.backRightOptions = entity.backRightOptions;
    this.frontLeftWear = entity.frontLeftWear;
    this.backLeftWear = entity.backLeftWear;
    this.frontRightWear = entity.frontRightWear;
    this.backRightWear = entity.backRightWear;
  }

  public toObject(): ComplectationWheelsEntity {
    return { ...this }
  }
}