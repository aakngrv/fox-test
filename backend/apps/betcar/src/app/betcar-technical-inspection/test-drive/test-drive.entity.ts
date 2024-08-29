import { Entity } from '@backend/util/util-types';
import { 
  AddElementTest, 
  TestDrive 
} from '@backend/shared/shared-types';


export class TestDriveEntity implements Entity<TestDriveEntity>, TestDrive {

  public testDriveId?: number;
  public reportId: number;
  public allSystemOk: boolean;
  public addElementTest?: AddElementTest[];


  constructor(testDrive: TestDrive) {
    this.fillEntity(testDrive);
  }

  public fillEntity(entity: TestDrive): void {
    this.testDriveId = entity.testDriveId;
    this.reportId = entity.reportId;
    this.allSystemOk = entity.allSystemOk;
    this.addElementTest = [];
  }

  public toObject(): TestDriveEntity {
    return { 
      ...this,
      addElementTest: this.addElementTest.map(({ addElementTestId }) => ({ addElementTestId })),
    }
  }
}