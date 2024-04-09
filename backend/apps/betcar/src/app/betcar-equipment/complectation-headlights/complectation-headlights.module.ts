import { ComplectationHeadlightsController } from './complectation-headlights.controller';
import { ComplectationHeadlightsService } from './complectation-headlights.service';
import { ComplectationHeadlightsRepository } from './complectation-headlights.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ComplectationHeadlightsController],
  providers: [ComplectationHeadlightsService, ComplectationHeadlightsRepository],
  exports: [ComplectationHeadlightsRepository]
})
export class ComplectationHeadlightsModule {}