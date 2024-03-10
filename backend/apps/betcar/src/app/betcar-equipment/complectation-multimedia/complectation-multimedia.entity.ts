import { Entity } from '@backend/util/util-types';
import { ComplectationMultimedia } from '@backend/shared/shared-types';


export class ComplectationMultimediaEntity implements Entity<ComplectationMultimediaEntity>, ComplectationMultimedia {

  public complectationMultimediaId?: number;
  public reportId: number;
  public cd: boolean;
  public tv: boolean;
  public usb: boolean;
  public aux: boolean;
  public dvd: boolean;
  public cassette: boolean;
  public carPlay: boolean;
  public bluetooth: boolean;
  public subwoofer: boolean;
  public voiceControl: boolean;
  public navigationSystem: boolean;
  public multimediaSystemForRearPassengers: boolean;
  

  constructor(complectationMultimedia: ComplectationMultimedia) {
    this.fillEntity(complectationMultimedia);
  } 
 
  public fillEntity(entity: ComplectationMultimedia): void {
    this.complectationMultimediaId = entity.complectationMultimediaId;
    this.reportId = entity.reportId;
    this.cd = entity.cd;
    this.tv = entity.tv;
    this.usb = entity.usb;
    this.aux = entity.aux;
    this.dvd = entity.dvd;
    this.cassette = entity.cassette;
    this.carPlay = entity.carPlay;
    this.bluetooth = entity.bluetooth;
    this.subwoofer = entity.subwoofer;
    this.voiceControl = entity.voiceControl;
    this.navigationSystem = entity.navigationSystem;
    this.multimediaSystemForRearPassengers = entity.multimediaSystemForRearPassengers;
  }

  public toObject(): ComplectationMultimediaEntity {
    return { ...this }
  }
}