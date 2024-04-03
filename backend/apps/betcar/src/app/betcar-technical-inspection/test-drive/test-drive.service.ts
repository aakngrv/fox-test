import { CreateTestDriveDto} from "./dto/create-test-drive.dto";
import { TestDrive } from '@backend/shared/shared-types';
import { TestDriveRepository} from "./test-drive.repository";
import { Injectable } from '@nestjs/common';
import { TestDriveEntity} from "./test-drive.entity";
import { UpdateTestDriveDto} from "./dto/update-test-drive.dto";

@Injectable()
export class TestDriveService {

  constructor(
    private readonly testDriveRepository: TestDriveRepository
  ) {}

  async createTestDrive(dto: CreateTestDriveDto): Promise<TestDrive> {
    const testDriveEntity = new TestDriveEntity(dto);
    return this.testDriveRepository.create(testDriveEntity);
  }

  async deleteTestDrive(id: number): Promise<void> {
    await this.testDriveRepository.destroy(id);
  }

  async getTestDrive(id: number): Promise<TestDrive> {
    return this.testDriveRepository.findById(id);
  }

  async updateTestDrive(id: number, dto: UpdateTestDriveDto): Promise<TestDrive> {
    return this.testDriveRepository.update(id, new TestDriveEntity(dto));
  }
}