import { ComplectationWheelsController } from './complectation-wheels.controller';
import { ComplectationWheelsService } from './complectation-wheels.service';
import { ComplectationWheelsRepository } from './complectation-wheels.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ComplectationWheelsController],
  providers: [ComplectationWheelsService, ComplectationWheelsRepository],
  exports: [ComplectationWheelsRepository]
})
export class ComplectationWheelsModule {}