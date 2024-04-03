import { InteriorPhotoController} from "./interior-photo.controller";
import { InteriorPhotoService} from "./interior-photo.service";
import { InteriorPhotoRepository} from "./interior-photo.repository";
import { Module } from '@nestjs/common';
// import { AddElementDiscModule } from './add-element-disc/add-element-disc.module';

@Module({
  imports: [
    // AddElementDiscModule,
  ],
  controllers: [InteriorPhotoController],
  providers: [InteriorPhotoService, InteriorPhotoRepository],
  exports: [InteriorPhotoRepository]
})
export class InteriorPhotoModule {}