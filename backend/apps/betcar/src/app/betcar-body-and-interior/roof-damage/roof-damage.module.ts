import { RoofDamageController } from './roof-damage.controller';
import { RoofDamageService } from './roof-damage.service';
import { RoofDamageRepository } from './roof-damage.repository';
import { Module } from '@nestjs/common';
import { AddElementRoofModule } from './add-element-roof/add-element-roof.module';

@Module({
  imports: [
    AddElementRoofModule,
  ],
  controllers: [RoofDamageController],
  providers: [RoofDamageService, RoofDamageRepository],
  exports: [RoofDamageRepository]
})
export class RoofDamageModule {}