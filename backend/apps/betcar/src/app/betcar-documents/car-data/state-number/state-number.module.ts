import { StateNumberController } from "./state-number.controller";
import { StateNumberService } from "./state-number.service";
import { StateNumberRepository } from "./state-number.repository";
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [StateNumberController],
  providers: [StateNumberService, StateNumberRepository],
  exports: [StateNumberRepository]
})
export class StateNumberModule {}