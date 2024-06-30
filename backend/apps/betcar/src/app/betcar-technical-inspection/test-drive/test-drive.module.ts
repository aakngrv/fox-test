import { TestDriveController } from "./test-drive.controller";
import { TestDriveService}  from "./test-drive.service";
import { TestDriveRepository } from "./test-drive.repository";
import { Module } from '@nestjs/common';
import { AddElementTestModule } from "./add-element-test/add-element-test.module";

@Module({
  imports: [
    AddElementTestModule
  ],
  controllers: [TestDriveController],
  providers: [TestDriveService, TestDriveRepository],
  exports: [TestDriveRepository]
})
export class TestDriveModule {}