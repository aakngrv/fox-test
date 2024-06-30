import { AddElementDashController } from './add-element-dash.controller';
import { AddElementDashService } from './add-element-dash.service';
import { AddElementDashRepository } from './add-element-dash.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddElementDashController],
  providers: [AddElementDashService, AddElementDashRepository],
  exports: [AddElementDashRepository]
})
export class AddElementDashModule {}
