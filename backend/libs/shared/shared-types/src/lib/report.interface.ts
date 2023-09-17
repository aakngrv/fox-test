import { SellerDetails } from "./documents.interface";

export interface Report {
  reportId?: number;
  executorId: string;
  title: string;
  sellerDetails: SellerDetails[];
  createdAt: Date;
  publishAt: Date;
}