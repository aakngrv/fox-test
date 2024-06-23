import { Entity } from '@backend/util/util-types';
import { ExpertOpinion } from '@backend/shared/shared-types';


export class ExpertOpinionEntity implements Entity<ExpertOpinionEntity>, ExpertOpinion {

  public expertOpinionId?: number;
  public reportId: number;
  public minusComment: string;
  public plusComment: string;
  public totalComment: string;


  constructor(expertOpinion: ExpertOpinion) {
    this.fillEntity(expertOpinion);
  }

  public fillEntity(entity: ExpertOpinion): void {
    this.expertOpinionId = entity.expertOpinionId;
    this.reportId = entity.reportId;
    this.plusComment = entity.plusComment;
    this.totalComment = entity.totalComment;
    this.minusComment = entity.minusComment;

  }

  public toObject(): ExpertOpinionEntity {
    return { ...this }
  }
}