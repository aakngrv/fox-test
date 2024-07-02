import { Entity } from '@backend/util/util-types';
import { AddElementTest } from '@backend/shared/shared-types';


export class AddElementTestEntity implements Entity<AddElementTest>, AddElementTest {

  public addElementTestId?: number;
  public testDriveId: number;
  public name: string;
  public isCheck: boolean;
  public comment: string;

  constructor(addElementTest: AddElementTest) {
    this.fillEntity(addElementTest);
  } 



  public fillEntity(entity: AddElementTest): void {
    this.addElementTestId = entity.addElementTestId;
    this.testDriveId = entity.testDriveId;
    this.name = entity.name;
    this.isCheck = entity.isCheck;
    this.comment = entity.comment;
  }

  public toObject(): AddElementTestEntity {
    return { ...this }
  }
}
