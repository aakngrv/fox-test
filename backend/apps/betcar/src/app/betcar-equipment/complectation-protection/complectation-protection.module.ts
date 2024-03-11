import { ComplectationProtectionController } from './complectation-protection.controller';
import { ComplectationProtectionService } from './complectation-protection.service';
import { ComplectationProtectionRepository } from './complectation-protection.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ComplectationProtectionController],
  providers: [ComplectationProtectionService, ComplectationProtectionRepository],
  exports: [ComplectationProtectionRepository]
})
export class ComplectationProtectionModule {}