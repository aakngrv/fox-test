import { AdditionalDocuments, CarData, SellerDetails } from "./documents.interface";

export interface Report {
  reportId?: number;
  executorId: string;
  title: string;
  sellerDetails: SellerDetails[];
  carData: CarData[];
  additionalDocuments: AdditionalDocuments[];
  createdAt: Date;
  publishAt: Date;
}