import { SellerDetails } from '@prisma/client';
import { Expose } from 'class-transformer';

export class ReportRdo {
  
  @Expose()
  public reportId: string
  
  @Expose()
  public  executorId: string;

  @Expose()
  public title: string
  
  @Expose()
  public sellerDetails: SellerDetails[];

  @Expose()
  public  createdAt: string;

  @Expose()
  public publishAt: string;
}



