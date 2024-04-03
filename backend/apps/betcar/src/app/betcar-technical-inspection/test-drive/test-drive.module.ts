import { TestDriveController } from "./test-drive.controller";
import { TestDriveService}  from "./test-drive.service";
import { TestDriveRepository } from "./test-drive.repository";
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [TestDriveController],
  providers: [TestDriveService, TestDriveRepository],
  exports: [TestDriveRepository]
})
export class TestDriveModule {}