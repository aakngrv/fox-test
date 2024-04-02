import { ExteriorPhotoController} from "./exterior-photo.controller";
import { ExteriorPhotoService} from "./exterior-photo.service";
import { ExteriorPhotoRepository} from "./exterior-photo.repository";
import { Module } from '@nestjs/common';
// import { AddElementDiscModule } from './add-element-disc/add-element-disc.module';

@Module({
  imports: [
    // AddElementDiscModule,
  ],
  controllers: [ExteriorPhotoController],
  providers: [ExteriorPhotoService, ExteriorPhotoRepository],
  exports: [ExteriorPhotoRepository]
})
export class ExteriorPhotoModule {}