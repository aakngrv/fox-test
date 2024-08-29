import { CreateTestDriveDto} from "./dto/create-test-drive.dto";
import { TestDrive } from '@backend/shared/shared-types';
import { TestDriveRepository} from "./test-drive.repository";
import { Injectable } from '@nestjs/common';
import { TestDriveEntity} from "./test-drive.entity";
import { UpdateTestDriveDto} from "./dto/update-test-drive.dto";
import { AddElementTestRepository } from "./add-element-test/add-element-test.repository";

@Injectable()
export class TestDriveService {

  constructor(
    private readonly testDriveRepository: TestDriveRepository,
    private readonly addElementTestRepository: AddElementTestRepository
  ) {}

  async createTestDrive(dto: CreateTestDriveDto): Promise<TestDrive> {
    const addElementTest = await this.addElementTestRepository.find(dto.addElementTest);
    const testDriveEntity = new TestDriveEntity({
      ...dto,
      addElementTest
    });
    return this.testDriveRepository.create(testDriveEntity);
  }

  async deleteTestDrive(id: number): Promise<void> {
    await this.testDriveRepository.destroy(id);
  }

  async getTestDrive(id: number): Promise<TestDrive> {
    return this.testDriveRepository.findById(id);
  }

  async updateTestDrive(id: number, dto: UpdateTestDriveDto): Promise<TestDrive> {
    const addElementTest = await this.addElementTestRepository.find(dto.addElementTest);
    return this.testDriveRepository.update(id, new TestDriveEntity({
      ...dto,
      addElementTest
    }));
  }
}