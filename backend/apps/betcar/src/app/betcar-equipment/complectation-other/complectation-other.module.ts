import { ComplectationOtherController } from './complectation-other.controller';
import { ComplectationOtherService } from './complectation-other.service';
import { ComplectationOtherRepository } from './complectation-other.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ComplectationOtherController],
  providers: [ComplectationOtherService, ComplectationOtherRepository],
  exports: [ComplectationOtherRepository]
})
export class ComplectationOtherModule {}