import { Entity } from '@backend/util/util-types';
import { AddElementTest } from '@backend/shared/shared-types';


export class AddElementTestEntity implements Entity<AddElementTest>, AddElementTest {

  public addElementTestId?: number;
  public testDriveId: number;
  public name: string;

  constructor(addElementTest: AddElementTest) {
    this.fillEntity(addElementTest);
  } 



  public fillEntity(entity: AddElementTest): void {
    this.addElementTestId = entity.addElementTestId;
    this.testDriveId = entity.testDriveId;
    this.name = entity.name;
  }

  public toObject(): AddElementTestEntity {
    return { ...this }
  }
}
