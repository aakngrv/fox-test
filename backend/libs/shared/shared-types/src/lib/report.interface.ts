import { 
  AdditionalDocuments, 
  CarData, 
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
  createdAt: Date;
  publishAt: Date;
}