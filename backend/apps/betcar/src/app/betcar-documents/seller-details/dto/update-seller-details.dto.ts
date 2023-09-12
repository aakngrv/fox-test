export class UpdateSellerDetailsDto {
  public name: string;
  public phone: string;
  public carCost: string;
  public role: boolean;
  public comment: string;
  public createdAt?: Date;
  public publishAt?: Date;
}