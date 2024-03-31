import { RightSideDamageController } from './right-side-damage.controller';
import { RightSideDamageService } from './right-side-damage.service';
import { RightSideDamageRepository } from './right-side-damage.repository';
import { Module } from '@nestjs/common';
import { AddElementRightModule } from './add-element-right/add-element-right.module';

@Module({
  imports: [
    AddElementRightModule,
  ],
  controllers: [RightSideDamageController],
  providers: [RightSideDamageService, RightSideDamageRepository],
  exports: [RightSideDamageRepository]
})
export class RightSideDamageModule {}