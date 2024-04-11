export interface SellerDetails {
  sellerDetailsId?: number;
  reportId: number;
  refusalOfInspection: boolean;
  linkToAd: string[];
  name: string;
  phone: string;
  carCost: string;
  isBargain: boolean;
  role: string;
  comment: string;
}

export interface CarData {
  carDataId?: number;
  reportId: number;
  vinBodyNumber?: VinBodyNumber[];
  frameNumber?: FrameNumber[];
  stateNumber?: StateNumber[];
  tCP?: TCP[];
  sTS?: STS[];
  carBrand: string;
  carModel: string;
  manufactureYear: string;
  color: string;
  bodyType: string;
  enginesType: string;
  gearboxType: string;
  driveUnit: string;
  steeringWheelLocation: string;
  modification: string;
  engineNumber?: EngineNumber[];
  engineCapacity: string;
  power: string;
  serviceBook: string;
  additionalDocuments?: AdditionalDocuments[];
}

export interface VinBodyNumber {
  vinBodyNumberId?: number;
  carDataId: number;
  vinNumber: string;
  expertConfirm: boolean;
  numberState: boolean[];
  photo: string[];
}

export interface FrameNumber {
  frameNumberId?: number;
  carDataId: number;
  frameNumber: string;
  expertConfirm: boolean;
  numberState: boolean[];
  photo: string[];
}

export interface StateNumber {
  stateNumberId?: number;
  carDataId: number;
  absent: boolean;
  foreign: boolean;
  stateNumber: string;
}

export interface AdditionalDocuments {
  additionalDocumentsId?: number;
  carDataId: number;
  comment: string;
  photo: string[];
}

export interface TCP {
  tCPId?: number;
  carDataId: number;
  absent: boolean;
  tCPType: string;
  photo: string[];
  comment: string;
}

export interface EngineNumber {
  engineNumberId?: number;
  carDataId: number;
  expertConfirm: boolean;
  numberState: boolean[];
  photo: string[];
}

export interface STS {
  sTSId?: number;
  carDataId: number;
  absent: boolean;
  photo: string;
}

export interface Location {
  locationId?: number;
  reportId: number;
  country: string;
  region: string;
  city: string;
  address: string;
  comment: string;
}
