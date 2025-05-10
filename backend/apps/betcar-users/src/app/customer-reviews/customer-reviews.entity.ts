import { CustomerReviews } from "@backend/shared/shared-types";

export class CustomerReviewsEntity implements CustomerReviews {
  
  public customerReviewsId?: number;
  public userId: string;
  public userName: string;
  public userReview: string;
  public ourAnswer: string;
  public createdAt: Date;

  constructor(review: CustomerReviews) {
    this.fillEntity(review);
  }

  public fillEntity(review: CustomerReviews) {

    this.customerReviewsId = review.customerReviewsId;
    this.userId = review.userId;
    this.userName = review.userName;
    this.userReview = review.userReview;
    this.ourAnswer = review.ourAnswer;
    this.createdAt = new Date();
    
  }

  public toObject(): CustomerReviewsEntity {
    return {...this};
  }
}