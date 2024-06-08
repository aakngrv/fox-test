import { Entity } from '@backend/util/util-types';
import { TestDrive } from '@backend/shared/shared-types';


export class TestDriveEntity implements Entity<TestDriveEntity>, TestDrive {

  public testDriveId?: number;
  public reportId: number;
  public brakeSystem: boolean;
  public engine: boolean;
  public exhaustSystem: boolean;
  public parkingBrake: boolean;
  public steering: boolean;
  public suspension: boolean;
  public allSystemOk: boolean;
  public transmission: boolean;
  public electricMirrors: boolean;
  public comment: string;


  constructor(testDrive: TestDrive) {
    this.fillEntity(testDrive);
  }

  public fillEntity(entity: TestDrive): void {
    this.testDriveId = entity.testDriveId;
    this.reportId = entity.reportId;
    this.brakeSystem = entity.brakeSystem;
    this.engine = entity.engine;
    this.exhaustSystem = entity.exhaustSystem;
    this.parkingBrake = entity.parkingBrake;
    this.steering = entity.steering;
    this.suspension = entity.suspension;
    this.allSystemOk = entity.allSystemOk;
    this.transmission = entity.transmission;
    this.electricMirrors = entity.electricMirrors;
    this.comment = entity.comment;

  }

  public toObject(): TestDriveEntity {
    return { ...this }
  }
}