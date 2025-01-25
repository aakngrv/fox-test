import { UserForm } from "@backend/shared/shared-types";

export class UserFormEntity implements UserForm {

  public userFormId?: number;
  public firstname: string;
  public email: string;
  public city: string;
  public phone: string;
  public age: string;
  public driverLicense: string[];
  public experienceWithTransport: string[];
  public workExperience: string;
  public createdAt: Date;

  constructor(userFormId: UserForm) {
    this.fillEntity(userFormId);
  }

 

  public fillEntity(userFormId: UserForm) {

    this.userFormId = userFormId.userFormId;
    this.firstname = userFormId.firstname;
    this.email = userFormId.email;
    this.city = userFormId.city;
    this.phone = userFormId.phone;
    this.age = userFormId.age;
    this.driverLicense = userFormId.driverLicense;
    this.experienceWithTransport = userFormId.experienceWithTransport;
    this.workExperience = userFormId.workExperience;
    this.createdAt = new Date();
    
  }

  public toObject(): UserFormEntity {
    return {...this};
  }
}