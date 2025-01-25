import { OrganizationBid } from "@backend/shared/shared-types";

export class OrgBidEntity implements OrganizationBid {

  public bidId?: number;
  public firstname: string;
  public email: string;
  public city: string;
  public phone: string;
  public organizationName: string;
  public createdAt: Date;

  constructor(orgBid: OrganizationBid) {
    this.fillEntity(orgBid);
  }


  public fillEntity(orgBid: OrganizationBid) {

    this.bidId = orgBid.bidId;
    this.firstname = orgBid.firstname;
    this.email = orgBid.email;
    this.city = orgBid.city;
    this.phone = orgBid.phone;
    this.organizationName = orgBid.organizationName;
    this.createdAt = new Date();
    
  }

  public toObject(): OrgBidEntity {
    return {...this};
  }
}