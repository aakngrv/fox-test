import { Entity } from '@backend/util/util-types';
import { Report, SellerDetails } from '@backend/shared/shared-types';

export class BetcarReportEntity implements Entity<BetcarReportEntity>, Report {

  public reportId: number;
  public executorId: string;
  public title: string;
  public sellerDetails: SellerDetails[];
  public createdAt: Date;
  public publishAt: Date;

  constructor(report: Report) {
    this.fillEntity(report);
  }

  public fillEntity(entity: Report): void {
    this.reportId = entity.reportId;
    this.executorId = entity.executorId;
    this.title = entity.title;
    this.sellerDetails = [];
    this.createdAt = new Date();
    this.publishAt = new Date();
  }

  public toObject(): BetcarReportEntity {
    return { 
      ...this,
      sellerDetails: this.sellerDetails.map(({ sellerDetailsId }) => ({ sellerDetailsId }))
    };
  }
}