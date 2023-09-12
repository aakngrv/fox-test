import { Expose } from 'class-transformer';

export class SellerDetailsRdo {

  @Expose()
  public id: string;

  @Expose()
  public name: string;

  @Expose()
  public phone: string;

  @Expose()
  public carCost: string;

  @Expose()
  public role: boolean;

  @Expose()
  public comment: string;

  @Expose()
  public createdAt?: Date;

  @Expose()
  public publishAt?: Date;
}