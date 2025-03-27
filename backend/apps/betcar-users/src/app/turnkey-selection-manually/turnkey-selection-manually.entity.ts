import { TurnkeySelectionManually } from "@backend/shared/shared-types";

export class TurnkeySelectionManuallyEntity implements TurnkeySelectionManually {

  public turnkeySelectionManuallyId?: number;
  public firstname: string;
  public phone: string;
  public autoModel: string;
  public autoMark: string;
  public inspectionRegion: string;
  public sellerPhone: string;
  public yearOfIssue: string[];
  public colors: string[];
  public createdAt: Date;

  constructor(turnkeySelectionManuallyId: TurnkeySelectionManually) {
    this.fillEntity(turnkeySelectionManuallyId);
  }

  public fillEntity(turnkeySelectionManuallyId: TurnkeySelectionManually) {

    this.turnkeySelectionManuallyId = turnkeySelectionManuallyId.turnkeySelectionManuallyId;
    this.firstname = turnkeySelectionManuallyId.firstname;
    this.phone = turnkeySelectionManuallyId.phone;
    this.autoModel = turnkeySelectionManuallyId.autoModel;
    this.autoMark = turnkeySelectionManuallyId.autoMark;
    this.inspectionRegion = turnkeySelectionManuallyId.inspectionRegion;
    this.sellerPhone = turnkeySelectionManuallyId.sellerPhone;
    this.yearOfIssue = turnkeySelectionManuallyId.yearOfIssue;
    this.colors = turnkeySelectionManuallyId.colors;
    this.createdAt = new Date();
  }

  public toObject(): TurnkeySelectionManuallyEntity {
    return {...this};
  }
}