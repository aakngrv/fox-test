import { Entity } from '@backend/util/util-types';
import { SellerDetails } from '@backend/shared/shared-types';

export class SellerDetailsEntity implements Entity<SellerDetailsEntity>, SellerDetails {

    public sellerDetailsId?: number;
    public reportId: number;
    public linkToAd: string[];
    public refusalOfInspection: boolean;
    public name: string;
    public phone: string;
    public carCost: string;
    public role: string;
    public comment: string;

  constructor(sellerDetails: SellerDetails) {
    this.fillEntity(sellerDetails);
  } 
   
  public fillEntity(entity: SellerDetails): void {
    this.sellerDetailsId = entity.sellerDetailsId;
    this.reportId = entity.reportId;
    this.linkToAd = entity.linkToAd;
    this.refusalOfInspection = entity.refusalOfInspection;
    this.name = entity.name;
    this.phone = entity.phone;
    this.carCost = entity.carCost;
    this.role = entity.role;
    this.comment = entity.comment;
  }

  public toObject(): SellerDetailsEntity {
    return { ...this }
  }
}