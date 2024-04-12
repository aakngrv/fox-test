import { Entity } from '@backend/util/util-types';
import { InteriorPhoto } from '@backend/shared/shared-types';

export class InteriorPhotoEntity implements Entity<InteriorPhotoEntity>, InteriorPhoto {

  public interiorPhotoId?: number;
  public reportId: number;
  public leftFrontDoor: string;
  public driverSeatPhoto: string;
  public steeringWheelPhoto: string;
  public dashboardPhoto: string;
  public leftBackDoor: string;
  public backLeftSeatsPhoto: string;
  public frontSeatsPhoto: string;
  public rightBackDoor: string;
  public backRightSeatsPhoto: string;
  public rightFrontDoor: string;
  public passengerSeatPhoto: string;
  public addPhoto: string[];
  
  constructor(interiorPhoto: InteriorPhoto) {
    this.fillEntity(interiorPhoto);
  }

  public fillEntity(entity: InteriorPhoto): void {
    this.interiorPhotoId = entity.interiorPhotoId;
    this.reportId = entity.reportId;
    this.leftFrontDoor = entity.leftFrontDoor;
    this.driverSeatPhoto = entity.driverSeatPhoto;
    this.steeringWheelPhoto = entity.steeringWheelPhoto;
    this.dashboardPhoto = entity.dashboardPhoto;
    this.leftBackDoor = entity.leftBackDoor;
    this.backLeftSeatsPhoto = entity.backLeftSeatsPhoto;
    this.frontSeatsPhoto = entity.frontSeatsPhoto;
    this.rightBackDoor = entity.rightBackDoor;
    this.backRightSeatsPhoto = entity.backRightSeatsPhoto;
    this.rightFrontDoor = entity.rightFrontDoor;
    this.passengerSeatPhoto = entity.passengerSeatPhoto;
    this.addPhoto = entity.addPhoto;
  }

  public toObject(): InteriorPhotoEntity {
    return {
      ...this,
      // addElementExterior this.addElementExterior.map(({ addElementExteriorId }) => ({ addElementExteriorId })),
    }
  }
}