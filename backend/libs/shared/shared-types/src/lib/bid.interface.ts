export interface UserBid {
  bidId?: number;
  firstname: string;
  email: string;
  city: string;
  phone: string;
  createdAt: Date;
}

export interface OrganizationBid {
  bidId?: number;
  firstname: string;
  organizationName: string;
  email: string;
  city: string;
  phone: string;
  createdAt: Date;
}

export interface UserForm {
  userFormId?: number;
  firstname: string;
  age: string;
  email: string;
  city: string;
  phone: string;
  driverLicense: string[];
  experienceWithTransport: string[];
  workExperience: string;
  createdAt: Date;
}

export interface TurnkeySelection {
  turnkeySelectionId?: number;
  firstname: string;
  phone: string
  autoModel: string;
  mileage: string[];
  gearboxType: string[];
  driveType: string[];
  yearOfIssue: string[];
  colors: string[];
  engineType: string[];
  linkToAd: string;
  createdAt: Date;
}

export interface TurnkeySelectionManually {
  turnkeySelectionManuallyId?: number;
  firstname: string;
  phone: string
  autoModel: string;
  autoMark: string;
  yearOfIssue: string[];
  colors: string[];
  inspectionRegion: string;
  sellerPhone: string;
  createdAt: Date;
}
