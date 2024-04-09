import { EngineCompartmentDamageController } from './engine-compartment-damage.controller';
import { EngineCompartmentDamageService } from './engine-compartment-damage.service';
import { EngineCompartmentDamageRepository } from './engine-compartment-damage.repository';
import { Module } from '@nestjs/common';
import { AddElementModule } from './add-element/add-element.module';

@Module({
  imports: [
    AddElementModule,
  ],
  controllers: [EngineCompartmentDamageController],
  providers: [EngineCompartmentDamageService, EngineCompartmentDamageRepository],
  exports: [EngineCompartmentDamageRepository]
})
export class EngineCompartmentDamageModule {}