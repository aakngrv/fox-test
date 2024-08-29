import { AddElementTestController } from './add-element-test.controller';
import { AddElementTestService } from './add-element-test.service';
import { AddElementTestRepository } from './add-element-test.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddElementTestController],
  providers: [AddElementTestService, AddElementTestRepository],
  exports: [AddElementTestRepository]
})
export class AddElementTestModule {}
