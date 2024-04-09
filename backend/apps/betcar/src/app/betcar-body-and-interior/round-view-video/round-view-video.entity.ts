import { Entity } from '@backend/util/util-types';
import { RoundViewVideo } from '@backend/shared/shared-types';


export class RoundViewVideoEntity implements Entity<RoundViewVideoEntity>, RoundViewVideo {

  public roundViewVideoId?: number;
  public reportId: number;
  public video: string;
  public comment: string;


  constructor(roundViewVideo: RoundViewVideo) {
    this.fillEntity(roundViewVideo);
  }

  public fillEntity(entity: RoundViewVideo): void {
    this.roundViewVideoId = entity.roundViewVideoId;
    this.reportId = entity.reportId;
    this.video = entity.video;
    this.comment = entity.comment;

  }

  public toObject(): RoundViewVideoEntity {
    return { ...this }
  }
}