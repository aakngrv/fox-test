import { Entity } from "@backend/util/util-types";
import { AddElementInterior, InteriorDamage } from "@backend/shared/shared-types";

export class InteriorDamageEntity implements Entity<InteriorDamageEntity>, InteriorDamage {

  public interiorDamageId?: number;
  public reportId: number;
  public withoutDamage: boolean;
  public frontLeftDoorCard: string[];
  public driversSeat: string[];
  public salonCarpet: string[];
  public torpedo: string[];
  public ceiling: string[];
  public backLeftDoorCard: string[];
  public backSeat: string[];
  public backRightDoorCard: string[];
  public frontRightDoorCard: string[];
  public passengerSeat: string[];
  public sleepingCompartment: string[];
  public addElementInterior?: AddElementInterior[]

  constructor(roofDamage: InteriorDamage) {
    this.fillEntity(roofDamage);
  }

  public fillEntity(entity: InteriorDamage): void {
    this.interiorDamageId = entity.interiorDamageId;
    this.reportId = entity.reportId;
    this.withoutDamage = entity.withoutDamage;
    this.frontLeftDoorCard = entity.frontLeftDoorCard;
    this.driversSeat = entity.driversSeat;
    this.salonCarpet = entity.salonCarpet;
    this.torpedo = entity.torpedo;
    this.ceiling = entity.ceiling;
    this.backLeftDoorCard = entity.backLeftDoorCard;
    this.backSeat = entity.backSeat;
    this.backRightDoorCard = entity.backRightDoorCard;
    this.frontRightDoorCard = entity.frontRightDoorCard;
    this.passengerSeat = entity.passengerSeat;
    this.sleepingCompartment = entity.sleepingCompartment;
    this.addElementInterior = [];
  }

  public toObject(): InteriorDamageEntity {
    return {
      ...this,
      addElementInterior: this.addElementInterior.map(({ addElementInteriorId }) => ({ addElementInteriorId })),
    }
  }
}