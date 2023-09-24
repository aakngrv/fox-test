import { Entity } from '@backend/util/util-types';
import { Location } from '@backend/shared/shared-types';

export class LocationEntity implements Entity<LocationEntity>, Location {

  public locationId?: number;
  public reportId: number;
  public country: string;
  public region: string;
  public city: string;
  public address: string;
  public comment: string;

  constructor(location: Location) {
    this.fillEntity(location);
  } 

  public fillEntity(entity: Location): void {
    this.locationId = entity.locationId;
    this.reportId = entity.reportId;
    this.country = entity.country;
    this.region = entity.region;
    this.city = entity.city;
    this.address = entity.address;
    this.comment = entity.comment;
  }

  public toObject(): LocationEntity {
    return { ...this }
  }
}