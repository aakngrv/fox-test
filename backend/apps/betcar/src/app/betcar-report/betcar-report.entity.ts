import { Entity } from '@backend/util/util-types';
import { Report } from '@backend/shared/shared-types';

export class BetcarReportEntity implements Entity<BetcarReportEntity>, Report {

  public id: number;
  public executorId: string;
  public createdAt: Date;
  public publishAt: Date;

  constructor(report: Report) {
    this.fillEntity(report);
  }

  public fillEntity(entity: Report): void {
    this.id = entity.id;
    this.executorId = entity.executorId;
    this.createdAt = new Date();
    this.publishAt = new Date();
  }

  public toObject(): BetcarReportEntity {
    return { ...this };
  }
}