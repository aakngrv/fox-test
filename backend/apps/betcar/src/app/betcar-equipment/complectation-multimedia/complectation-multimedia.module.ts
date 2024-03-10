import { ComplectationMultimediaController } from './complectation-multimedia.controller';
import { ComplectationMultimediaService } from './complectation-multimedia.service';
import { ComplectationMultimediaRepository } from './complectation-multimedia.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ComplectationMultimediaController],
  providers: [ComplectationMultimediaService, ComplectationMultimediaRepository],
  exports: [ComplectationMultimediaRepository]
})
export class ComplectationMultimediaModule {}