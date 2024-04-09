import { Entity } from '@backend/util/util-types';
import { 
  CarData, 
  VinBodyNumber,
  FrameNumber,
  StateNumber,
  TCP,
  STS,
  EngineNumber,
  AdditionalDocuments,
} from '@backend/shared/shared-types';


export class CarDataEntity implements Entity<CarDataEntity>, CarData {

  public carDataId?: number;
  public reportId: number;
  public vinBodyNumber?: VinBodyNumber[];
  public frameNumber?: FrameNumber[];
  public stateNumber?: StateNumber[];
  public tCP?: TCP[];
  public sTS?: STS[];
  public carBrand: string;
  public carModel: string;
  public manufactureYear: string;
  public color: string;
  public bodyType: string;
  public enginesType: string;
  public gearboxType: string;
  public driveUnit: string;
  public steeringWheelLocation: string;
  public modification: string;
  public engineNumber?: EngineNumber[];
  public engineCapacity: string;
  public power: string;
  public serviceBook: string;
  public additionalDocuments?: AdditionalDocuments[];
  
  
  constructor(carData: CarData) {
    this.fillEntity(carData);
  } 

 
  public fillEntity(entity: CarData): void {
    this.carDataId = entity.carDataId;
    this.reportId = entity.reportId;
    this.vinBodyNumber = [];
    this.frameNumber = [];
    this.stateNumber = [];
    this.tCP = [];
    this.sTS = [];
    this.carBrand = entity.carBrand;
    this.carModel = entity.carModel;
    this.manufactureYear = entity.manufactureYear;
    this.color = entity.color;
    this.bodyType = entity.bodyType;
    this.enginesType = entity.enginesType;
    this.gearboxType = entity.gearboxType;
    this.driveUnit = entity.driveUnit;
    this.steeringWheelLocation = entity.steeringWheelLocation;
    this.modification = entity.modification;
    this.engineNumber = [];
    this.engineCapacity = entity.engineCapacity;
    this.power = entity.power;
    this.serviceBook = entity.serviceBook;
    this.additionalDocuments = [];
  }

  public toObject(): CarDataEntity {
    return { ...this }
  }
}