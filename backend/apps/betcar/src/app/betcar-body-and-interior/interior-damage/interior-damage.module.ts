import { InteriorDamageController} from "./interior-damage.controller";
import { InteriorDamageService} from "./interior-damage.service";
import { InteriorDamageRepository} from "./interior-damage.repository";
import { Module } from '@nestjs/common';
import { AddElementInteriorModule} from "./add-element-interior/add-element-interior.module";

@Module({
  imports: [
    AddElementInteriorModule,
  ],
  controllers: [InteriorDamageController],
  providers: [InteriorDamageService, InteriorDamageRepository],
  exports: [InteriorDamageRepository]
})
export class InteriorDamageModule {}