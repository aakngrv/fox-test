import { 
  AdditionalDocuments, 
  CarData, 
  STS, 
  SellerDetails, 
  TCP,
} from "./documents.interface";

export interface Report {
  reportId?: number;
  executorId: string;
  title: string;
  sellerDetails: SellerDetails[];
  carData: CarData[];
  additionalDocuments: AdditionalDocuments[];
  tcp: TCP[];
  sts: STS[];
  createdAt: Date;
  publishAt: Date;
}