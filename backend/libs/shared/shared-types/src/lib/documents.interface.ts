export interface SellerDetails {
  sellerDetailsId?: number;
  reportId?: number;
  name: string;
  phone: string;
  carCost: string;
  role: boolean;
  comment: string;
}

export interface CarData {
  carDataId?: number;
  reportId?: number;
  vin: string;
  frameNumber: string;
  comment: string;
  haveAServiceBook: boolean;
  additionalDocuments: string;
  sts: string;
  tcp: string;
  stateNumber: string;
  carType: string;
  carBrand: string;
  carModel: string;
  manufactureYear: string;
  bodyType: string;
  generation: string;
  enginesType: string;
  enginesModification: string;
  enginesNumber: string;
  driveUnit: string;
  gearboxType: string;
  modification: string;
  engineCapacity: string;
  power: string;
  color: string;
  isMetallic: boolean;
  mileage: string;
  isNotInstalled: boolean;
  isNewCar: boolean;
  isEmergency: boolean;
  isNotOnTrack: boolean;
  totalComment: string;
}

export interface AdditionalDocuments {
  additionalDocumentsId?: number;
  reportId?: number;
  comment: string;
  video: string;
  photo: string;
  file: string;
}

export interface TCP {
  tcpId?: number;
  reportId?: number;
  availabilityTCP: string;
  chassis: string;
  series: string;
  number: string;
  dateOfIssue: string;
  numberOfOwners: string;
  video: string;
  photo: string;
  file: string;
}

export interface STS {
  stsId?: number;
  absent: boolean;
  series: string;
  number: string;
  dateOfIssue: string;
  issuedBy: string;
  video: string;
  photo: string;
  file: string;
}

export interface Location {
  locationId?: number;
  country: string;
  region: string;
  city: string;
  address: string;
  comment: string;
}
