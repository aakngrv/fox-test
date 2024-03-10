import { 
  AdditionalDocuments, 
  CarData, 
  STS, 
  SellerDetails, 
  TCP,
  Location,
} from "./documents.interface";

import { 
  ComplectationBody,
  ComplectationWheels,
  ComplectationSalon,
  ComplectationHeadlights,
  ComplectationMultimedia,
  ComplectationComfort,
} from "./complectation.interface";

export interface Report {
  reportId?: number;
  executorId: string;
  title: string;
  sellerDetails: SellerDetails[];
  carData: CarData[];
  additionalDocuments: AdditionalDocuments[];
  tcp: TCP[];
  sts: STS[];
  location: Location[];
  complectationBody: ComplectationBody[];
  complectationWheels: ComplectationWheels[];
  complectationSalon: ComplectationSalon[];
  complectationHeadlights: ComplectationHeadlights[];
  complectationMultimedia: ComplectationMultimedia[];
  complectationComfort: ComplectationComfort[]; 
  createdAt: Date;
  publishAt: Date;
}