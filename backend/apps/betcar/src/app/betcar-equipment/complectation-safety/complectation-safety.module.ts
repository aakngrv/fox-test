import { ComplectationSafetyController } from './complectation-safety.controller';
import { ComplectationSafetyService } from './complectation-safety.service';
import { ComplectationSafetyRepository } from './complectation-safety.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ComplectationSafetyController],
  providers: [ComplectationSafetyService, ComplectationSafetyRepository],
  exports: [ComplectationSafetyRepository]
})
export class ComplectationSafetyModule {}