import { UserBid } from "@backend/shared/shared-types";

export class UserBidEntity implements UserBid {

  public bidId?: number;
  public firstname: string;
  public email: string;
  public city: string;
  public phone: string;
  public createdAt: Date;

  constructor(userBid: UserBid) {
    this.fillEntity(userBid);
  }

  public fillEntity(userBid: UserBid) {

    this.bidId = userBid.bidId;
    this.firstname = userBid.firstname;
    this.email = userBid.email;
    this.city = userBid.city;
    this.phone = userBid.phone;
    this.createdAt = new Date();
    
  }

  public toObject(): UserBidEntity {
    return {...this};
  }
}