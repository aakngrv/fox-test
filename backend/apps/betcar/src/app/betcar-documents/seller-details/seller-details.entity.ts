import { Entity } from '@backend/util/util-types';
import { SellerDetails } from '@backend/shared/shared-types';

export class SellerDetailsEntity implements Entity<SellerDetailsEntity>, SellerDetails {
    public id: number;
    public name: string;
    public phone: string;
    public carCost: string;
    public role: boolean;
    public comment: string;
    public createdAt?: Date;
    public publishAt?: Date;

  constructor(sellerDetails: SellerDetails) {
    this.fillEntity(sellerDetails);
  } 
   
 

  public fillEntity(entity: SellerDetails) {
    this.id = entity.id;
    this.name = entity.name;
    this.phone = entity.phone;
    this.carCost = entity.carCost;
    this.role = entity.role;
    this.comment = entity.comment;
    this.createdAt = entity.createdAt;
    this.publishAt = entity.publishAt;
  }

  public toObject(): SellerDetailsEntity {
    return { ...this }
  }
}