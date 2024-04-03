import { LeftSideDamageController } from './left-side-damage.controller';
import { LeftSideDamageService } from './left-side-damage.service';
import { LeftSideDamageRepository } from './left-side-damage.repository';
import { Module } from '@nestjs/common';
import { AddElementLeftModule } from './add-element-left/add-element-left.module';

@Module({
  imports: [
    AddElementLeftModule,
  ],
  controllers: [LeftSideDamageController],
  providers: [LeftSideDamageService, LeftSideDamageRepository],
  exports: [LeftSideDamageRepository]
})
export class LeftSideDamageModule {}