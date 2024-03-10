import { ComplectationComfortController } from './complectation-comfort.controller';
import { ComplectationComfortService } from './complectation-comfort.service';
import { ComplectationComfortRepository } from './complectation-comfort.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ComplectationComfortController],
  providers: [ComplectationComfortService, ComplectationComfortRepository],
  exports: [ComplectationComfortRepository]
})
export class ComplectationComfortModule {}