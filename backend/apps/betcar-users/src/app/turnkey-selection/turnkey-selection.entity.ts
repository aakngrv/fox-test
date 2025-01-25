import { TurnkeySelection } from "@backend/shared/shared-types";

export class TurnkeySelectionEntity implements TurnkeySelection {

  public turnkeySelectionId?: number;
  public firstname: string;
  public phone: string;
  public autoModel: string;
  public mileage: string[];
  public gearboxType: string[];
  public driveType: string[];
  public yearOfIssue: string[];
  public colors: string[];
  public engineType: string[];

  constructor(turnkeySelectionId: TurnkeySelection) {
    this.fillEntity(turnkeySelectionId);
  }

  public fillEntity(turnkeySelectionId: TurnkeySelection) {

    this.turnkeySelectionId = turnkeySelectionId.turnkeySelectionId;
    this.firstname = turnkeySelectionId.firstname;
    this.phone = turnkeySelectionId.phone;
    this.autoModel = turnkeySelectionId.autoModel;
    this.mileage = turnkeySelectionId.mileage;
    this.gearboxType = turnkeySelectionId.gearboxType;
    this.driveType = turnkeySelectionId.driveType;
    this.yearOfIssue = turnkeySelectionId.yearOfIssue;
    this.colors = turnkeySelectionId.colors;
    this.engineType = turnkeySelectionId.engineType;
  }

  public toObject(): TurnkeySelectionEntity {
    return {...this};
  }
}