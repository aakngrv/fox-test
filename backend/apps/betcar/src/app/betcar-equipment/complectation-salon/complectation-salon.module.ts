import { ComplectationSalonController } from './complectation-salon.controller';
import { ComplectationSalonService } from './complectation-salon.service';
import { ComplectationSalonRepository } from './complectation-salon.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ComplectationSalonController],
  providers: [ComplectationSalonService, ComplectationSalonRepository],
  exports: [ComplectationSalonRepository]
})
export class ComplectationSalonModule {}