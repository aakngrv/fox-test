import { FrontSideDamageController } from './front-side-damage.controller';
import { FrontSideDamageService } from './front-side-damage.service';
import { FrontSideDamageRepository } from './front-side-damage.repository';
import { Module } from '@nestjs/common';
import { AddElementFrontModule } from './add-element-front/add-element-front.module';

@Module({
  imports: [
    AddElementFrontModule,
  ],
  controllers: [FrontSideDamageController],
  providers: [FrontSideDamageService, FrontSideDamageRepository],
  exports: [FrontSideDamageRepository]
})
export class FrontSideDamageModule {}
