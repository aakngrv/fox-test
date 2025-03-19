import { ExpertOnDay } from "@backend/shared/shared-types";

export class ExpertOnDayEntity implements ExpertOnDay {

  public expertOnDayId?: number;
  public provisionDate: string;
  public firstname: string;
  public city: string;
  public phone: string;
  public createdAt: Date;

  constructor(expertOnDay: ExpertOnDay) {
    this.fillEntity(expertOnDay);
  }


  public fillEntity(expertOnDay: ExpertOnDay) {

    this.expertOnDayId = expertOnDay.expertOnDayId;
    this.firstname = expertOnDay.firstname;
    this.city = expertOnDay.city;
    this.phone = expertOnDay.phone;
    this.provisionDate = expertOnDay.provisionDate;
    this.createdAt = new Date();
    
  }

  public toObject(): ExpertOnDayEntity {
    return {...this};
  }
}