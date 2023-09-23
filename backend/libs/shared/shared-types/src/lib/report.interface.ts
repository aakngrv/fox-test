import { CarData, SellerDetails } from "./documents.interface";

export interface Report {
  reportId?: number;
  executorId: string;
  title: string;
  sellerDetails: SellerDetails[];
  carData: CarData[];
  createdAt: Date;
  publishAt: Date;
}