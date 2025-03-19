import { Module } from '@nestjs/common';
import { ExpertOnDayController } from './expert-on-day.controller';
import { ExpertOnDayService } from './expert-on-day.service';
import { ExpertOnDayRepository } from './expert-on-day.repository';


@Module({
  imports: [
  ],
  controllers: [ExpertOnDayController],
  providers: [
    ExpertOnDayService, 
    ExpertOnDayRepository
  ],
  exports: []
})
export class ExpertOnDayModule {}