import { Entity } from '@backend/util/util-types';
import { CarData } from '@backend/shared/shared-types';


export class CarDataEntity implements Entity<CarDataEntity>, CarData {

  public carDataId?: number;
  public reportId: number;
  public vin: string;
  public frameNumber: string;
  public comment: string;
  public haveAServiceBook: boolean;
  public additionalDocuments: string;
  public sts: string;
  public tcp: string;
  public stateNumber: string;
  public carType: string;
  public carBrand: string;
  public carModel: string;
  public manufactureYear: string;
  public bodyType: string;
  public generation: string;
  public enginesType: string;
  public enginesModification: string;
  public enginesNumber: string;
  public driveUnit: string;
  public gearboxType: string;
  public modification: string;
  public engineCapacity: string;
  public power: string;
  public color: string;
  public isMetallic: boolean;
  public mileage: string;
  public isNotInstalled: boolean;
  public isNewCar: boolean;
  public isEmergency: boolean;
  public isNotOnTrack: boolean;
  public totalComment: string;

constructor(carData: CarData) {
  this.fillEntity(carData);
} 

 
public fillEntity(entity: CarData): void {
  this.carDataId = entity.carDataId;
  this.reportId = entity.reportId;
  this.vin = entity.vin;
  this.frameNumber = entity.frameNumber;
  this.comment = entity.comment;
  this.haveAServiceBook = entity.haveAServiceBook;
  this.additionalDocuments = entity.additionalDocuments;
  this.sts = entity.sts;
  this.tcp = entity.tcp;
  this.reportId = entity.reportId;
  this.stateNumber = entity.stateNumber;
  this.carType = entity.carType;
  this.carBrand = entity.carBrand;
  this.carModel = entity.carModel;
  this.manufactureYear = entity.manufactureYear;
  this.bodyType = entity.bodyType;
  this.reportId = entity.reportId;
  this.generation = entity.generation;
  this.enginesType = entity.enginesType;
  this.enginesModification = entity.enginesModification;
  this.enginesNumber = entity.enginesNumber;
  this.driveUnit = entity.driveUnit;
  this.gearboxType = entity.gearboxType;
  this.reportId = entity.reportId;
  this.modification = entity.modification;
  this.engineCapacity = entity.engineCapacity;
  this.power = entity.power;
  this.color = entity.color;
  this.isMetallic = entity.isMetallic;
  this.mileage = entity.mileage;
  this.isNotInstalled = entity.isNotInstalled;
  this.isNewCar = entity.isNewCar;
  this.isEmergency = entity.isEmergency;
  this.isNotOnTrack = entity.isNotOnTrack;
  this.totalComment = entity.totalComment;
}

public toObject(): CarDataEntity {
  return { ...this }
}
}