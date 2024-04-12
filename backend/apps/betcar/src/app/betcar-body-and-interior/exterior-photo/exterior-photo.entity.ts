import { Entity } from '@backend/util/util-types';
import { ExteriorPhoto } from '@backend/shared/shared-types';

export class ExteriorPhotoEntity implements Entity<ExteriorPhotoEntity>, ExteriorPhoto {

  public exteriorPhotoId?: number;
  public reportId: number;
  public rightFrontPhoto: string;
  public frontPhoto: string;
  public leftFrontPhoto: string;
  public rightBackPhoto: string;
  public backPhoto: string;
  public leftBackPhoto: string;
  public leftPhoto: string;
  public rightPhoto: string;
  public hoodOpen: string;
  public trunkOpen: string;
  public addPhoto: string[];

  
  constructor(exteriorPhoto: ExteriorPhoto) {
    this.fillEntity(exteriorPhoto);
  }

  public fillEntity(entity: ExteriorPhoto): void {
    this.exteriorPhotoId = entity.exteriorPhotoId;
    this.reportId = entity.reportId;
    this.rightFrontPhoto = entity.rightFrontPhoto;
    this.frontPhoto = entity.frontPhoto;
    this.leftFrontPhoto = entity.leftFrontPhoto;
    this.rightBackPhoto = entity.rightBackPhoto;
    this.backPhoto = entity.backPhoto;
    this.leftBackPhoto = entity.leftBackPhoto;
    this.leftPhoto = entity.leftPhoto;
    this.rightPhoto = entity.rightPhoto;
    this.hoodOpen = entity.hoodOpen;
    this.trunkOpen = entity.trunkOpen;
    this.addPhoto = entity.addPhoto;
  }

  public toObject(): ExteriorPhotoEntity {
    return {
      ...this,
      // addElementExterior this.addElementExterior.map(({ addElementExteriorId }) => ({ addElementExteriorId })),
    }
  }
}